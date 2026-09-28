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
        title: "120kWp Hybrid Solar Project – Broadcasting Corporation of Abia (BCA)",
        category: "Renewable energy solutions",
        desc: "Premplus delivered a 120kW peak hybrid solar power system for the Broadcasting Corporation of Abia (BCA), Umuahia.",
        details: "The system integrates solar photovoltaic generation with high-capacity battery storage and hybrid power management to provide reliable electricity for BCA's critical broadcasting and operational loads. The battery system enables energy storage and dispatch during periods of low solar availability, improving power continuity and reducing dependence on conventional generation.\n\nSystem Capacity: 120kWp Solar PV\nEnergy Storage: 215kWh BESS\nSystem Type: Hybrid Solar + Battery Energy Storage",
        client: "Abia State Government (Ministry of Power and Public Utilities)",
        image: solarImg,
        gallery: [
            solarImg,
            img120,
            gworkImg
        ]
    },
    {
        id: 2,
        title: "Adamawa State Electricity Policy & Electricity Law 2025",
        category: "Policy & Regulation",
        desc: "Premplus provided specialist electricity-sector consultancy to the Adamawa State Government, leading the development of the State Electricity Policy and drafting the Adamawa State Electricity Bill 2025. The assignment established a legal and institutional framework for developing a competitive and sustainable state electricity market.",
        details: "The assignment involved analysing the State's electricity-sector requirements and developing a framework covering electricity market development, regulatory governance, private-sector participation, renewable energy, electricity access, consumer protection and sustainable power supply. The draft legislation translates the policy objectives into a proposed legal and institutional framework for the development and regulation of electricity activities within Adamawa State, supporting the State's transition towards a more decentralised and investment-oriented electricity market.",
        client: "Adamawa State Government",
        image: adamImg,
        gallery: [
            adamImg
        ]
    },
    {
        id: 3,
        title: "Solar PV Technical Training Program",
        category: "Human Capital Development",
        desc: "Premplus successfully delivered a Basic Solar PV System Operation and Maintenance training program for staff of the Ministry of Power and Public Utilities and the Broadcasting Corporation of Abia State.",
        details: "The training was designed to strengthen technical capacity and improve the sustainability of solar power infrastructure across public institutions in the state. The Basic Solar PV System Operation and Maintenance training focused on equipping participants with practical knowledge and hands-on skills required to operate, troubleshoot, and maintain solar photovoltaic systems effectively. Through interactive sessions and practical demonstrations, Premplus ensured participants gained the technical competence to support reliable solar installations, reduce system downtime, and enhance long-term energy efficiency.",
        image: cap1Img,
        gallery: [
            cap1Img,
            cap2Img,
            cap3Img
        ]
    },
    {
        id: 4,
        title: "Independent Technical & Financial Evaluation of REA Mini-Grids – Northern Nigeria",
        category: "Rural Electrification",
        desc: "Premplus undertook an independent technical evaluation and financial valuation of REA-funded renewable energy mini-grid assets across Northern Nigeria, assessing their physical condition, technical performance, operational status and financial value.",
        details: "The technical due diligence covered the assessment of installed generation and distribution assets, system condition, operational status, performance and infrastructure requirements. This was complemented by financial and asset valuation to establish the underlying value and investment characteristics of the portfolio. The resulting technical and financial intelligence provided an important basis for transitioning from project-level deployment to professional lifecycle management and optimisation of publicly funded renewable-energy assets, contributing to the broader framework that led to the establishment of Renewable Asset Management Company (RAMCO).",
        client: "Rural Electrification Agency (REA)",
        status: "In Progress",
        image: adamImg,
        gallery: [
            adamImg
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
