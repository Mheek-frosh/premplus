import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';
import mouImg from '../assets/mou.png';
import nextGenImg from '../assets/nextgen.png';
import b3Img from '../assets/b3.png';
import b4Img from '../assets/b4.png';
import b5Img from '../assets/b5.png';
import b6Img from '../assets/b6.png';
import b7Img from '../assets/b7.png';
import b8Img from '../assets/b8.png';
import b9Img from '../assets/b9.png';
import b10Img from '../assets/b10.png';

const blogPosts = [
    {
        id: 1,
        title: 'Premplus Signs Strategic MoU with REA to Establish National Energy Innovation Hub',
        excerpt: 'The newly envisioned hub will serve as a national center for technical training, applied research, and enterprise development in the renewable.',
        date: 'November 14, 2025',
        category: 'Innovation',
        img: mouImg
    },
    {
        id: 2,
        title: 'Premplus Participates in Launch of NEXTGEN RESCO Programme',
        excerpt: 'This forward-looking initiative, led by the Rural Electrification Agency (REA), aims to address a critical gap in Nigeria\'s renewable energy sector.',
        date: 'May 23, 2025',
        category: 'Renewable Energy',
        img: nextGenImg
    },
    {
        id: 3,
        title: 'Premplus Participates in REA-Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        excerpt: 'Premplus proudly participated in the REA State-by-State Roundtable with Adamawa State, focusing on enhancing renewable energy access.',
        date: 'March 4, 2025',
        category: 'Innovation',
        img: b3Img
    },
    {
        id: 4,
        title: 'Adamawa State Ministry of Works and Energy Development partners with Premplus for a three-day stakeholders’ workshop on electricity policy framework',
        date: 'February 19, 2025',
        excerpt: 'The Adamawa State Ministry hosted a three-day workshop dedicated to formulating a Sustainable and Inclusive Electricity Policy Framework.',
        category: 'Innovation',
        img: b4Img
    },
    {
        id: 5,
        title: 'Premplus CEO receives Award of Excellence',
        excerpt: 'Engr. Zaharadeen Usman has been awarded the prestigious Award of Excellence by the National Youth Assembly of Nigeria.',
        date: 'January 14, 2025',
        category: 'Consultation',
        img: b5Img
    },
    {
        id: 6,
        title: 'Premplus CEO receives Distinguished Merit Award',
        excerpt: 'Our CEO has been honored with the Distinguished Merit Award by NANNS for his contributions to national development.',
        date: 'January 9, 2025',
        category: 'Innovation',
        img: b6Img
    },
    {
        id: 7,
        title: 'Premplus signs partnership deal with Aurora',
        excerpt: 'Premplus is excited to announce the signing of a MoU with Aurora, a leading solar energy company.',
        date: 'December 26, 2024',
        category: 'Consultation',
        img: b7Img
    },
    {
        id: 8,
        title: 'Premplus at the REA Stakeholders Engagement Workshop (SEW2024)',
        excerpt: 'Premplus is pleased to share insights from our participation in SEW2024, focusing on sustainable energy access and innovation.',
        date: 'December 18, 2024',
        category: 'Consultation',
        img: b8Img
    },
    {
        id: 9,
        title: 'Premplus at the NERC Summit on Accelerated Scale-Up of Renewable and Distributed Energy Solutions',
        excerpt: 'Premplus attended a landmark event organized by NERC, focused on accelerating the adoption of renewable energy in Nigeria.',
        date: 'July 24, 2024',
        category: 'Innovation',
        img: b9Img
    },
    {
        id: 10,
        title: 'Growing Green Job Career Fair',
        excerpt: 'Premplus participated in the Growing Green Job Career Fair, featuring career clinics and networking opportunities.',
        date: 'July 8, 2024',
        category: 'Innovation',
        img: b10Img
    }
];

// Sort by date (newest first) for Latest News and Insights - show top 5
const latestPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-app-secondary overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Blog</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-app-main">Latest News and Insights</h2>
                    </div>
                    <Link to="/blog">
                        <button className="hidden sm:flex items-center gap-2 text-app-main font-bold hover:text-brand-green transition-colors">
                            View All Posts <ArrowUpRight size={20} />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Post */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 group"
                    >
                        <div className="relative h-[450px] rounded-3xl overflow-hidden mb-8 shadow-xl">
                            <img src={latestPosts[0].img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-yellow text-brand-dark text-xs font-bold rounded-full">
                                {latestPosts[0].category}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-app-muted text-sm mb-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {latestPosts[0].date}</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-green transition-colors text-app-main">
                            {latestPosts[0].title}
                        </h3>
                        <p className="text-app-muted text-lg mb-8 leading-relaxed">
                            {latestPosts[0].excerpt}
                        </p>
                        <Link to={`/blog/${latestPosts[0].id}`}>
                            <button className="flex items-center gap-2 text-app-main font-bold border-b-2 border-brand-yellow pb-1 hover:border-brand-green transition-all">
                                Read Article
                            </button>
                        </Link>
                    </motion.div>

                    {/* Side Posts - Fixed spacing */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {latestPosts.slice(1).map((post, index) => (
                            <Link to={`/blog/${post.id}`} key={post.id}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="flex gap-5 group cursor-pointer"
                                >
                                    <div className="flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden border border-app shadow-sm">
                                        <img src={post.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">{post.category}</span>
                                        <h4 className="text-lg font-bold mb-2 group-hover:text-brand-green transition-colors text-app-main line-clamp-2 leading-tight">{post.title}</h4>
                                        <span className="text-app-muted text-xs">{post.date}</span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
