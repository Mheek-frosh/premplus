import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, ShieldCheck, Building2, FileText } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            title: "Renewable Energy Design",
            desc: "End-to-end solar and wind energy systems customized for your business needs.",
            icon: <Zap size={24} />,
            image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80"
        },
        {
            title: "Transmission Consultancy",
            desc: "Expert advisory for high voltage power transmission and distribution networks.",
            icon: <ShieldCheck size={24} />,
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
        },
        {
            title: "Sustainable Building Design",
            desc: "Eco-friendly architectural solutions that maximize energy efficiency.",
            icon: <Building2 size={24} />,
            image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
        },
        {
            title: "Technical Advisory",
            desc: "Strategic guidance on energy regulations and policy compliance.",
            icon: <FileText size={24} />,
            image: "https://images.unsplash.com/photo-1454165205732-d01140e59b73?w=800&q=80"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-[#F8F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4">Our Services</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
                            Professional Energy <br /> Solutions We Provide
                        </h1>
                    </div>
                    <p className="text-brand-gray max-w-md leading-relaxed">
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
                            className="bg-white group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[40px] border border-gray-100"
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

                                <h3 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h3>
                                <p className="text-brand-gray mb-8 line-clamp-3 leading-relaxed">
                                    {service.desc}
                                </p>

                                <button className="flex items-center gap-2 font-bold text-brand-dark group-hover:text-brand-yellow transition-colors">
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
