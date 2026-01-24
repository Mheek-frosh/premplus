import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Share2, Heart, MessageCircle, Send, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import mouImg from '../assets/mou.png';
import mou1Img from '../assets/mou1.png';
import mou2Img from '../assets/mou2.png';
import nextGenImg from '../assets/nextgen.png';

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
            <p>REA's Managing Director/CEO, Dr. Abba Abubakar Aliyu, expressed enthusiasm over the collaboration, emphasizing its role in deepening Nigeria's talent pipeline. He stated that Premplus is well-placed to lead in TVET as a private-sector partner, creating a replicable model for renewable energy skills development across the country. In his remarks, Engr. Zaharadeen Usman, Managing Director of Premplus, reaffirmed the company's commitment to long-term sustainability. According to him, the hub will be sustained through robust training, partnerships, and innovation-driven enterprise models.</p>
            <p>Once operational, the Innovation Hub will be a national reference point for clean energy skills and innovation. It is expected to support REA's wider Distributed Access through Renewable Energy Scale-up (DARES) initiative by building capacity, fostering entrepreneurship, and supporting local solutions. This partnership demonstrates Premplus' firm belief in building local capacity and driving inclusive, sustainable development through technology and education. We look forward to working closely with REA and other stakeholders to realize the full potential of Nigeria's clean energy future.</p>
        `,
        img: mouImg,
        gallery: [mouImg, mou1Img, mou2Img]
    },
    {
        id: 2,
        title: 'Premplus Participates in Launch of NEXTGEN RESCO Programme',
        category: 'Renewable Energy',
        author: 'John Doe',
        date: 'July 10, 2024',
        content: `
            <p>Premplus Nig. Ltd was proud to attend the official launch of the NEXTGEN RESCO Programme on Friday, May 23, 2025, in Abuja. This forward-looking initiative, led by the Rural Electrification Agency (REA) in partnership with NAPTIN and Eco Innovation Empowerment Initiatives (EIEI) of Prado Power, aims to address a critical gap in Nigeria's renewable energy sector: the need for a highly skilled, future-ready workforce.</p>
            <p>With the theme focused on "Building a Structured Talent Pipeline for the Renewable Energy Industry," the programme was introduced as a structured 12-month journey that will nurture 130 young Nigerian graduates into full-fledged renewable energy professionals. Participants will undergo classroom-based technical training, mentorship, and hands-on experience on real-world energy projects across the country.</p>
            <p>At the launch, the REA emphasized its goal of not only upskilling youth but also injecting new energy into the sector's scalability and sustainability. With over 10,000 applicants and only 130 slots, the competitive selection process reflects the high demand for youth involvement in Nigeria's clean energy future.</p>
            <p>Premplus remains committed to supporting initiatives that build local capacity and create pathways for young professionals to contribute meaningfully to the renewable energy transition. We congratulate all selected participants and look forward to seeing the impact of this transformative programme.</p>
        `,
        img: nextGenImg
    },
    {
        id: 3,
        title: 'Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        category: 'Innovation',
        author: 'Jane Smith',
        date: 'June 05, 2024',
        content: `
            <p>Premplus participated in a high-level roundtable discussion in Adamawa State focused on advancing renewable energy initiatives across the region. The event brought together key stakeholders from government, private sector, and civil society to discuss strategies for expanding electricity access in rural areas.</p>
            <p>During the event, discussions centered on expanding electricity access in rural areas, leveraging distributed energy solutions, and creating sustainable business models for mini-grid deployment. Participants explored innovative financing mechanisms and policy frameworks that could accelerate the adoption of clean energy technologies.</p>
            <p>The roundtable highlighted the critical role of public-private partnerships in achieving universal energy access. Premplus shared insights from our ongoing projects and emphasized the importance of community engagement in ensuring the long-term success of renewable energy initiatives.</p>
        `,
        img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200'
    },
    {
        id: 4,
        title: 'Premplus at the REA Stakeholders Engagement Workshop (SEW2024)',
        category: 'Innovation',
        author: 'Alice Brown',
        date: 'May 12, 2024',
        content: `
            <p>Premplus is pleased to share insights from our participation in the Stakeholders Engagement Workshop (SEW2024), held on December 18th at the REA headquarters in Abuja. The workshop provided a platform for industry players, government agencies, and development partners to discuss the progress and future direction of Nigeria's rural electrification efforts.</p>
            <p>Key topics included the implementation of the Distributed Access through Renewable Energy Scale-up (DARES) programme, innovations in mini-grid technology, and strategies for improving project sustainability. Premplus contributed to discussions on technical capacity building and the role of private sector partnerships in achieving the nation's electrification goals.</p>
            <p>The workshop reaffirmed our commitment to supporting REA's vision of providing clean, reliable, and affordable energy to underserved communities across Nigeria. We look forward to continued collaboration with all stakeholders in this important mission.</p>
        `,
        img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200'
    },
    {
        id: 5,
        title: 'Harnessing Solar Power for Rural Development in Nigeria',
        category: 'Renewable Energy',
        author: 'Michael Obi',
        date: 'April 20, 2024',
        content: '<p>Exploring how off-grid solar solutions are transforming lives in remote communities by providing reliable and clean energy. This article examines successful case studies and best practices for rural solar deployment.</p>',
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200'
    },
    {
        id: 6,
        title: 'The Role of Smart Grids in Modernizing African Infrastructure',
        category: 'Innovation',
        author: 'Sarah Johnson',
        date: 'March 15, 2024',
        content: '<p>Smart grid technology is essential for efficient energy distribution and minimizing losses in the national power network. Learn about the latest innovations and implementation strategies.</p>',
        img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200'
    },
    {
        id: 7,
        title: 'Investing in Wind Energy: Opportunities and Challenges',
        category: 'Renewable Energy',
        author: 'David Lee',
        date: 'February 28, 2024',
        content: '<p>A comprehensive look at the potential for wind energy projects across the continent and the hurdles developers face in bringing these projects to fruition.</p>',
        img: 'https://images.unsplash.com/photo-1466611653911-954ff21caaf0?w=1200'
    },
    {
        id: 8,
        title: 'Sustainable Consulting: Guiding Businesses to Net Zero',
        category: 'Consultation',
        author: 'Emily Chen',
        date: 'January 10, 2024',
        content: '<p>How our consultation services help major industries reduce their carbon footprint while maintaining profitability and competitiveness in the global market.</p>',
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200'
    },
    {
        id: 9,
        title: 'Startup Spotlight: The Next Big Thing in Green Tech',
        category: 'Startup Advice',
        author: 'Chris Evans',
        date: 'December 05, 2023',
        content: '<p>Featuring promising startups that are innovating in the battery storage and electric vehicle sectors, and what makes them stand out in the competitive green tech landscape.</p>',
        img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200'
    },
    {
        id: 10,
        title: 'Community Engagement: The Heart of Successful Energy Projects',
        category: 'Consultation',
        author: 'Fatima Ahmed',
        date: 'November 22, 2023',
        content: '<p>Building trust with local communities is crucial for the long-term success of any major infrastructure development. Discover proven strategies for effective community engagement.</p>',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200'
    },
    {
        id: 11,
        title: 'Optimizing Hydroelectric Power Generation',
        category: 'Renewable Energy',
        author: 'James Wilson',
        date: 'October 15, 2023',
        content: '<p>New technologies are breathing new life into older dams, increasing efficiency and output without new construction, making hydroelectric power more viable than ever.</p>',
        img: 'https://images.unsplash.com/photo-1461301214746-1e790926d323?w=1200'
    },
    {
        id: 12,
        title: 'Policy Frameworks for a Green Future',
        category: 'Consultation',
        author: 'Linda Kim',
        date: 'September 30, 2023',
        content: '<p>Analyzing the latest government policies and what they mean for investors in the renewable energy sector, including incentives and regulatory considerations.</p>',
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200'
    },
    {
        id: 13,
        title: 'The Economics of Solar Panels for Small Businesses',
        category: 'Startup Advice',
        author: 'Robert Taylor',
        date: 'August 12, 2023',
        content: '<p>Why switching to solar is a smart financial move for SMEs looking to cut operational costs and improve their environmental credentials.</p>',
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200'
    },
    {
        id: 14,
        title: 'Biofuel Innovations: Turning Waste into Energy',
        category: 'Innovation',
        author: 'Maria Garcia',
        date: 'July 25, 2023',
        content: '<p>Groundbreaking research into converting agricultural waste into viable biofuel sources for transportation and power generation.</p>',
        img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=1200'
    },
    {
        id: 15,
        title: 'Electric Vehicles: Infrastructure Challenges',
        category: 'Innovation',
        author: 'Tom Harris',
        date: 'June 18, 2023',
        content: '<p>Addressing the critical need for charging stations and grid upgrades to support the EV revolution and enable widespread adoption.</p>',
        img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200'
    },
];

const BlogDetailPage = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="pt-24 pb-24 bg-app-main min-h-screen transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <Link to="/blog">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-app-muted hover:text-brand-green transition-colors mb-8 font-semibold"
                    >
                        <ArrowLeft size={20} /> Back to Blog
                    </motion.button>
                </Link>

                {/* Category Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    <span className="inline-block px-4 py-2 bg-brand-yellow text-brand-dark text-xs font-bold rounded-full uppercase tracking-wider">
                        {post.category}
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-5xl font-bold text-app-main mb-6 leading-tight"
                >
                    {post.title}
                </motion.h1>

                {/* Meta Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center gap-6 text-app-muted mb-12 pb-8 border-b border-app"
                >
                    <div className="flex items-center gap-2">
                        <User size={18} />
                        <span className="font-semibold">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{post.date}</span>
                    </div>
                </motion.div>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl"
                >
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
                </motion.div>

                {/* Content */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="prose prose-lg max-w-none mb-16"
                >
                    <div
                        className="text-app-muted leading-relaxed space-y-6 [&>p]:text-app-muted [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-6"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Image Gallery for Posts that have it (like MoU) */}
                    {post.gallery && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {post.gallery.map((imgSrc, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="rounded-2xl overflow-hidden shadow-lg h-64 border border-app"
                                >
                                    <img src={imgSrc} alt="Gallery" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.article>

                {/* Share Actions */}
                <div className="border-t border-b border-app py-8 mb-16 flex flex-wrap justify-between items-center gap-4">
                    <span className="text-sm font-bold text-app-main">Share this article:</span>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-app-secondary text-app-muted hover:text-brand-green hover:bg-app-card transition-all">
                            <Heart size={20} /> <span className="text-sm font-semibold">23</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-app-secondary text-app-muted hover:text-brand-green hover:bg-app-card transition-all">
                            <MessageCircle size={20} /> <span className="text-sm font-semibold">5</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-app-secondary text-app-muted hover:text-brand-green hover:bg-app-card transition-all">
                            <Share2 size={20} /> <span className="text-sm font-semibold">Share</span>
                        </button>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold text-app-main mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost, idx) => (
                                <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="group cursor-pointer"
                                    >
                                        <div className="relative h-48 rounded-2xl overflow-hidden mb-4 shadow-lg border border-app">
                                            <img
                                                src={relatedPost.img}
                                                alt={relatedPost.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <span className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2 block">
                                            {relatedPost.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-app-main group-hover:text-brand-green transition-colors line-clamp-2 mb-2">
                                            {relatedPost.title}
                                        </h3>
                                        <span className="text-app-muted text-xs">{relatedPost.date}</span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Comments Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-app-main mb-8">Comments (3)</h2>

                    <div className="space-y-8 mb-12">
                        {[
                            { name: 'Ethan Carter', date: 'August 16, 2024', comment: 'Great insights! This article is very helpful for understanding the energy landscape in Nigeria.', avatar: 'https://i.pravatar.cc/150?u=ethan' },
                            { name: 'Olivia Bennett', date: 'August 17, 2024', comment: 'I appreciate the clear explanations. The section on technical training was particularly informative.', avatar: 'https://i.pravatar.cc/150?u=olivia' },
                            { name: post.author, date: 'August 17, 2024', comment: 'Thank you for your kind words! I am glad you found the information helpful.', avatar: 'https://i.pravatar.cc/150?u=author', isAuthor: true }
                        ].map((comment, idx) => (
                            <div key={idx} className={`flex gap-4 ${comment.isAuthor ? 'ml-8 md:ml-12' : ''}`}>
                                <img src={comment.avatar} alt={comment.name} className="w-12 h-12 rounded-full border-2 border-brand-yellow/20 flex-shrink-0" />
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="font-bold text-app-main">{comment.name}</h4>
                                        {comment.isAuthor && (
                                            <span className="px-2 py-0.5 bg-brand-yellow text-brand-dark text-xs font-bold rounded">Author</span>
                                        )}
                                        <span className="text-xs text-app-muted">{comment.date}</span>
                                    </div>
                                    <p className="text-app-muted leading-relaxed">{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comment Form */}
                    <div className="bg-app-secondary rounded-3xl p-6 md:p-8 border border-app">
                        <h3 className="text-xl font-bold text-app-main mb-6">Leave a Comment</h3>
                        <div className="flex gap-4 items-start">
                            <img src="https://i.pravatar.cc/150?u=me" alt="user" className="w-12 h-12 rounded-full flex-shrink-0" />
                            <div className="flex-1">
                                <textarea
                                    placeholder="Share your thoughts..."
                                    className="w-full bg-app-card border border-app rounded-xl p-4 text-app-main placeholder:text-app-muted focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none h-32 transition-colors"
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
