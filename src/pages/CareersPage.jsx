import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, ArrowRight, Briefcase, Zap, Globe, Heart } from 'lucide-react';

const jobs = [
    {
        id: 1,
        title: 'Senior Renewable Energy Engineer',
        location: 'Lagos, Nigeria',
        type: 'Full-time',
        department: 'Engineering',
        salary: 'Competitive',
        icon: <Briefcase className="text-brand-dark" />
    },
    {
        id: 2,
        title: 'Infrastructure Project Manager',
        location: 'Remote / Port Harcourt',
        type: 'Contract',
        department: 'Operations',
        salary: 'Negotiable',
        icon: <Briefcase className="text-brand-dark" />
    },
    {
        id: 3,
        title: 'Sustainability Consultant',
        location: 'London, UK',
        type: 'Full-time',
        department: 'Advisory',
        salary: 'Competitive',
        icon: <Briefcase className="text-brand-dark" />
    },
    {
        id: 4,
        title: 'Smart Grid Software Developer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Technology',
        salary: 'Top tier',
        icon: <Briefcase className="text-brand-dark" />
    }
];

const CareersPage = () => {
    return (
        <div className="pt-24 bg-app-secondary min-h-screen transition-colors duration-300">
            {/* Apple-style Hero */}
            <section className="py-32 bg-app-card flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}

                        className="text-6xl md:text-8xl font-black text-app-main tracking-tighter mb-8"
                    >
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow">Future</span>.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-app-muted max-w-2xl mx-auto font-medium"
                    >
                        We’re looking for visionaries who want to solve the world’s most pressing energy challenges.
                    </motion.p>
                </div>
            </section>

            {/* Culture Grid */}
            <section className="py-24 max-w-7xl mx-auto px-4 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {[
                    { title: 'Global Impact', desc: 'Work on projects that power entire nations.', icon: <Globe size={40} />, color: 'bg-blue-50 text-blue-600' },
                    { title: 'Innovation First', desc: 'Access to the latest in R&D and clean tech.', icon: <Zap size={40} />, color: 'bg-yellow-50 text-yellow-600' },
                    { title: 'Health & Wellness', desc: 'Comprehensive coverage for you and your family.', icon: <Heart size={40} />, color: 'bg-red-50 text-red-600' }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-app-card p-12 rounded-[40px] shadow-sm border border-app transition-colors duration-300"
                    >
                        <div className={`w-20 h-20 ${item.color} rounded-3xl flex items-center justify-center mb-8`}>
                            {item.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-app-main">{item.title}</h3>
                        <p className="text-app-muted text-lg leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </section>

            {/* Jobs Section */}
            <section className="py-24 max-w-4xl mx-auto px-4">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-4 text-app-main">Open Roles</h2>
                        <p className="text-app-muted font-medium">Find your next challenge in energy.</p>
                    </div>
                    <div className="hidden md:flex items-center gap-4 bg-app-card px-6 py-3 rounded-2xl shadow-sm border border-app">
                        <Search size={20} className="text-app-muted" />
                        <input type="text" placeholder="Search roles..." className="outline-none font-medium bg-transparent text-app-main" />
                    </div>
                </div>

                <div className="space-y-6">
                    {jobs.map((job) => (
                        <motion.div
                            key={job.id}
                            whileHover={{ scale: 1.01 }}
                            className="bg-app-card p-8 rounded-[32px] shadow-sm border border-app hover:shadow-xl hover:border-brand-yellow/30 transition-all cursor-pointer group"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 bg-app-secondary rounded-2xl flex items-center justify-center text-2xl">
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-app-main mb-1 group-hover:text-brand-yellow transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-app-muted font-medium text-sm">
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                            <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                                            <span className="text-brand-green">{job.department}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 font-bold text-brand-dark bg-gray-50 px-6 py-3 rounded-xl hover:bg-brand-dark hover:text-white transition-all">
                                    Apply Now <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
