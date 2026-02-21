import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, ArrowUpRight, Play, X, ChevronRight, Leaf, Lightbulb, Shield, Users, Award, UserPlus, Heart } from 'lucide-react';
import officeImg from '../assets/office.png';
import aboutusImg from '../assets/aboutus.png';
import n1Img from '../assets/n1.jpeg';
import n2Img from '../assets/n2.jpeg';
import n3Img from '../assets/n3.jpeg';
import missionImg from '../assets/mission.png';
import visionImg from '../assets/vision.png';


const teamMembers = [
    {
        id: 1,
        name: 'Engr. Usman Mohammed',
        position: 'CEO',
        bio: 'With over 20 years of experience in the energy sector, Engr. Usman has led Premplus to become a pioneer in sustainable utility solutions across Africa. His vision is to bridge the gap between traditional energy and future renewable tech.',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
        quote: 'Example name and see my example but then come and scenery people.'
    },
    {
        id: 2,
        name: 'Engr. Usman Mohammed',
        position: 'CTO',
        bio: 'A specialist in smart grid technology and IoT integration, focusing on enhancing the efficiency of energy distribution networks through modern software and hardware engineering.',
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
        quote: 'Example name and see my example but then come and scenery people.'
    },
    {
        id: 3,
        name: 'Engr. Usman Mohammed',
        position: 'COO',
        bio: 'Managing global operations and strategic partnerships, ensuring that every project is delivered with the highest standards of safety and operational excellence.',
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80',
        quote: 'Example name and see my example but then come and scenery people.'
    },
    {
        id: 4,
        name: 'Engr. Usman Mohammed',
        position: 'Director of Renewables',
        bio: 'Dedicated to scaling solar and wind projects internationally, driving the transition to zero-carbon energy for industrial clients.',
        img: 'https://images.unsplash.com/photo-1519085184561-9548333341-3893da82ccf1?w=800&q=80',
        quote: 'Example name and see my example but then come and scenery people.'
    },
    {
        id: 5,
        name: 'Engr. Usman Mohammed',
        position: 'Lead Consultant',
        bio: 'Providing strategic advisory for complex energy infrastructure projects, ensuring long-term sustainability and profitability.',
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
        quote: 'Example name and see my example but then come and scenery people.'
    }
];

const AboutPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    return (
        <div className="pt-0 bg-app-main min-h-screen transition-colors duration-300">
            {/* About Hero - Matching Home Hero Behavior */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${aboutusImg}")`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50 z-10" />

                <div className="relative z-20 text-center px-4 max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/90 max-w-2xl mx-auto text-xl leading-relaxed font-light"
                    >
                        Sustainable energy solutions for a cleaner future. Join us in our mission to create a zero-carbon world with cutting-edge renewable technology.
                    </motion.p>
                </div>
            </section>

            {/* Grid Images Section */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="h-80 rounded-3xl overflow-hidden shadow-xl">
                        <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80" alt="Solar Energy Engineer" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="h-80 md:translate-y-12 rounded-3xl overflow-hidden shadow-xl">
                        <img src={n1Img} alt="Green Energy Summit" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="h-80 rounded-3xl overflow-hidden shadow-xl">
                        <img src={n2Img} alt="Tech Professional" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="h-80 md:translate-y-12 rounded-3xl overflow-hidden shadow-xl">
                        <img src={n3Img} alt="Renewable Energy Collaboration" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-app-secondary p-12 rounded-[50px] border border-app shadow-sm mb-24 transition-colors duration-300"
                >
                    <p className="text-app-muted text-xl leading-relaxed text-center font-medium italic">
                        "We believe that the future of energy lies in sustainability. At Premplus, we are dedicated to building a world where progress and environmental stewardship go hand in hand."
                    </p>
                </motion.div>

                {/* About Premplus Intro */}
                <div className="mb-32">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-green font-bold text-sm uppercase tracking-widest block mb-4"
                        >
                            Our Identity
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold mb-8 text-app-main leading-tight"
                        >
                            About <span className="text-brand-green">Premplus</span>
                        </motion.h2>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-app-muted text-xl leading-relaxed">
                                Premplus is an integrated energy and sustainability solutions company delivering advisory, development, and implementation services across Nigeria and selected African markets. We partner with governments, corporates, investors, and development institutions to design, finance, and deliver energy and infrastructure solutions that are commercially viable, technically sound, and sustainable.
                            </p>
                            <p className="text-app-muted text-xl leading-relaxed">
                                Our core strength lies in bridging the gap between strategy and execution—transforming energy policies, market opportunities, and investment plans into bankable projects and operational assets.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Mission and Vision */}
                <div className="space-y-32 mb-32">
                    {/* Mission */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <div className="w-16 h-16 bg-brand-yellow/10 rounded-2xl flex items-center justify-center text-brand-yellow mb-8">
                                <Target size={32} />
                            </div>
                            <h2 className="text-4xl font-bold mb-8 text-app-main">Our Mission</h2>
                            <p className="text-app-muted text-lg leading-relaxed mb-10">
                                To transform policy and strategy into effective action by providing integrated renewable energy solutions, advising on electricity markets, building capacity, and developing sustainable infrastructure.
                            </p>
                            <button className="flex items-center gap-2 group font-bold text-brand-dark border-b-2 border-brand-yellow pb-1 px-1 hover:border-brand-green transition-all">
                                Read More <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="h-[450px] rounded-[60px] overflow-hidden shadow-2xl">
                            <img src={missionImg} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>

                    {/* Vision */}
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="order-2 md:order-1 h-[450px] rounded-[60px] overflow-hidden shadow-2xl">
                            <img src={visionImg} className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 md:order-2">
                            <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center text-brand-green mb-8">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-4xl font-bold mb-8 text-app-main">Our Vision</h2>
                            <p className="text-app-muted text-lg leading-relaxed mb-10">
                                To be a reputable and reliable provider of integrated energy and sustainability solutions, contributing to the development of efficient, resilient, and sustainable energy systems in Nigeria and across Africa.
                            </p>
                            <button className="flex items-center gap-2 group font-bold text-brand-dark border-b-2 border-brand-green pb-1 px-1 hover:border-brand-yellow transition-all">
                                Read More <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Our Core Values */}
                <section className="py-32 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />

                    <div className="text-center mb-20">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Our Culture</span>
                        <h2 className="text-5xl font-bold mt-4 text-app-main">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Professionalism', icon: <Award />, color: 'bg-emerald-500/10 text-emerald-600' },
                            { title: 'Accountability', icon: <Shield />, color: 'bg-amber-500/10 text-amber-600' },
                            { title: 'Innovation', icon: <Lightbulb />, color: 'bg-blue-500/10 text-blue-600' },
                            { title: 'Sustainability', icon: <Leaf />, color: 'bg-indigo-500/10 text-indigo-600' },
                            { title: 'Collaboration', icon: <Users />, color: 'bg-purple-500/10 text-purple-600' },
                            { title: 'Integrity', icon: <Heart />, color: 'bg-pink-500/10 text-pink-600' }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-8 rounded-[40px] bg-app-card border border-app shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    {React.cloneElement(value.icon, { size: 28 })}
                                </div>
                                <h3 className="text-2xl font-bold text-app-main group-hover:text-brand-green transition-colors">{value.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Meet Our Team Members - Hidden */}
                {/* 
                <section className="py-24 border-t border-gray-100">
                    <div className="text-center mb-20">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Team</span>
                        <h2 className="text-5xl font-bold mt-4 text-app-main">Meet Our Team Members</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                whileHover={{ y: -10 }}
                                className="relative bg-brand-dark rounded-[40px] overflow-hidden group h-[550px]"
                            >
                                <img src={member.img} alt={member.name} className="w-full h-[65%] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="p-8 text-white relative">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-brand-yellow font-bold text-sm uppercase mb-4">{member.position}</p>
                                    <p className="text-white/60 text-sm italic line-clamp-2">“ {member.quote} ”</p>

                                    <button
                                        onClick={() => setSelectedMember(member)}
                                        className="absolute -bottom-4 right-8 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark shadow-xl hover:scale-110 transition-transform"
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link to="/team">
                            <button className="bg-brand-dark text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
                                See all team members
                            </button>
                        </Link>
                    </div>
                </section> 
                */}

                {/* Completed Projects - Hidden */}
                {/* 
                <section className="py-24">
                    <div className="text-center mb-16">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Project</span>
                        <h2 className="text-5xl font-bold mt-4">Completed Project</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto mt-6">
                            Watch our story in action - various projects that we have successfully delivered with excellence and precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="h-80 rounded-[40px] overflow-hidden shadow-2xl relative group"
                        >
                            <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                <p className="text-white font-bold text-xl">Power Grid Maintenance</p>
                            </div>
                        </motion.div>
                        <div className="lg:col-span-2 grid grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="h-80 rounded-[40px] overflow-hidden shadow-2xl relative group"
                            >
                                <img src="https://images.unsplash.com/photo-1466611653911-954ff21caaf0?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white font-bold lg:text-lg">Renewable Wind Farm</p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="h-80 rounded-[40px] overflow-hidden shadow-2xl relative group"
                            >
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <p className="text-white font-bold lg:text-lg">Industrial Tech Control</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section> 
                */}


            </section>

            {/* Work with Premplus CTA */}
            <section className="px-4 mb-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-brand-yellow p-16 md:p-24 rounded-[60px] relative overflow-hidden flex flex-col md:flex-row justify-between items-center text-center md:text-left shadow-2xl shadow-brand-yellow/30"
                >
                    {/* Design accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-dark/5 rounded-full -ml-10 -mb-10 blur-2xl pointer-events-none" />

                    <div className="max-w-2xl relative z-10">
                        <h2 className="text-5xl md:text-6xl font-black text-brand-dark mb-6">Work with Premplus</h2>
                        <p className="text-brand-dark/70 text-xl font-medium">
                            Choose us for an innovative, reliable and modern approach for your energy needs.
                        </p>
                    </div>
                    <button className="mt-12 md:mt-0 bg-white text-brand-dark px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 hover:bg-brand-dark hover:text-white transition-all duration-300">
                        Get started
                    </button>
                </motion.div>
            </section>

            {/* Team Biography Overlay - Hidden */}
            {/* 
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    >
                        <div onClick={() => setSelectedMember(null)} className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" />

                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-4xl bg-white rounded-[60px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 bg-gray-100/80 backdrop-blur rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-yellow transition-colors shadow-lg"
                            >
                                <X size={24} />
                            </button>

                            <div className="w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden">
                                <img src={selectedMember.img} className="w-full h-full object-cover" />
                            </div>

                            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
                                <span className="text-brand-green font-bold text-sm uppercase tracking-widest mb-4">The Leadership</span>
                                <h2 className="text-4xl font-bold mb-2">{selectedMember.name}</h2>
                                <p className="text-brand-yellow font-bold text-xl mb-8">{selectedMember.position}</p>
                                <div className="w-20 h-1 bg-brand-yellow mb-10" />
                                <p className="text-brand-gray text-lg leading-relaxed italic">
                                    {selectedMember.bio}
                                </p>
                                <div className="mt-12 flex gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-brand-dark cursor-pointer hover:bg-brand-yellow transition-colors">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence> 
            */}
        </div >
    );
};

export default AboutPage;
