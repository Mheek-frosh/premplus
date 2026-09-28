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
import court1Img from '../assets/ABIA-COURT-1.jpeg';
import court2Img from '../assets/ABIA-COURT-2.jpeg';
import court3Img from '../assets/ABIA-COURT-3.jpeg';
import court4Img from '../assets/ABIA-COURT-4.jpeg';

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
        title: "Basic Solar PV & O&M Training for Abia State Ministry of Power",
        category: "Capacity Development",
        desc: "Premplus delivered a one-week Basic Solar PV Training Programme for technical and relevant staff of the Ministry of Power and Public Utilities, Abia State.",
        details: "The training covered the fundamental principles of solar PV technology, system components and configurations, electrical safety, basic system operation, fault identification and routine maintenance practices.\n\nA key component of the programme was practical orientation on the operation and maintenance (O&M) requirements of the 120kWp hybrid solar power system installed at the Broadcasting Corporation of Abia (BCA). Participants were introduced to essential practices for routine inspection, system monitoring, battery and inverter management, preventive maintenance and identification of common operational issues.\n\nThe programme was structured to strengthen the State's institutional capacity to understand, supervise and sustain renewable-energy infrastructure, supporting better long-term performance and asset management.\n\nClassification – human capital development → CAPACITY DEVELOPMENT",
        client: "Abia State Government (Ministry of Power and Public Utilities)",
        status: "Completed",
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
    },
    {
        id: 7,
        title: "Hybrid Solar Power for 17 Court Halls Across Abia State",
        category: "Renewable energy solutions",
        desc: "Premplus delivered 17 hybrid solar power systems for newly constructed Court Halls across all 17 Local Government Areas of Abia State.",
        details: "Each facility is equipped with a 22kWp solar PV system integrated with a 30kWh Battery Energy Storage System (BESS). The systems are designed to provide reliable renewable electricity for essential court operations, with battery storage supporting continuity of supply beyond periods of solar generation.\n\nCollectively, the programme represents 374kWp of installed solar PV capacity and 510kWh of battery storage across the State.\n\nNumber of Sites: 17 Court Halls\nSolar Capacity/Site: 22kWp\nBattery Storage/Site: 30kWh\nAggregate Solar Capacity: 374kWp\nAggregate Battery Storage: 510kWh\nSystem Type: Hybrid Solar + BESS",
        client: "Abia State Government (Ministry of Justice)",
        status: "Completed",
        image: court1Img,
        gallery: [
            court1Img,
            court2Img,
            court3Img,
            court4Img
        ]
    },
    {
        id: 5,
        title: "EU-Funded Solar for Health — Project Management Consultancy",
        category: "Consultancy",
        desc: "Premplus is providing Project Management Consultancy (PMC) to support the Abia State Government in implementing the EU-funded Solar for Health Project (NIHSP).",
        details: "The PMC scope includes technical coordination, implementation oversight, stakeholder coordination, quality assurance, progress monitoring and support for effective delivery of the programme in accordance with project requirements.",
        client: "Abia State Government (Ministry of Power and Public Utilities)",
        status: "In Progress",
        image: null,
        gallery: []
    },
    {
        id: 6,
        title: "Public-Sector Solar Sustainability & Asset Management Framework",
        category: "Energy Sector Advisory",
        desc: "Premplus provides renewable-energy advisory and project management services to the Abia State Ministry of Power and Public Utilities, supporting the State Government in improving the long-term performance and sustainability of its renewable-energy investments.",
        details: "Premplus is developing a State-wide sustainability framework for public-sector solar installations across Abia State. The framework will establish a structured approach to the lifecycle management of solar assets, with the aim to addressing:\n\n• Operations and Maintenance (O&M) requirements\n• Preventive and corrective maintenance\n• Asset ownership and institutional responsibilities\n• System performance monitoring\n• Technical inspections and reporting\n• Asset management and lifecycle planning\n• Capacity requirements for technical personnel\n• Sustainability and long-term operational performance\n\nThe framework is designed to help the State transition from a project-by-project approach to a coordinated lifecycle asset-management model, protecting the value and performance of its renewable-energy infrastructure.",
        client: "Abia State Government (Ministry of Power and Public Utilities)",
        status: "In Progress",
        image: null,
        gallery: []
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
