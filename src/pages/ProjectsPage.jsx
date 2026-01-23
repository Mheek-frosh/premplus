import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Solar Grid Integration",
            category: "Renewable Energy",
            desc: "Integrated a 50MW solar farm into the national grid infrastructure, providing clean energy to over 20,000 households.",
            details: "This flagship project involved the complete design, engineering, and deployment of a 50MW photovoltaic solar plant. Our team managed the intricate grid synchronization process, ensuring stability and efficiency. The project reduces carbon emissions by approximately 75,000 tons annually.",
            image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=1200&q=80",
                "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?w=1200&q=80",
                "https://images.unsplash.com/photo-1548613053-22002dd9c756?w=1200&q=80"
            ]
        },
        {
            id: 2,
            title: "Urban Power Upgrade",
            category: "Distribution",
            desc: "Modernized the power distribution network for a major metropolitan area to reduce outages and improve load balancing.",
            details: "We overhauled the aging electrical infrastructure of the downtown district. This included upgrading substations, installing smart sensors for real-time monitoring, and replacing over 50km of cabling. The result is a 99.9% reliability rate.",
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
                "https://images.unsplash.com/photo-1487875961445-47a00398c267?w=1200&q=80",
                "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=1200&q=80"
            ]
        },
        {
            id: 3,
            title: "Green Office Complex",
            category: "Sustainable Building",
            desc: "LEED Platinum certified commercial building design utilizing passive cooling and smart lighting systems.",
            details: "A landmark sustainable architecture project. We integrated geothermal cooling, rainwater harvesting, and a rooftop solar array. The building consumes 40% less energy than standard compliance requirements.",
            image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80"
            ]
        },
        {
            id: 4,
            title: "Offshore Wind Study",
            category: "Feasibility",
            desc: "Comprehensive environmental and technical feasibility study for a proposed 200MW offshore wind farm.",
            details: "Our technical advisory team conducted a year-long analysis of wind patterns, seabed conditions, and environmental impact. The study paved the way for a successful government tender process.",
            image: "https://images.unsplash.com/photo-1466611653911-954ff21caaf0?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1466611653911-954ff21caaf0?w=1200&q=80",
                "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200&q=80",
                "https://images.unsplash.com/photo-1508514177221-188b1cf2f24f?w=1200&q=80"
            ]
        },
        {
            id: 5,
            title: "Smart Meter Rollout",
            category: "Technology",
            desc: "Deployment of 100,000+ smart meters enabling accurate billing and energy usage analytics for consumers.",
            details: "This massive logistical project involved the installation of IoT-enabled electricity meters across three states. We developed the backend data management system to process millions of data points daily.",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
                "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=1200&q=80",
                "https://images.unsplash.com/photo-1563770095-25f6f3be450d?w=1200&q=80"
            ]
        },
        {
            id: 6,
            title: "Rural Electrification",
            category: "Infrastructure",
            desc: "Providing reliable solar-hybrid power minigrids to 15 remote communities previously off the grid.",
            details: "Focused on social impact, this project brought electricity to rural healthcare centers and schools. The hybrid systems use solar with battery storage and backup diesel generators for 24/7 reliability.",
            image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
            gallery: [
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
                "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=1200&q=80"
            ]
        }
    ];

    const openProject = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
    };

    const prevImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    };

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
                            key={project.id}
                            layoutId={`project-card-${project.id}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => openProject(project)}
                            className="bg-white group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-[40px] border border-gray-100"
                        >
                            {/* Card Image */}
                            <div className="h-72 overflow-hidden relative">
                                <motion.img
                                    layoutId={`project-image-${project.id}`}
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
                                <motion.h3 layoutId={`project-title-${project.id}`} className="text-2xl font-bold text-brand-dark mb-4">{project.title}</motion.h3>
                                <p className="text-brand-gray mb-8 line-clamp-2 leading-relaxed">
                                    {project.desc}
                                </p>

                                <span className="flex items-center gap-2 font-bold text-brand-green group-hover:text-brand-yellow transition-colors">
                                    View Project Gallery <ArrowRight size={20} />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Modal Overlay */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
                            />

                            <motion.div
                                layoutId={`project-card-${selectedProject.id}`}
                                className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/20 backdrop-blur hover:bg-white rounded-full flex items-center justify-center text-white hover:text-brand-dark transition-all"
                                >
                                    <X size={24} />
                                </button>

                                {/* Image Slider Section (Left/Top) */}
                                <div className="w-full lg:w-2/3 h-[400px] lg:h-auto relative bg-black">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={selectedProject.gallery[currentImageIndex]}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="w-full h-full object-cover"
                                            alt="Project"
                                        />
                                    </AnimatePresence>

                                    {/* Slider Controls */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">
                                        <div className="flex gap-2">
                                            {selectedProject.gallery.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-brand-yellow' : 'w-4 bg-white/50'}`}
                                                />
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            <button onClick={prevImage} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button onClick={nextImage} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                                                <ChevronRight size={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section (Right/Bottom) */}
                                <div className="w-full lg:w-1/3 p-8 md:p-12 overflow-y-auto bg-white">
                                    <div className="mb-2">
                                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">{selectedProject.category}</span>
                                    </div>
                                    <motion.h2 layoutId={`project-title-${selectedProject.id}`} className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                                        {selectedProject.title}
                                    </motion.h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-2">Project Overview</h4>
                                            <p className="text-brand-gray leading-relaxed text-lg">
                                                {selectedProject.desc}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-brand-dark mb-2">Technical Details</h4>
                                            <p className="text-brand-gray leading-relaxed">
                                                {selectedProject.details}
                                            </p>
                                        </div>

                                        <div className="pt-8 border-t border-gray-100">
                                            <div className="flex items-center gap-2 text-brand-green font-bold">
                                                <CheckCircle size={20} />
                                                <span>Project Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};

export default ProjectsPage;
