import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Solar Farm Alpha', category: 'Renewables', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80' },
    { title: 'Offshore Wind Beta', category: 'Energy', img: 'https://images.unsplash.com/photo-1548333341-3893da82ccf1?w=600&q=80' },
    { title: 'Industrial Pipeline', category: 'Infrastructure', img: 'https://images.unsplash.com/photo-1538474705339-e85de812795c?w=600&q=80' },
    { title: 'Smart Grid Gamma', category: 'Technology', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80' },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Projects</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Completed Projects</h2>
                <p className="text-brand-gray max-w-2xl mx-auto mb-16 text-lg">
                    Explore our portfolio of successful energy transformations and infrastructure developments across the globe.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" />
                            <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                                <div className="text-center p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-brand-yellow font-bold text-sm uppercase tracking-wider">{project.category}</span>
                                    <h3 className="text-white text-3xl font-bold mt-2">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
