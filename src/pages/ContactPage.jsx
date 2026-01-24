import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 bg-app-secondary min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold text-app-main mb-6"
                    >
                        We're Here to Help
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-app-muted leading-relaxed"
                    >
                        Whether you have a question about our services, pricing, or just want to say hello, our team is ready to answer all your questions.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-1 space-y-6"
                    >
                        <div className="bg-app-card p-8 rounded-[30px] shadow-lg border border-app hover:shadow-xl transition-shadow bg-app-card">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-brand-green mb-6">
                                <Phone size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-app-main mb-2">Call Us</h3>
                            <p className="text-app-muted mb-4">Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+2348166951293" className="text-lg font-bold text-app-main hover:text-brand-yellow transition-colors block">
                                (234) 816-695-1293
                            </a>
                        </div>

                        <div className="bg-app-card p-8 rounded-[30px] shadow-lg border border-app hover:shadow-xl transition-shadow bg-app-card">
                            <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center text-brand-yellow mb-6">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-app-main mb-2">Email Us</h3>
                            <p className="text-app-muted mb-4">Ideally we reply within 24hrs.</p>
                            <a href="mailto:info@premplus.com" className="text-lg font-bold text-app-main hover:text-brand-yellow transition-colors block">
                                info@premplus.com
                            </a>
                        </div>

                        <div className="bg-app-card p-8 rounded-[30px] shadow-lg border border-app hover:shadow-xl transition-shadow bg-app-card">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-brand-dark mb-6">
                                <MapPin size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-app-main mb-2">Visit Us</h3>
                            <p className="text-app-muted mb-4">Come say hello at our office.</p>
                            <p className="text-app-main font-medium leading-relaxed">
                                Area 11, Annex, Suite 32, Takum St, Garki, Abuja 900103
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}

                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-app-card p-10 md:p-12 rounded-[40px] shadow-xl border border-app transition-colors duration-300"
                    >
                        <h2 className="text-3xl font-bold text-app-main mb-8">Send us a Message</h2>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-app-main mb-2 uppercase tracking-wide">First Name</label>
                                <input type="text" className="w-full bg-app-secondary border border-app focus:border-brand-yellow focus:bg-app-card px-6 py-4 rounded-2xl outline-none transition-all font-medium text-app-main" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-app-main mb-2 uppercase tracking-wide">Last Name</label>
                                <input type="text" className="w-full bg-app-secondary border border-app focus:border-brand-yellow focus:bg-app-card px-6 py-4 rounded-2xl outline-none transition-all font-medium text-app-main" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-app-main mb-2 uppercase tracking-wide">Email Address</label>
                            <input type="email" className="w-full bg-app-secondary border border-app focus:border-brand-yellow focus:bg-app-card px-6 py-4 rounded-2xl outline-none transition-all font-medium text-app-main" />
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-app-main mb-2 uppercase tracking-wide">Message</label>
                            <textarea rows="6" className="w-full bg-app-secondary border border-app focus:border-brand-yellow focus:bg-app-card px-6 py-4 rounded-2xl outline-none transition-all font-medium resize-none text-app-main"></textarea>
                        </div>
                        <button className="w-full md:w-auto bg-brand-dark text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-brand-yellow hover:text-brand-dark transition-all transform hover:-translate-y-1 shadow-xl">
                            Send Message
                        </button>
                    </motion.div>
                </div>

                {/* Map Section */}
                <div className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?q=Area%2011%2C%20Annex%2C%20Suite%2032%2C%20Takum%20St%2C%20Garki%2C%20Abuja%20900103&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Office Location"
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;
