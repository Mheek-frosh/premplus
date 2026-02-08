import React from 'react';
import { motion } from 'framer-motion';
import manladderImg from '../assets/manladder.png';
import oneTwentyImg from '../assets/120.png';
import solarImg from '../assets/solar.png';

const projects = [
    { title: 'Commercial Solar Power Solution', category: 'Renewables', img: solarImg },
    { title: '120 kWp Hybrid Solar Mini Grid Installation', category: 'Energy', img: oneTwentyImg },
    { title: 'High Power Cable Installation by our Electrical Engineers', category: 'Infrastructure', img: manladderImg },
    { title: 'Smart Grid Gamma', category: 'Technology', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80' },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-app-main transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Projects</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-app-main">Completed Projects</h2>
                <p className="text-app-muted max-w-2xl mx-auto mb-16 text-lg">
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
                            className="group relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden cursor-pointer"
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
