import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Building2, FileText } from 'lucide-react';
import lookbackImg from '../assets/lookback.png';
import roundtableImg from '../assets/roundtable.png';
import innovationImg from '../assets/innovation.png';

const ServicesPage = () => {
    const services = [
        {
            title: "Renewable energy solutions",
            desc: "End-to-end solar, wind, and hybrid energy systems customized for your business needs.",
            icon: <Zap size={24} />,
            image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80"
        },
        {
            title: "Electricity Market and Energy sector advisory",
            desc: "Expert advisory for power transmission, electricity market regulations, and distribution network optimization.",
            icon: <ShieldCheck size={24} />,
            image: roundtableImg
        },
        {
            title: "Capacity development and energy innovation",
            desc: "Training programs, research, and innovative energy solutions to drive industry growth and sustainability.",
            icon: <ArrowRight size={24} />,
            image: innovationImg
        },
        {
            title: "Engineering, procurement and construction",
            desc: "Comprehensive EPC services for energy infrastructure, from design to final implementation.",
            icon: <Building2 size={24} />,
            image: lookbackImg
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-app-secondary min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-app-main">
                            Professional Energy <br /> Solutions We Provide
                        </h1>
                    </div>
                    <p className="text-app-muted max-w-md leading-relaxed">
                        Competently repurpose go forward benefits without goal-oriented conveniently target opportunities whereas parallel services.
                    </p>
                </div>

                {/* Services Grid - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}

                            className="bg-app-card group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[40px] border border-app"
                        >
                            {/* Card Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
                            </div>

                            {/* Card Content */}
                            <div className="p-8 relative">
                                {/* Floating Icon overlapping image line */}
                                <div className="absolute -top-10 right-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-brand-green">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-app-main mb-4">{service.title}</h3>
                                <p className="text-app-muted mb-8 line-clamp-3 leading-relaxed">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 font-bold text-app-main group-hover:text-brand-yellow transition-colors">
                                    View Details <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;
