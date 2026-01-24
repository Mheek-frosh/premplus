import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Linkedin, Mail } from 'lucide-react';
import ceo from '../assets/ceo.png';
import ed from '../assets/ed.png';
import fadil from '../assets/fadil.png';
import sule from '../assets/sule.png';
import jemi from '../assets/jemi.png';

const teamMembers = [
    {
        id: 1,
        name: 'Engr. Zaharadeen Usman',
        position: 'Chief Executive Officer',
        category: 'Executive',
        bio: 'Engr. Zaharadeen Usman, a distinguished leader with a multifaceted background, brings a wealth of experience to the intersection of public service, engineering, renewable energy, sustainable designs, and information technology. With a robust history in public service, he has honed his skills in navigating complex regulatory landscapes and fostering collaboration between public and private sectors. Holding a degree in Metallurgical and Materials Engineering from the prestigious Ahmadu Bello University Zaria, Engr. Usman has amassed nearly 14 years of experience in the engineering domain and public service, earning recognition as a COREN certified Engineer. His journey in the field began with a strong foundation in Metallurgical and Materials Engineering, where he honed his skills in understanding the intricacies of materials science and engineering principles.',
        img: ceo,
        quote: 'Leading with vision and integrity to power the future.'
    },
    {
        id: 2,
        name: 'Engr. Usman Dauda',
        position: 'Executive Director',
        category: 'Executive',
        bio: 'Engr. Usman Dauda plays a pivotal role in steering the strategic direction of Premplus. With deep expertise in engineering management and operations, he ensures our projects meet the highest standards of quality and efficiency.',
        img: ed,
        quote: 'Excellence is not an act, but a habit.'
    },
    {
        id: 3,
        name: 'Muhammad Fadil Yakubu',
        position: 'Head of Tech & Media',
        category: 'Technical',
        bio: 'Leading our technology and media initiatives, Muhammad Fadil Yakubu coordinates our digital presence and technological integrations, ensuring Premplus stays at the forefront of the digital revolution.',
        img: fadil,
        quote: 'Technology is the bridge to our future.'
    },
    {
        id: 4,
        name: 'Suleiman M. Jaji, Esq.',
        position: 'Legal Advisor',
        category: 'Management',
        bio: 'Suleiman M. Jaji serves as our trusted Legal Advisor, providing expert counsel on corporate governance, regulatory compliance, and strategic partnerships, safeguarding the integrity of our operations.',
        img: sule,
        quote: 'Justice and integrity form the bedrock of our success.'
    },
    {
        id: 5,
        name: 'Jemimah Jatau-Kyari',
        position: 'Director of Strategy',
        category: 'Management',
        bio: 'Jemimah Jatau-Kyari drives our strategic planning and business development. Her insights and leadership are instrumental in expanding our reach and impact in the sustainable energy sector.',
        img: jemi,
        quote: 'Strategic foundations build lasting legacies.'
    }
];

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Executive', 'Management', 'Technical', 'Consulting'];
    const filteredMembers = filter === 'All' ? teamMembers : teamMembers.filter(m => m.category === filter);

    return (
        <div className="pt-24 bg-app-main min-h-screen transition-colors duration-300">
            {/* Team Hero */}
            <section className="py-20 bg-brand-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 transform origin-right" />
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-brand-yellow font-bold uppercase tracking-widest text-sm"
                    >
                        Our People
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8"
                    >
                        Meet Our <span className="text-brand-yellow">Leadership</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-lg"
                    >
                        A diverse group of visionaries, engineers, and strategists dedicated to redefining the global energy landscape.
                    </motion.p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-12 border-b border-app sticky top-20 bg-app-card/80 backdrop-blur-md z-40 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === cat ? 'bg-app-main text-app-main shadow-xl border-2 border-brand-yellow' : 'bg-app-secondary text-app-muted hover:bg-app-main hover:text-app-main'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                whileHover={{ y: -10 }}
                                className="relative bg-app-card rounded-[40px] overflow-hidden border border-app shadow-xl group transition-colors duration-300"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-10 relative">
                                    <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">{member.category}</span>
                                    <h3 className="text-2xl font-bold text-app-main mb-1 transition-colors duration-300">{member.name}</h3>
                                    <p className="text-brand-yellow font-bold text-sm uppercase mb-6">{member.position}</p>

                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-dark shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <ChevronRight size={28} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Biography Overlay */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-app-overlay"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="relative w-full max-w-7xl bg-app-card rounded-[60px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-8 left-8 z-30 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark transition-colors shadow-lg"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-2/5 h-[400px] md:h-auto overflow-hidden">
                                <img src={selectedMember.img} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center items-center text-center">
                                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4">Leadership Bio</span>
                                <h2 className="text-5xl font-bold mb-2 text-app-main transition-colors duration-300">{selectedMember.name}</h2>
                                <p className="text-brand-yellow font-bold text-2xl mb-8">{selectedMember.position}</p>
                                <div className="w-24 h-1.5 bg-brand-yellow mb-10 rounded-full" />
                                <p className="text-app-muted text-xl leading-relaxed font-medium mb-12 italic transition-colors duration-300">
                                    "{selectedMember.bio}"
                                </p>
                                <div className="flex gap-6">
                                    <button className="flex items-center gap-3 bg-app-main text-app-main border border-app px-8 py-4 rounded-2xl font-bold hover:bg-brand-yellow hover:text-brand-dark transition-all">
                                        <Linkedin size={20} /> LinkedIn Profile
                                    </button>
                                    <button className="flex items-center gap-3 border-2 border-app text-app-main px-8 py-4 rounded-2xl font-bold hover:bg-app-main hover:text-app-main transition-all">
                                        <Mail size={20} /> Contact
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamPage;
