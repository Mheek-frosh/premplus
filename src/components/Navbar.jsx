import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import lightModeLogo from '../assets/lightmode.png';
import darkModeLogo from '../assets/dark.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isAboutOpen, setIsAboutOpen] = useState(false);


    // Check if we are on the home or about page (transparent initially)
    const isTransparentNav = pathname === '/' || pathname === '/about';

    // Determine which logo and text color to use
    // If scrolled OR not on a transparent-nav page -> Solid background mode (Dark Text in light mode, White text in dark mode)
    // If on transparent-nav page AND not scrolled -> Transparent mode (White Text)
    // NOTE: isDarkText refers to the "Solid Background" state where usually text is dark (in light mode).
    const isSolidNav = scrolled || !isTransparentNav;

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '/about',
            dropdown: [
                { name: 'About Premplus', href: '/about' },
                { name: 'Our Team', href: '/team' },
                { name: 'Careers', href: '/careers' }
            ]
        },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolidNav ? 'bg-app-card shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <img
                            src={(isSolidNav && !darkMode) ? lightModeLogo : darkModeLogo}
                            alt="PREMPLUS"
                            className="h-20 w-auto"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group pb-4 -mb-4 focus-within:block"
                                onMouseEnter={() => link.dropdown && setIsAboutOpen(true)}
                                onMouseLeave={() => link.dropdown && setIsAboutOpen(false)}
                            >
                                <Link
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-brand-yellow py-2 ${(isSolidNav && !darkMode) ? 'text-app-main' : 'text-white/90'}`}
                                >
                                    {link.name}
                                </Link>

                                {link.dropdown && (
                                    <AnimatePresence>
                                        {isAboutOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute left-0 mt-2 w-56 bg-app-card/95 backdrop-blur-xl border border-app rounded-2xl shadow-2xl overflow-hidden py-2"
                                            >
                                                {link.dropdown.map((sub, idx) => (
                                                    <motion.div
                                                        key={sub.name}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <Link
                                                            to={sub.href}
                                                            className="block px-6 py-3 text-sm font-semibold text-app-main hover:bg-brand-yellow/10 transition-colors"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full transition-colors ${(isSolidNav && !darkMode) ? 'hover:bg-app-secondary text-app-main' : 'hover:bg-white/10 text-white'}`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/contact">
                            <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full font-semibold text-sm hover:scale-105 transition-transform shadow-lg shadow-brand-yellow/20">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${(isSolidNav && !darkMode) ? 'text-app-main hover:bg-app-secondary rounded-lg' : 'text-white hover:bg-white/10 rounded-lg'}`}
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-app-card border-b border-app overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <React.Fragment key={link.name}>
                                    {link.dropdown ? (
                                        <div className="py-2 pl-4">
                                            <Link
                                                to={link.href}
                                                className="block px-3 py-2 text-base font-bold text-app-main hover:text-brand-yellow transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                            <div className="mt-1 space-y-1 border-l-2 border-brand-yellow/30 ml-3">
                                                {link.dropdown.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.href}
                                                        className="block px-4 py-2 text-sm font-semibold text-app-muted hover:text-brand-yellow transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className="block px-3 py-3 text-base font-bold text-app-main hover:bg-app-secondary rounded-xl transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                            <div className="pt-4 space-y-3">
                                {/* Theme Toggle for Mobile */}
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="w-full flex items-center justify-between px-6 py-3 rounded-xl font-bold bg-app-secondary text-app-main hover:bg-app-main transition-colors"
                                >
                                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                                </button>

                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                                        Contact Us <ArrowRight size={18} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
