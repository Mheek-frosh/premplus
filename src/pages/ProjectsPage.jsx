import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProjectsPage = () => {
    const projects = [
        {
            title: "Solar Grid Integration",
            category: "Renewable Energy",
            desc: "Integrated a 50MW solar farm into the national grid infrastructure.",
            image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80"
        },
        {
            title: "Urban Power Upgrade",
            category: "Distribution",
            desc: "Modernized the power distribution network for a major metropolitan area.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
        },
        {
            title: "Green Office Complex",
            category: "Sustainable Building",
            desc: "LEED Platinum certified commercial building design and energy systems.",
            image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80"
        },
        {
            title: "Offshore Wind Study",
            category: "Feasibility",
            desc: "Comprehensive environmental and technical feasibility study for offshore wind.",
            image: "https://images.unsplash.com/photo-1466611653911-954ff21caaf0?w=800&q=80"
        },
        {
            title: "Smart Meter Rollout",
            category: "Technology",
            desc: "Deployment of 100,000+ smart meters for efficient energy monitoring.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
        },
        {
            title: "Rural Electrification",
            category: "Infrastructure",
            desc: "Providing reliable solar-hybrid power to remote communities.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-[#F8F9FA] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4">Our Projects</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
                            Delivering Excellence <br /> Across Industries
                        </h1>
                    </div>
                    <p className="text-brand-gray max-w-md leading-relaxed">
                        Explore our portfolio of successful projects that demonstrate our commitment to innovation and sustainable development.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Card Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-dark uppercase tracking-wider">
                                    {project.category}
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 relative">
                                <h3 className="text-2xl font-bold text-brand-dark mb-4">{project.title}</h3>
                                <p className="text-brand-gray mb-8 line-clamp-3 leading-relaxed">
                                    {project.desc}
                                </p>

                                <button className="flex items-center gap-2 font-bold text-brand-green group-hover:text-brand-yellow transition-colors">
                                    View Case Study <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProjectsPage;
