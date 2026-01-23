import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Share2, Heart, MessageCircle, Send, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        title: 'Premplus Signs Strategic MoU with REA to Establish National Energy Innovation Hub',
        category: 'Innovation',
        author: 'Dr. Anya Sharma',
        date: 'August 15, 2024',
        content: `
            <p>Premplus Nig. Ltd and the Rural Electrification Agency (REA) have signed a groundbreaking Memorandum of Understanding to upgrade existing REA Workshop and Training Centres into a National Energy Innovation Hub. The signing ceremony took place at the REA headquarters in Abuja.</p>
            <p>The newly envisioned hub will serve as a national center for technical training, applied research, and enterprise development in the renewable energy sector. It will build on REA's existing Energizing Education Programme (EEP) infrastructure located in select federal universities. Through hands-on training and technical courses, the hub aims to train professionals in key areas including solar PV, battery storage, mini-grid systems, and energy efficiency. By combining academic rigor with real-world application, the initiative seeks to produce a generation of clean energy experts and innovators.</p>
            <p>To ensure excellence and global standards, Premplus is leveraging its existing technical partnership with Brunel University, London. This collaboration will provide access to leading researchers and innovators, enhancing the quality and depth of the hub's training curriculum. The program's structure leverages TVET (Technical Vocational Education & Training) to deliver both practical skills and theoretical knowledge.</p>
        `,
        img: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=1200'
    },
    // Mock for other IDs
];

const BlogDetailPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];

    const categories = ['All', 'Innovation', 'Renewable Energy', 'Startup Advice', 'Consultation'];

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-brand-dark mb-8">Blog News</h1>

                    {/* Search Mock */}
                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search blog posts..."
                                className="w-full pl-6 pr-4 py-4 rounded-xl border border-gray-100 bg-gray-50 focus:outline-none"
                                disabled
                            />
                        </div>
                    </div>

                    {/* Category Filter Mock */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${cat === 'All'
                                        ? 'bg-brand-yellow text-brand-dark shadow-md'
                                        : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-brand-gray mb-8">
                        <Link to="/blog" className="hover:text-brand-green">Blog</Link>
                        <ChevronRight size={14} />
                        <span className="text-brand-dark">All</span>
                    </div>

                    <div className="flex items-center justify-center gap-4 text-sm font-semibold text-brand-gray mb-10">
                        <span className="text-brand-dark">By {post.author}</span>
                        <span>|</span>
                        <span>Published on {post.date}</span>
                    </div>
                </div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative h-[500px] rounded-[40px] overflow-hidden mb-12 shadow-2xl"
                >
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content */}
                <article className="prose prose-lg max-w-none text-brand-gray leading-relaxed mb-16 px-4">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* Share Actions */}
                <div className="border-t border-b border-gray-100 py-6 mb-12 flex justify-between items-center px-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-brand-dark mr-4">Share this post:</span>
                        <button className="flex items-center gap-2 text-brand-gray hover:text-brand-green transition-colors">
                            <Heart size={20} /> <span className="text-sm">23</span>
                        </button>
                        <button className="flex items-center gap-2 text-brand-gray hover:text-brand-green transition-colors ml-4">
                            <MessageCircle size={20} /> <span className="text-sm">5</span>
                        </button>
                        <button className="flex items-center gap-2 text-brand-gray hover:text-brand-green transition-colors ml-4">
                            <Send size={20} /> <span className="text-sm">12</span>
                        </button>
                    </div>
                </div>

                {/* Comments */}
                <div className="px-4">
                    <h2 className="text-2xl font-bold text-brand-dark mb-8">Comments (5)</h2>

                    <div className="space-y-8 mb-12">
                        {[
                            { name: 'Ethan Carter', date: 'August 16, 2024', comment: 'Great insights, Dr. Sharma! This article is very helpful for understanding the legal landscape in the tech industry.', avatar: 'https://i.pravatar.cc/150?u=ethan' },
                            { name: 'Olivia Bennett', date: 'August 17, 2024', comment: 'I appreciate the clear explanations of complex legal concepts. The section on data privacy was particularly informative.', avatar: 'https://i.pravatar.cc/150?u=olivia' },
                            { name: 'Dr. Anya Sharma', date: 'August 17, 2024', comment: 'Thank you, Olivia! I am glad you found the information helpful.', avatar: 'https://i.pravatar.cc/150?u=anya', isAuthor: true }
                        ].map((comment, idx) => (
                            <div key={idx} className={`flex gap-6 ${comment.isAuthor ? 'ml-12' : ''}`}>
                                <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full border-2 border-brand-yellow/20" />
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-bold text-brand-dark">{comment.name}</h4>
                                        <span className="text-xs text-brand-gray">{comment.date}</span>
                                    </div>
                                    <p className="text-brand-gray leading-relaxed text-sm">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comment Form */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <div className="flex gap-4 items-start">
                            <img src="https://i.pravatar.cc/150?u=me" alt="user" className="w-12 h-12 rounded-full" />
                            <div className="flex-1">
                                <textarea
                                    placeholder="Add a comment..."
                                    className="w-full bg-transparent border-none focus:ring-0 text-brand-dark placeholder-brand-gray/50 resize-none h-24"
                                ></textarea>
                                <div className="flex justify-end mt-4">
                                    <button className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-yellow/20 hover:scale-105 transition-all">
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
