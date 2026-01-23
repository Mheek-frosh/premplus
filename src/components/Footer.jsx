import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Logo & Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold tracking-tighter text-brand-dark">
                            PREMPLUS
                        </Link>
                        <p className="text-brand-gray leading-relaxed text-sm">
                            Fueling industries, empowering sustainable solutions for powering our world. We lead the way in innovative energy services.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-brand-yellow hover:border-brand-yellow hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-brand-gray">
                            <li><Link to="/about" className="hover:text-brand-yellow transition-colors">About Us</Link></li>
                            <li><Link to="/about#history" className="hover:text-brand-yellow transition-colors">Our History</Link></li>
                            <li><Link to="/team" className="hover:text-brand-yellow transition-colors">Our Team</Link></li>
                            <li><Link to="/careers" className="hover:text-brand-yellow transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-brand-gray">
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Oil Supply</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Renewable Energy</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Gas Distribution</a></li>
                            <li><a href="#" className="hover:text-brand-yellow transition-colors">Consultation</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-brand-gray mb-6">Subscribe to receive the latest updates and news articles.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 focus:border-brand-yellow transition-all text-sm"
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
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-brand-gray gap-4">
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
