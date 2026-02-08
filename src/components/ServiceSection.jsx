import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, HardHat, ShieldCheck, GraduationCap } from 'lucide-react';

const services = [
    {
        title: 'Renewable Energy Solutions',
        icon: <Zap className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
        desc: 'Advanced solar, wind, and hybrid energy systems designed for long-term sustainability and efficiency.'
    },
    {
        title: 'Electricity Market and Energy Sector Advisory',
        icon: <ShieldCheck className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1454165205732-d01140e59b73?w=800&q=80',
        desc: 'Expert consulting on regulatory frameworks, market dynamics, and strategic energy planning.'
    },
    {
        title: 'Capacity Development and Energy Innovation',
        icon: <GraduationCap className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
        desc: 'Empowering stakeholders through specialized training and fostering cutting-edge energy technologies.'
    },
    {
        title: 'Engineering, Procurement and Construction',
        icon: <HardHat className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1538474705339-e85de812795c?w=800&q=80',
        desc: 'Integrated EPC services ensuring seamless delivery of large-scale infrastructure and energy projects.'
    }
];

const ServiceSection = () => {
    return (
        <section id="service-area" className="py-24 bg-app-main relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 transform translate-x-1/2 -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    {/* <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4"
                    >
                        Our Core Offerings
                    </motion.span> */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-app-main"
                    >
                        Comprehensive Energy <br className="hidden md:block" /> & Engineering Services
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-app-card rounded-3xl overflow-hidden border border-app shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
                                <div className="absolute bottom-4 left-4 p-3 bg-app-main/90 backdrop-blur rounded-2xl shadow-lg">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors leading-tight text-app-main">
                                    {service.title}
                                </h3>
                                <p className="text-app-muted text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
