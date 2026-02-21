import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Shield, FileText, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const timer = setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [hash]);
    const privacySections = [
        {
            title: "1. Introduction",
            content: "Premplus Nig. Ltd (“Premplus,” “we,” “our,” or “us”) is committed to protecting your privacy and ensuring your personal information is handled responsibly and in compliance with applicable data protection laws."
        },
        {
            title: "2. Information We Collect",
            content: "We may collect personal information such as your name, email address, phone number, organization name, and any details you voluntarily provide through contact forms or newsletter subscriptions. We may also collect non-personal information such as IP address, browser type, device information, and usage data."
        },
        {
            title: "3. How We Use Your Information",
            content: "We use collected information to respond to inquiries, provide requested services, improve our website, maintain security, and send updates where consent has been provided. We do not sell, rent, or trade personal information."
        },
        {
            title: "4. Cookies and Analytics",
            content: "Our website may use cookies and third-party analytics tools to improve user experience and analyze performance. You may disable cookies through your browser settings."
        },
        {
            title: "5. Data Protection",
            content: "We implement appropriate technical and organizational measures to safeguard your information. However, no method of internet transmission is completely secure."
        },
        {
            title: "6. Third-Party Links",
            content: "Our website may contain links to external websites. We are not responsible for the privacy practices of those third-party sites."
        },
        {
            title: "7. Your Rights",
            content: "You may request access to, correction of, or deletion of your personal data, subject to applicable law. To exercise your rights, contact us at info@premplus.com.ng."
        },
        {
            title: "8. Changes to This Policy",
            content: "We may update this Privacy Policy periodically. Any updates will be reflected with a revised “Last Updated” date."
        }
    ];

    const termsSections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using this website, you agree to comply with these Terms of Service."
        },
        {
            title: "2. Use of Website",
            content: "You agree not to use the website for unlawful purposes, attempt unauthorized access, disrupt functionality, or reproduce content without permission."
        },
        {
            title: "3. Intellectual Property",
            content: "All content on this website, including text, logos, images, and design elements, is the property of Premplus Nig. Ltd unless otherwise stated."
        },
        {
            title: "4. Disclaimer",
            content: "The information on this website is provided for general informational purposes only. We do not guarantee accuracy or completeness."
        },
        {
            title: "5. Limitation of Liability",
            content: "Premplus Nig. Ltd shall not be liable for any direct or indirect damages arising from the use of this website."
        },
        {
            title: "6. External Links",
            content: "We may include links to third-party websites. We are not responsible for their content or practices."
        },
        {
            title: "7. Governing Law",
            content: "These Terms are governed by the laws of the Federal Republic of Nigeria."
        },
        {
            title: "8. Changes to Terms",
            content: "We reserve the right to update these Terms at any time. Continued use of the website constitutes acceptance of any changes."
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-app-secondary min-h-screen transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-app-main mb-4">
                        Privacy Policy & Terms of Service
                    </h1>
                    <p className="text-app-muted text-lg">
                        Premplus Nig. Ltd
                    </p>
                </motion.div>

                {/* Privacy Policy */}
                <motion.section
                    id="privacy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green">
                            <Shield size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-app-main">Privacy Policy</h2>
                            <p className="text-app-muted text-sm">Last Updated: February 21, 2026</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {privacySections.map((section, index) => (
                            <div key={index} className="bg-app-card p-6 md:p-8 rounded-2xl border border-app">
                                <h3 className="text-lg font-bold text-app-main mb-3">{section.title}</h3>
                                <p className="text-app-muted leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Terms of Service */}
                <motion.section
                    id="terms"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-app-main">Terms of Service</h2>
                            <p className="text-app-muted text-sm">Last Updated: February 21, 2026</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {termsSections.map((section, index) => (
                            <div key={index} className="bg-app-card p-6 md:p-8 rounded-2xl border border-app">
                                <h3 className="text-lg font-bold text-app-main mb-3">{section.title}</h3>
                                <p className="text-app-muted leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-app-card p-8 md:p-10 rounded-2xl border border-app text-center"
                >
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-green/15 flex items-center justify-center text-brand-green">
                            <Mail size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-app-main mb-2">Contact Information</h3>
                    <p className="text-app-muted mb-2">Premplus Nig. Ltd</p>
                    <a href="mailto:info@premplus.com.ng" className="text-brand-green font-semibold hover:text-brand-yellow transition-colors">
                        info@premplus.com.ng
                    </a>
                </motion.div>

                {/* Back to home */}
                <div className="mt-12 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-semibold hover:text-brand-yellow transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
