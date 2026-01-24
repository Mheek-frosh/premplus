import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Innovation', 'Renewable Energy', 'Startup Advice', 'Consultation'];

const blogPosts = [
    {
        id: 1,
        title: 'Premplus Signs Strategic MoU with REA to Establish National Energy Innovation Hub',
        category: 'Innovation',
        author: 'Dr. Anya Sharma',
        date: 'August 15, 2024',
        excerpt: 'The newly envisioned hub will serve as a national center for technical training, applied research, and enterprise development in the renewable.',
        img: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80'
    },
    {
        id: 2,
        title: 'Premplus Participates in Launch of NEXTGEN RESCO Programme to Strengthen Renewable...',
        category: 'Renewable Energy',
        author: 'John Doe',
        date: 'July 10, 2024',
        excerpt: 'This forward-looking initiative, led by the Rural Electrification Agency (REA) in partnership with NAPTIN and Eco Innovation Empowerment',
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    {
        id: 3,
        title: 'Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        category: 'Innovation',
        author: 'Jane Smith',
        date: 'June 05, 2024',
        excerpt: 'During the event, discussions centered on expanding electricity access in rural areas, leveraging distributed energy solutions',
        img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'
    },
    {
        id: 4,
        title: 'Premplus at the REA Stakeholders Engagement Workshop (SEW2024)',
        category: 'Innovation',
        author: 'Alice Brown',
        date: 'May 12, 2024',
        excerpt: 'Premplus is pleased to share insights from our participation in the Stakeholders Engagement Workshop (SEW2024), held on December 18th',
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
    }
];

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post =>
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="pt-32 pb-24 bg-app-main min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-app-main mb-4">Blog News</h1>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-app-muted" size={20} />
                        <input
                            type="text"
                            placeholder="Search blog posts..."
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-app bg-app-secondary focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:bg-app-card transition-all shadow-sm text-app-main placeholder:text-app-muted"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${activeCategory === cat
                                ? 'bg-brand-yellow text-brand-dark shadow-md'
                                : 'bg-app-secondary text-app-muted hover:bg-app-main hover:text-app-main'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link to={`/blog/${post.id}`}>
                                <div className="relative h-80 rounded-3xl overflow-hidden mb-6 shadow-xl">
                                    <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur text-brand-green text-xs font-bold rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-green transition-colors leading-tight text-app-main">
                                    {post.title}
                                </h3>
                                <p className="text-app-muted text-base mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>
                                <button className="bg-brand-dark text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-brand-green transition-colors flex items-center gap-2 group/btn">
                                    Read More <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-4 mt-20">
                    <button className="p-2 border border-app rounded-lg text-app-muted hover:bg-app-secondary">
                        <ChevronLeft size={20} />
                    </button>
                    {[1, 2, 3, '...', 10].map((page, i) => (
                        <button
                            key={i}
                            className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${page === 1
                                ? 'bg-brand-yellow text-brand-dark shadow-md'
                                : 'text-app-muted hover:bg-app-secondary'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="p-2 border border-app rounded-lg text-app-muted hover:bg-app-secondary">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
