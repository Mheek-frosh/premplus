import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const services = [
    { id: '01', title: 'Petroleum Product Supply', desc: 'World-class supply of petroleum products.' },
    { id: '02', title: 'Lubricant and Chemical Storage', desc: 'Secure and efficient storage solutions.' },
    { id: '03', title: 'Renewable Power Solutions', desc: 'Leading the green energy transition.' },
    { id: '04', title: 'Logistics and Distribution', desc: 'Seamless global energy logistics.' },
];

const Services = () => {
    return (
        <section id="services" className="bg-app-main py-24 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="mb-16">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Solutions</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-app-main">Reliable Energy Services <br /> You Can <span className="text-brand-green">Trust</span></h2>
                    </div>

                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex items-center justify-between p-8 rounded-2xl border border-app bg-app-card hover:border-brand-green/30 hover:bg-app-secondary hover:shadow-xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="flex items-center gap-8">
                                    <span className="text-xl font-bold text-brand-green">
                                        {service.id}
                                    </span>
                                    <div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 text-app-main">{service.title}</h3>
                                            <p className="text-app-muted">{service.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 rounded-full transition-all duration-300 bg-app-secondary text-app-main group-hover:bg-brand-green group-hover:text-white">
                                    <ChevronRight size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
