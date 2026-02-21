import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Linkedin, Mail, User } from 'lucide-react';
import ceo from '../assets/ceo.png';
import ed from '../assets/ed.png';
import fadil from '../assets/fadil.png';
import sule from '../assets/sule.png';

const teamMembers = [
    {
        id: 1,
        name: 'Engr. Zaharadeen Usman',
        position: 'MD/CEO',
        category: 'Executive',
        bio: 'Engr. Zaharadeen Usman, a distinguished leader with a multifaceted background, brings a wealth of experience to the intersection of public service, engineering, renewable energy, sustainable designs, and information technology. With a robust history in public service, he has honed his skills in navigating complex regulatory landscapes and fostering collaboration between public and private sectors. Holding a degree in Metallurgical and Materials Engineering from the prestigious Ahmadu Bello University Zaria, Engr. Usman has amassed nearly 14 years of experience in the engineering domain and public service, earning recognition as a COREN certified Engineer.',
        img: ceo,
        quote: 'Leading with vision and integrity to power the future.'
    },
    {
        id: 2,
        name: 'Engr. Suleiman Modu Maina',
        position: 'Chief Operating Officer',
        category: 'Executive',
        bio: 'Engr. Suleiman Modu Maina leads the operational excellence of Premplus, ensuring seamless execution of our projects and strategic initiatives across the organization.',
        img: null,
        quote: 'Excellence in operations drives sustainable impact.'
    },
    {
        id: 3,
        name: 'Ahmed Ishaku Adamu',
        position: 'Chief Finance Officer',
        category: 'Executive',
        bio: 'Ahmed Ishaku Adamu oversees the financial strategy and stewardship of Premplus, ensuring robust fiscal management and sustainable growth.',
        img: null,
        quote: 'Financial discipline enables lasting value creation.'
    },
    {
        id: 4,
        name: 'Engr. Usman Dauda',
        position: 'Head of Operations and Maintenance',
        category: 'Executive',
        bio: 'Engr. Usman Dauda plays a pivotal role in steering the strategic direction of Premplus. With deep expertise in engineering management and operations, he ensures our projects meet the highest standards of quality and efficiency.',
        img: ed,
        quote: 'Excellence is not an act, but a habit.'
    },
    {
        id: 5,
        name: 'Muhammad Fadil Yakubu',
        position: 'Business Development Manager',
        category: 'Technical',
        bio: 'Muhammad Fadil Yakubu drives business growth and strategic partnerships, expanding Premplus\'s reach and impact in the sustainable energy sector.',
        img: fadil,
        quote: 'Technology is the bridge to our future.'
    },
    {
        id: 6,
        name: 'Zubaida Ibrahim',
        position: 'Head of Admin',
        category: 'Management',
        bio: 'Zubaida Ibrahim leads administrative operations, ensuring smooth coordination and support across the organization.',
        img: null,
        quote: 'Efficiency in administration enables excellence in execution.'
    },
    {
        id: 7,
        name: 'Suleiman M. Jaji, Esq.',
        position: 'Legal Advisor',
        category: 'Legal',
        bio: 'Suleiman M. Jaji serves as our trusted Legal Advisor, providing expert counsel on corporate governance, regulatory compliance, and strategic partnerships, safeguarding the integrity of our operations.',
        img: sule,
        quote: 'Justice and integrity form the bedrock of our success.'
    },
    {
        id: 8,
        name: 'Fawziyyah Usman',
        position: 'Head, Community and Stakeholder Engagement',
        category: 'Management',
        bio: 'Fawziyyah Usman leads community and stakeholder engagement initiatives, building strong relationships and ensuring inclusive participation in our projects.',
        img: null,
        quote: 'Community engagement is the foundation of sustainable development.'
    },
    {
        id: 9,
        name: 'Ruwaida Kabir',
        position: 'Head, Project Management',
        category: 'Management',
        bio: 'Ruwaida Kabir oversees project delivery, ensuring timely execution and high-quality outcomes across all Premplus initiatives.',
        img: null,
        quote: 'Effective project management turns vision into reality.'
    }
];

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Executive', 'Management', 'Legal', 'Technical'];
    const filteredMembers = filter === 'All' || filter === 'Management' ? teamMembers : teamMembers.filter(m => m.category === filter);

    return (
        <div className="pt-24 bg-app-main min-h-screen transition-colors duration-300">
            {/* Team Hero */}
            <section className="py-12 sm:py-16 md:py-20 bg-brand-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 skew-x-12 transform origin-right" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
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
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 md:mb-8"
                    >
                        Meet Our <span className="text-brand-yellow">Leadership</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg"
                    >
                        A diverse group of visionaries, engineers, and strategists dedicated to redefining the global energy landscape.
                    </motion.p>
                </div>
            </section>

            {/* Filter */}
            <section className="py-6 sm:py-8 md:py-12 border-b border-app sticky top-16 sm:top-20 bg-app-card/80 backdrop-blur-md z-40 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3 sm:gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all ${filter === cat ? 'bg-app-main text-app-main shadow-xl border-2 border-brand-yellow' : 'bg-app-secondary text-app-muted hover:bg-app-main hover:text-app-main'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
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
                                <div className="h-64 sm:h-72 md:h-80 overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                                    {member.img ? (
                                        <>
                                            <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors" />
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 group-hover:from-gray-300 group-hover:to-gray-400 dark:group-hover:from-gray-600 dark:group-hover:to-gray-700 transition-colors duration-500">
                                            <User className="w-24 h-24 text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-500" strokeWidth={1.5} />
                                        </div>
                                    )}
                                </div>
                                <div className="p-6 sm:p-8 md:p-10 relative">
                                    <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">{member.category}</span>
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-app-main mb-1 transition-colors duration-300 line-clamp-2">{member.name}</h3>
                                    <p className="text-brand-yellow font-bold text-xs sm:text-sm uppercase mb-4 md:mb-6 line-clamp-2">{member.position}</p>

                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-dark shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <ChevronRight size={24} />
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
                        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto backdrop-blur-3xl bg-app-overlay"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-7xl max-h-[95vh] my-auto bg-app-card rounded-3xl sm:rounded-[40px] lg:rounded-[60px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-brand-yellow hover:text-brand-dark transition-colors shadow-lg"
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </button>

                            <div className="w-full md:w-2/5 h-[280px] sm:h-[320px] md:h-auto md:min-h-[350px] overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                {selectedMember.img ? (
                                    <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                                        <User className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
                                    </div>
                                )}
                            </div>

                            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center items-center text-center overflow-y-auto">
                                <span className="text-brand-green font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Leadership Bio</span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-app-main transition-colors duration-300">{selectedMember.name}</h2>
                                <p className="text-brand-yellow font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">{selectedMember.position}</p>
                                <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-brand-yellow mb-6 sm:mb-8 md:mb-10 rounded-full" />
                                <p className="text-app-muted text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium mb-6 sm:mb-8 md:mb-12 italic transition-colors duration-300">
                                    "{selectedMember.bio}"
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                    <button className="flex items-center justify-center gap-2 sm:gap-3 bg-app-main text-app-main border border-app px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-brand-yellow hover:text-brand-dark transition-all">
                                        <Linkedin size={18} className="sm:w-5 sm:h-5" /> LinkedIn Profile
                                    </button>
                                    <button className="flex items-center justify-center gap-2 sm:gap-3 border-2 border-app text-app-main px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-app-main hover:text-app-main transition-all">
                                        <Mail size={18} className="sm:w-5 sm:h-5" /> Contact
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
