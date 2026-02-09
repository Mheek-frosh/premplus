import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cap1Img from '../assets/cap1.jpeg';
import solarImg from '../assets/solar.png';
import img120 from '../assets/120.png';
import adamImg from '../assets/adam.jpeg';
import gworkImg from '../assets/gwork.jpeg';
import cap2Img from '../assets/cap2.jpeg';
import cap3Img from '../assets/cap3.jpeg';

const projects = [
    {
        id: 1,
        title: "120KWp Hybrid Solar Mini Grid Installation in Abia State",
        category: "Rural Electrification",
        desc: "Installation of a 120KWp Hybrid Solar Mini Grid to provide reliable power.",
        details: "This project showcases our expertise in renewable energy solutions with the successful installation of a 120KWp Hybrid Solar Mini Grid in Abia State. The system is designed to provide clean, reliable, and sustainable energy to the community, significantly reducing reliance on fossil fuel generators and promoting environmental sustainability.",
        image: solarImg,
        gallery: [
            solarImg,
            img120,
            gworkImg
        ]
    },
    {
        id: 2,
        title: "Adamawa State Electricity Policy",
        category: "Policy & Regulation",
        desc: "Adamawa state electricity policy document was passed into bill, enabling solar and green energy implementation.",
        details: "The Adamawa State Electricity Policy document has been successfully passed into a bill. This landmark legislation paves the way for the implementation of solar and green energy projects across the state. It marks a significant step towards sustainable development, providing a framework for investment in renewable energy infrastructure and ensuring a cleaner, more reliable power supply for the region.",
        image: adamImg,
        gallery: [
            adamImg
        ]
    },
    {
        id: 3,
        title: "Capacity Development in Abia State",
        category: "Human Capital Development",
        desc: "Delivering impactful orientation and training programs to empower the workforce in Abia State.",
        details: "Premplus successfully conducted a comprehensive capacity development program in Abia State. This initiative featured intensive orientation sessions and specialized training workshops designed to equip participants with essential skills and industry knowledge. Our goal is to foster a skilled workforce capable of driving sustainable growth and innovation within the region.",
        image: cap1Img,
        gallery: [
            cap1Img,
            cap2Img,
            cap3Img
        ]
    }
];

const Projects = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate('/projects', { state: { selectedProjectId: projectId } });
    };

    return (
        <section id="projects" className="py-24 bg-app-main transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Projects</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-app-main">Completed Projects</h2>
                    <p className="text-app-muted max-w-2xl mx-auto text-lg">
                        Explore our portfolio of successful energy transformations and infrastructure developments across the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => handleProjectClick(project.id)}
                            className="bg-app-card group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[40px] border border-app"
                        >
                            {/* Card Image */}
                            <div className="h-72 overflow-hidden relative">
                                <motion.img
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
                                <h3 className="text-2xl font-bold text-app-main mb-4">{project.title}</h3>
                                <p className="text-app-muted mb-8 line-clamp-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                <span className="flex items-center gap-2 font-bold text-brand-green group-hover:text-brand-yellow transition-colors">
                                    View Project Gallery <ArrowRight size={20} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
