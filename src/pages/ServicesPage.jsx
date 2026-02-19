import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Building2, X, Check } from 'lucide-react';
import lookbackImg from '../assets/lookback.png';
import roundtableImg from '../assets/roundtable.png';
import innovationImg from '../assets/innovation.png';

const servicesData = [
    {
        title: "Renewable Energy Solutions",
        desc: "Development and deployment of renewable and distributed energy systems, including solar mini-grids, hybrid power systems, and innovative clean energy solutions tailored for commercial, industrial, and community applications.",
        icon: <Zap size={24} />,
        image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80",
        details: {
            intro: "We develop and deploy renewable and distributed energy systems tailored to commercial, industrial, public-sector, private and community applications. Our portfolio includes:",
            bullets: [
                "Solar mini-grids and hybrid power systems",
                "Off-grid solar solutions",
                "Grid-connected and embedded solar solutions",
                "Productive Use of Energy (PUE) systems that unlock economic value",
                "Innovative clean energy and energy efficiency solutions"
            ],
            closing: "We focus on projects that deliver strong performance, long-term reliability, and measurable returns."
        }
    },
    {
        title: "Electricity Market and Energy Sector Advisory",
        desc: "Expert advisory on electricity market design, regulatory and commercial frameworks, energy policy development, and power sector reform to improve market efficiency and investor confidence.",
        icon: <ShieldCheck size={24} />,
        image: roundtableImg,
        details: {
            intro: "We provide advisory services to support the development and strengthening of electricity markets and sector institutions. Our services include:",
            bullets: [
                "Electricity market design and transition support",
                "Regulatory and commercial advisory",
                "Energy and electricity policy development",
                "Renewable energy and clean energy strategies",
                "Implementation frameworks, roadmaps, and action plans",
                "Power sector reform and institutional strengthening",
                "Investment readiness and transaction support"
            ],
            closing: "Premplus works across Federal and State Governments, supporting reforms that improve market efficiency, transparency, and investor confidence."
        }
    },
    {
        title: "Capacity Development and Energy Innovation",
        desc: "Targeted capacity development through technical and professional training, executive-level courses, and the development of Energy Innovation and Skills Hubs.",
        icon: <ArrowRight size={24} />,
        image: innovationImg,
        details: {
            intro: "Recognising that sustainable markets depend on strong institutions and skilled professionals, Premplus delivers targeted capacity development solutions, including:",
            bullets: [
                "Technical and professional training programmes",
                "Executive-level energy market and power sector courses",
                "Institutional strengthening and operational support"
            ],
            closing: "We also support the development of Energy Innovation and Skills Hubs, providing platforms for applied training, technology deployment, and sector collaboration."
        }
    },
    {
        title: "Sustainable Building and Infrastructure Design",
        desc: "Integration of renewable energy, energy efficiency, and climate-responsive design into buildings and infrastructure to reduce costs and support sustainability objectives.",
        icon: <Building2 size={24} />,
        image: lookbackImg,
        details: {
            intro: "Premplus integrates renewable energy, energy efficiency, and climate-responsive design into buildings and infrastructure. Our services include:",
            bullets: [
                "Sustainable and energy-efficient building designs",
                "Integration of renewable energy systems into infrastructure projects",
                "Climate-responsive and resource-efficient design solutions"
            ],
            closing: "These approaches reduce lifecycle costs, improve asset performance, and support sustainability objectives."
        }
    }
];

const ServiceDetailsModal = ({ service, onClose }) => {
    if (!service) return null;
    const { details } = service;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-app-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-app"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="relative p-8 pb-6 border-b border-app">
                    <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-green/15 flex items-center justify-center text-brand-green">
                            {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl font-bold text-app-main">{service.title}</h2>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-app-secondary text-app-muted hover:text-app-main transition-colors"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                    <p className="text-app-muted text-lg leading-relaxed mb-6">
                        {details.intro}
                    </p>
                    <ul className="space-y-3 mb-6">
                        {details.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-brand-green" strokeWidth={3} />
                                </span>
                                <span className="text-app-main leading-relaxed">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-app-muted text-lg leading-relaxed border-l-4 border-brand-green pl-6 py-2">
                        {details.closing}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setSelectedService(null);
        };
        if (selectedService) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [selectedService]);

    return (
        <div className="pt-32 pb-24 bg-app-secondary min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div className="max-w-2xl text-left">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-app-main">
                            Professional Energy <br /> Solutions We Provide
                        </h1>
                    </div>
                    <p className="text-app-muted max-w-md leading-relaxed text-left">
                        Competently repurpose go forward benefits without goal-oriented conveniently target opportunities whereas parallel services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-app-card group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[40px] border border-app"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-brand-dark/0 transition-colors" />
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute -top-10 right-8 w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center text-brand-green">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-app-main mb-4">{service.title}</h3>
                                <p className="text-app-muted mb-8 line-clamp-3 leading-relaxed">
                                    {service.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="flex items-center gap-2 font-bold text-app-main group-hover:text-brand-yellow transition-colors"
                                >
                                    View Details <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Details Modal */}
            <AnimatePresence>
                {selectedService && (
                    <ServiceDetailsModal
                        key={selectedService.title}
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServicesPage;
