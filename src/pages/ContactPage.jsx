import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Contact Us</h1>
                    <p className="text-lg text-brand-gray">We're here to help. Reach out to us for any inquiries or assistance.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">

                    {/* Left: Contact Form */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-brand-dark font-bold mb-2">Name</label>
                            <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-transparent focus:border-brand-yellow focus:bg-white px-6 py-4 rounded-xl outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-brand-dark font-bold mb-2">Email</label>
                            <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-transparent focus:border-brand-yellow focus:bg-white px-6 py-4 rounded-xl outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-brand-dark font-bold mb-2">Subject</label>
                            <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-transparent focus:border-brand-yellow focus:bg-white px-6 py-4 rounded-xl outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-brand-dark font-bold mb-2">Message</label>
                            <textarea rows="6" placeholder="Your Message" className="w-full bg-gray-50 border border-transparent focus:border-brand-yellow focus:bg-white px-6 py-4 rounded-xl outline-none transition-all resize-none"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-brand-yellow text-brand-dark font-bold px-10 py-3 rounded-lg hover:scale-105 transition-transform shadow-lg">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* Right: Info & Map */}
                    <div className="space-y-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-brand-dark mb-6">Our Contact Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-green-500 w-6 h-6 mt-1 flex-shrink-0" />
                                    <p className="text-brand-dark text-lg">71a Molade Okoya thomas, Victoria Island Lagos Nigeria</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-green-500 w-6 h-6 flex-shrink-0" />
                                    <p className="text-brand-dark text-lg">(234) 816-695-1293</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-green-500 w-6 h-6 flex-shrink-0" />
                                    <p className="text-brand-dark text-lg">info@unicornlaw.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80"
                                alt="Map Location"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center max-w-2xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">Ready to Transform Your <br /> Business?</h2>
                    <p className="text-brand-gray text-lg">
                        Let's discuss how our expertise technology can help you achieve your goals. Contact us for a consultation.
                    </p>
                    <button className="bg-brand-yellow text-brand-dark font-bold px-10 py-4 rounded-lg hover:scale-105 transition-transform shadow-xl">
                        Work with
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;
