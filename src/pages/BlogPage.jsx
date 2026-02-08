import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const categories = ['All', 'Innovation', 'Renewable Energy', 'Startup Advice', 'Consultation'];

const blogPosts = [
    {
        id: 1,
        title: 'Premplus Signs Strategic MoU with REA to Establish National Energy Innovation Hub',
        category: 'Innovation',
        author: 'Dr. Anya Sharma',
        date: 'August 15, 2024',
        excerpt: 'The newly envisioned hub will serve as a national center for technical training, applied research, and enterprise development in the renewable.',
        img: mouImg
    },
    {
        id: 2,
        title: 'Premplus Participates in Launch of NEXTGEN RESCO Programme',
        category: 'Renewable Energy',
        author: 'John Doe',
        date: 'July 10, 2024',
        excerpt: 'This forward-looking initiative, led by the Rural Electrification Agency (REA) in partnership with NAPTIN and Eco Innovation Empowerment',
        img: nextGenImg
    },
    {
        id: 3,
        title: 'Premplus Participates in REA-Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        category: 'Innovation',
        author: 'Engr. Zaharadeen Usman',
        date: 'February 08, 2026',
        excerpt: 'Premplus Nig. Ltd proudly participated in the REA State-by-State Roundtable with Adamawa State, held in Abuja, focusing on enhancing renewable energy access and fostering economic growth.',
        img: b3Img
    },
    {
        id: 4,
        title: 'Adamawa State Ministry of Works and Energy Development partners with Premplus for a three-day stakeholders’ workshop on electricity policy framework',
        category: 'Innovation',
        author: 'Engr. Zaharadeen Usman Ibrahim',
        date: 'February 08, 2026',
        excerpt: 'The Adamawa State Ministry of Works and Energy Development, in collaboration with Premplus Nig. Ltd, recently hosted a three-day workshop dedicated to formulating a Sustainable and Inclusive Electricity Policy Framework.',
        img: b4Img
    },
    {
        id: 5,
        title: 'Premplus CEO receives Award of Excellence',
        category: 'Consultation',
        author: 'NYAN Press',
        date: 'February 08, 2026',
        excerpt: 'Engr. Zaharadeen Usman, the esteemed CEO of Premplus, has been awarded the prestigious Award of Excellence by the National Youth Assembly of Nigeria.',
        img: b5Img
    },
    {
        id: 6,
        title: 'Premplus CEO receives Distinguished Merit Award',
        category: 'Innovation',
        author: 'NANNS Press',
        date: 'February 08, 2026',
        excerpt: 'Premplus is proud to announce that our CEO, Engr. Zaharadeen Usman, has been honored with the Distinguished Merit Award by the National Association of Northern Nigerian Students (NANNS).',
        img: b6Img
    },
    {
        id: 7,
        title: 'Premplus signs partnership deal with Aurora',
        category: 'Consultation',
        author: 'Corporate Communications',
        date: 'February 08, 2026',
        excerpt: 'Premplus is excited to announce the signing of a Memorandum of Understanding (MoU) with Aurora, a leading solar energy company, to enhance our renewable energy solutions.',
        img: b7Img
    },
    {
        id: 8,
        title: 'Premplus at the REA Stakeholders Engagement Workshop (SEW2024)',
        category: 'Consultation',
        author: 'REA Communications',
        date: 'February 08, 2026',
        excerpt: 'Premplus is pleased to share insights from our participation in the Stakeholders Engagement Workshop (SEW2024), focusing on sustainable energy access and innovation.',
        img: b8Img
    },
    {
        id: 9,
        title: 'Premplus at the NERC Summit on Accelerated Scale-Up of Renewable and Distributed Energy Solutions',
        category: 'Innovation',
        author: 'Policy & Strategy Team',
        date: 'February 08, 2026',
        excerpt: 'Premplus recently had the privilege of attending a landmark event organized by NERC, focused on accelerating the adoption of renewable energy in Nigeria.',
        img: b9Img
    },
    {
        id: 10,
        title: 'Growing Green Job Career Fair',
        category: 'Innovation',
        author: 'Human Resources',
        date: 'February 08, 2026',
        excerpt: 'Premplus participated in the Growing Green Job Career Fair, featuring career clinics and networking opportunities for the next generation of energy professionals.',
        img: b10Img
    }
];

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const filteredPosts = blogPosts.filter(post =>
        (activeCategory === 'All' || post.category === activeCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Calculate pagination details
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

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
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on search
                            }}
                        />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setCurrentPage(1); // Reset to page 1 on category change
                            }}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[600px]">
                    {currentPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
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
                    {currentPosts.length === 0 && (
                        <div className="col-span-full text-center py-20 text-app-muted">
                            No posts found matching your criteria.
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-20">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`p-2 border border-app rounded-lg transition-colors ${currentPage === 1
                                ? 'text-app-muted/50 cursor-not-allowed'
                                : 'text-app-muted hover:bg-app-secondary hover:text-brand-dark'
                                }`}
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => paginate(page)}
                                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === page
                                        ? 'bg-brand-yellow text-brand-dark shadow-md scale-110'
                                        : 'text-app-muted hover:bg-app-secondary'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`p-2 border border-app rounded-lg transition-colors ${currentPage === totalPages
                                ? 'text-app-muted/50 cursor-not-allowed'
                                : 'text-app-muted hover:bg-app-secondary hover:text-brand-dark'
                                }`}
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
