import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import lightModeLogo from '../assets/lightmode.png';
import darkModeLogo from '../assets/dark.png';

const Footer = () => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        // Initial check
        setIsDark(document.documentElement.classList.contains('dark'));

        // Observer for changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-app-card pt-20 pb-10 border-t border-app transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <img
                                src={isDark ? darkModeLogo : lightModeLogo}
                                alt="PREMPLUS"
                                className="h-11 w-auto"
                            />
                        </Link>
                        <p className="text-app-muted leading-relaxed text-sm">
                            Fueling industries, empowering sustainable solutions for powering our world. We lead the way in innovative energy services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=61581626194270" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-app flex items-center justify-center text-app-main hover:bg-brand-yellow hover:border-brand-yellow hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/premplusltd?igsh=Zzg2Y2xpcHRnYWEx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-app flex items-center justify-center text-app-main hover:bg-brand-yellow hover:border-brand-yellow hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.linkedin.com/company/premplusltd/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-app flex items-center justify-center text-app-main hover:bg-brand-yellow hover:border-brand-yellow hover:text-white transition-all duration-300">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-app-main">Company</h4>
                        <ul className="space-y-4 text-sm text-app-muted">
                            <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
                            <li><Link to="/projects" className="hover:text-brand-yellow transition-colors">Projects</Link></li>
                            <li><Link to="/team" className="hover:text-brand-yellow transition-colors">Our Team</Link></li>
                            <li><Link to="/careers" className="hover:text-brand-yellow transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-app-main">Services</h4>
                        <ul className="space-y-4 text-sm text-app-muted">
                            <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Renewable Energy</Link></li>
                            <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Consultation</Link></li>
                            <li><Link to="/services" className="hover:text-brand-yellow transition-colors">Green Energy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-app-main">Newsletter</h4>
                        <p className="text-sm text-app-muted mb-6">Subscribe to receive the latest updates and news articles.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-app-secondary border border-app rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 focus:border-brand-yellow transition-all text-sm text-app-main placeholder:text-app-muted"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 top-1 bottom-1 bg-brand-yellow text-brand-dark px-4 rounded-lg hover:bg-brand-yellow/90 transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-app flex flex-col md:flex-row justify-between items-center text-sm text-app-muted gap-4">
                    <p>© 2026 Premplus. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
