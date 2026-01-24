import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowUpRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        title: 'Premplus Signs Strategic MoU with REA to Establish National Energy Innovation Hub',
        excerpt: 'The newly envisioned hub will serve as a national center for technical training, applied research, and enterprise development in the renewable.',
        date: 'August 15, 2024',
        category: 'Innovation',
        img: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80'
    },
    {
        id: 2,
        title: 'Premplus Participates in Launch of NEXTGEN RESCO Programme',
        date: 'July 10, 2024',
        category: 'Renewable Energy',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
        id: 3,
        title: 'Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        date: 'June 05, 2024',
        category: 'Innovation',
        img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-app-secondary overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Blog</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-app-main">Latest News Article</h2>
                    </div>
                    <Link to="/blog">
                        <button className="hidden sm:flex items-center gap-2 text-app-main font-bold hover:text-brand-green transition-colors">
                            View All Posts <ArrowUpRight size={20} />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Post */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 group"
                    >
                        <div className="relative h-[450px] rounded-3xl overflow-hidden mb-8 shadow-xl">
                            <img src={blogPosts[0].img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-yellow text-brand-dark text-xs font-bold rounded-full">
                                {blogPosts[0].category}
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-app-muted text-sm mb-4">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {blogPosts[0].date}</span>
                        </div>
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-brand-green transition-colors text-app-main">
                            {blogPosts[0].title}
                        </h3>
                        <p className="text-app-muted text-lg mb-8 leading-relaxed">
                            {blogPosts[0].excerpt}
                        </p>
                        <Link to={`/blog/${blogPosts[0].id}`}>
                            <button className="flex items-center gap-2 text-app-main font-bold border-b-2 border-brand-yellow pb-1 hover:border-brand-green transition-all">
                                Read Article
                            </button>
                        </Link>
                    </motion.div>

                    {/* Side Posts */}
                    <div className="lg:col-span-5 space-y-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <Link to={`/blog/${post.id}`} key={post.id}>
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex gap-6 group cursor-pointer"
                                >
                                    <div className="flex-shrink-0 w-32 h-32 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                        <img src={post.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">{post.category}</span>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-brand-green transition-colors text-app-main line-clamp-2">{post.title}</h4>
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
