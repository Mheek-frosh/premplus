import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, GraduationCap, Building2, Check } from 'lucide-react';
import lookbackImg from '../assets/lookback.png';
import roundtableImg from '../assets/roundtable.png';
import innovationImg from '../assets/innovation.png';

const servicesData = [
    {
        id: 'renewable',
        title: "Renewable Energy Solutions",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?w=800&q=80",
        intro: "We develop and deploy renewable and distributed energy systems tailored to commercial, industrial, public-sector, private and community applications. Our portfolio includes:",
        bullets: [
            "Solar mini-grids and hybrid power systems",
            "Off-grid solar solutions",
            "Grid-connected and embedded solar solutions",
            "Productive Use of Energy (PUE) systems that unlock economic value",
            "Innovative clean energy and energy efficiency solutions"
        ],
        closing: "We focus on projects that deliver strong performance, long-term reliability, and measurable returns."
    },
    {
        id: 'advisory',
        title: "Electricity Market and Energy Sector Advisory",
        icon: ShieldCheck,
        image: roundtableImg,
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
    },
    {
        id: 'capacity',
        title: "Capacity Development and Energy Innovation",
        icon: GraduationCap,
        image: innovationImg,
        intro: "Recognising that sustainable markets depend on strong institutions and skilled professionals, Premplus delivers targeted capacity development solutions, including:",
        bullets: [
            "Technical and professional training programmes",
            "Executive-level energy market and power sector courses",
            "Institutional strengthening and operational support"
        ],
        closing: "We also support the development of Energy Innovation and Skills Hubs, providing platforms for applied training, technology deployment, and sector collaboration."
    },
    {
        id: 'sustainable',
        title: "Sustainable Building and Infrastructure Design",
        icon: Building2,
        image: lookbackImg,
        intro: "Premplus integrates renewable energy, energy efficiency, and climate-responsive design into buildings and infrastructure. Our services include:",
        bullets: [
            "Sustainable and energy-efficient building designs",
            "Integration of renewable energy systems into infrastructure projects",
            "Climate-responsive and resource-efficient design solutions"
        ],
        closing: "These approaches reduce lifecycle costs, improve asset performance, and support sustainability objectives."
    }
];

const ServiceSection = ({ service, index }) => {
    const isTextLeft = index % 2 === 0; // 0, 2: text left, image right | 1, 3: image left, text right

    return (
        <section
            id={service.id}
            className={`py-12 lg:py-16 flex items-center ${index % 2 === 0 ? 'bg-app-secondary' : 'bg-app-main'} transition-colors duration-300`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isTextLeft ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Text Content */}
                    <div className={isTextLeft ? 'lg:order-1' : 'lg:col-start-2'}>
                        <motion.div
                            initial={{ opacity: 0, x: isTextLeft ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-brand-green/15 flex items-center justify-center text-brand-green">
                                    <service.icon size={28} />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-app-main">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-app-muted text-lg leading-relaxed mb-6">
                                {service.intro}
                            </p>
                            <ul className="space-y-3 mb-6">
                                {service.bullets.map((bullet, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/15 flex items-center justify-center mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-brand-green" strokeWidth={3} />
                                        </span>
                                        <span className="text-app-main font-medium leading-relaxed">{bullet}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <p className="text-app-muted text-lg leading-relaxed border-l-4 border-brand-green pl-6 py-2 bg-brand-green/5 rounded-r-lg">
                                {service.closing}
                            </p>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <div className={isTextLeft ? 'lg:order-2' : 'lg:col-start-1 lg:row-start-1'}>
                        <motion.div
                            initial={{ opacity: 0, x: isTextLeft ? 40 : -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesPage = () => {
    return (
        <div className="bg-app-secondary min-h-screen transition-colors duration-300">
            {/* Page Header */}
            <div className="pt-28 pb-4 bg-app-secondary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-2">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-app-main mb-4">
                        Professional Energy <br className="hidden md:block" /> Solutions We Provide
                    </h1>
                    <p className="text-app-muted max-w-2xl mx-auto text-lg leading-relaxed">
                        Competently repurpose go forward benefits without goal-oriented conveniently target opportunities whereas parallel services.
                    </p>
                </div>
            </div>

            {/* Service Sections */}
            {servicesData.map((service, index) => (
                <ServiceSection key={service.id} service={service} index={index} />
            ))}
        </div>
    );
};

export default ServicesPage;
