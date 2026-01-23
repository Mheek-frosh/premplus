import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: 'Engr. Usman Mohammed',
        position: 'Chief Executive Officer',
        category: 'Executive',
        bio: 'With over 20 years of experience in the energy sector, Engr. Usman has led Premplus to become a pioneer in sustainable utility solutions across Africa. His vision is to bridge the gap between traditional energy and future renewable tech.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        quote: 'Leading with vision and integrity to power the future.'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        position: 'Chief Technology Officer',
        category: 'Executive',
        bio: 'Sarah is a specialist in smart grid technology and IoT integration. She oversees our R&D department, focusing on enhancing energy distribution efficiency through AI and modern hardware engineering.',
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80',
        quote: 'Innovation is the catalyst for global energy transformation.'
    },
    {
        id: 3,
        name: 'Marcus Thorne',
        position: 'Chief Operating Officer',
        category: 'Executive',
        bio: 'Marcus manages global operations and strategic partnerships. He ensures that every project, from terrestrial wind farms to offshore rigs, is delivered with the highest standards of safety.',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
        quote: 'Operational excellence is the foundation of our reliability.'
    },
    {
        id: 4,
        name: 'Dr. Elena Rossi',
        position: 'Director of Renewables',
        category: 'Management',
        bio: 'Dr. Rossi is dedicated to scaling solar and wind projects internationally. She holds a PhD in Renewable Energy Engineering and has published numerous papers on zero-carbon transitions.',
        img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
        quote: 'Sustainability is not an option; it is our responsibility.'
    },
    {
        id: 5,
        name: 'David Okafor',
        position: 'Lead Infrastructure Engineer',
        category: 'Technical',
        bio: 'David oversees the physical deployment of our energy assets. His expertise in petroleum infrastructure and offshore safety is unmatched in the region.',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
        quote: 'Building resilient infrastructure for a changing world.'
    },
    {
        id: 6,
        name: 'Aisha Bello',
        position: 'Strategic Consultant',
        category: 'Consulting',
        bio: 'Aisha provides strategic advisory for complex energy infrastructure projects, ensuring long-term sustainability and profitability for our industrial clients.',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
        quote: 'Strategic insight drives sustainable growth.'
    }
];

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Executive', 'Management', 'Technical', 'Consulting'];
    const filteredMembers = filter === 'All' ? teamMembers : teamMembers.filter(m => m.category === filter);

    return (
        <div className="pt-24 bg-white min-h-screen">
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
            <section className="py-12 border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">
                <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${filter === cat ? 'bg-brand-dark text-white shadow-xl' : 'bg-gray-50 text-brand-gray hover:bg-gray-100'}`}
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
                                className="relative bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-xl group"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="p-10 relative">
                                    <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">{member.category}</span>
                                    <h3 className="text-2xl font-bold text-brand-dark mb-1">{member.name}</h3>
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-3xl bg-brand-dark/90"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="relative w-full max-w-5xl bg-white rounded-[60px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-8 right-8 z-30 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-yellow transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-2/5 h-[400px] md:h-auto overflow-hidden">
                                <img src={selectedMember.img} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-3/5 p-12 md:p-20 flex flex-col justify-center">
                                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4">Leadership Bio</span>
                                <h2 className="text-5xl font-bold mb-2 text-brand-dark">{selectedMember.name}</h2>
                                <p className="text-brand-yellow font-bold text-2xl mb-8">{selectedMember.position}</p>
                                <div className="w-24 h-1.5 bg-brand-yellow mb-10 rounded-full" />
                                <p className="text-brand-gray text-xl leading-relaxed font-medium mb-12 italic">
                                    "{selectedMember.bio}"
                                </p>
                                <div className="flex gap-6">
                                    <button className="flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-yellow hover:text-brand-dark transition-all">
                                        <Linkedin size={20} /> LinkedIn Profile
                                    </button>
                                    <button className="flex items-center gap-3 border-2 border-brand-dark text-brand-dark px-8 py-4 rounded-2xl font-bold hover:bg-brand-dark hover:text-white transition-all">
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
