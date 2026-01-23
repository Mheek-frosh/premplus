import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isAboutOpen, setIsAboutOpen] = useState(false);

    // Check if we are on the home page
    const isHome = pathname === '/';

    // Determine which logo and text color to use
    // If scrolled OR not on home page -> Dark mode (White background, Dark Text, Logo 1)
    // If on home page AND not scrolled -> Transparent mode (Dark overlay/background, White Text, Logo 2)
    const isDarkText = scrolled || !isHome;

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
        { name: 'Projects', href: '/#projects' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center">
                        <img
                            src={isDarkText ? logo1 : logo2}
                            alt="PREMPLUS"
                            className="h-10 w-auto" // Adjust height as needed
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
                                    className={`text-sm font-medium transition-colors hover:text-brand-yellow py-2 ${isDarkText ? 'text-brand-dark' : 'text-white/90'}`}
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
                                                className="absolute left-0 mt-2 w-56 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl overflow-hidden py-2"
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
                                                            className="block px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-yellow/10 transition-colors"
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
                            className={`${isDarkText ? 'text-brand-dark' : 'text-white'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <React.Fragment key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="block px-3 py-3 text-base font-bold text-brand-dark hover:bg-gray-50 rounded-lg transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                    {link.dropdown && link.dropdown.map(sub => (
                                        <Link
                                            key={sub.name}
                                            to={sub.href}
                                            className="block px-8 py-2 text-sm font-medium text-brand-gray hover:text-brand-yellow transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </React.Fragment>
                            ))}
                            <div className="pt-4">
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
