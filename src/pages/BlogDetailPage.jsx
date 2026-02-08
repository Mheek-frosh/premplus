import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Share2, Heart, MessageCircle, Send, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import mouImg from '../assets/mou.png';
import mou1Img from '../assets/mou1.png';
import mou2Img from '../assets/mou2.png';
import nextGenImg from '../assets/nextgen.png';
import b3Img from '../assets/b3.png';
import b4Img from '../assets/b4.png';
import b41Img from '../assets/b41.png';
import b42Img from '../assets/b42.png';
import b5Img from '../assets/b5.png';
import b6Img from '../assets/b6.png';
import b7Img from '../assets/b7.png';
import b8Img from '../assets/b8.png';
import b9Img from '../assets/b9.png';
import b91Img from '../assets/b91.png';
import b92Img from '../assets/b92.png';
import b10Img from '../assets/b10.png';

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
        title: 'Premplus Participates in REA-Adamawa State Roundtable to Advance Renewable Energy Initiatives',
        category: 'Innovation',
        author: 'Engr. Zaharadeen Usman',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus Nig. Ltd proudly participated in the REA State-by-State Roundtable with Adamawa State, held in Abuja. This strategic event, organized by the Rural Electrification Agency (REA), focused on enhancing renewable energy access and fostering economic growth through collaborative public-private partnerships.</strong></p>
            
            <p>Themed “Unlocking Private Sector Opportunities in Distributed Renewable Energy,” the roundtable brought together key stakeholders, including government officials, renewable energy service companies (RESCOs), private investors, and technical experts. During the event, discussions centered on expanding electricity access in rural areas, leveraging distributed energy solutions, and strengthening private sector involvement.</p>
            
            <p>One of the major highlights of the roundtable was the signing of a Memorandum of Understanding (MoU) between the Adamawa State Government and the REA. This partnership aims to accelerate renewable energy projects across the state, with projections indicating a potential $1.9 billion investment influx and the creation of approximately 40,000 jobs. The agreement represents a significant step toward sustainable energy development, with a focus on deploying solar PV systems and off-grid solutions in underserved communities.</p>
            
            <p>The Governor of Adamawa State, His Excellency Ahmadu Umaru Fintiri, expressed the state’s commitment to renewable energy initiatives, highlighting plans to train 1,000 citizens annually in solar photovoltaic (PV) installation and the development of a 300-megawatt solar PV farm. He noted that these initiatives are designed to not only boost energy access but also create job opportunities for local communities.</p>
            
            <p>As part of the event, Premplus Managing Director, Engr. Zaharadeen Usman, made a presentation on the progress of the Adamawa State Electricity Policy, which Premplus is developing as the policy consultant. His presentation highlighted key milestones, the vision for energy sustainability, and the strategic steps being taken to ensure reliable power supply across the state.</p>
            
            <p>Engr. Usman reaffirmed Premplus' dedication to working alongside government and private partners to drive impactful energy solutions in Adamawa. “This policy framework is a pathway to energy independence and sustainable development for the people of Adamawa State. We are committed to its successful implementation,” he stated during his address.</p>
            
            <p>Premplus remains committed to supporting initiatives that enhance energy access, economic empowerment, and sustainable development through innovative renewable energy solutions. Our involvement in the REA-Adamawa State Roundtable reflects our ongoing mission to lead in sustainable energy projects across Nigeria.</p>
        `,
        img: b3Img
    },
    {
        id: 4,
        title: 'Adamawa State Ministry of Works and Energy Development partners with Premplus for a three-day stakeholders’ workshop on electricity policy framework',
        category: 'Innovation',
        author: 'Engr. Zaharadeen Usman Ibrahim',
        date: 'February 08, 2026',
        content: `
            <p><strong>The Adamawa State Ministry of Works and Energy Development, in collaboration with Premplus Nig. Ltd, recently hosted a three-day workshop dedicated to formulating a Sustainable and Inclusive Electricity Policy Framework for the state. The event, held at Alheri Hotel, Yola, brought together key stakeholders from the energy and academic sectors to discuss strategies for achieving a more stable and efficient power supply in Adamawa.</strong></p>
            
            <p>The workshop featured technical representatives from Modibbo Adama University, Yola Electric Distribution Company (YEDC), Transmission Company of Nigeria (TCN), Adamawa State Polytechnic, and other institutions. These experts contributed insights into policy development, energy generation, and regulatory measures to ensure energy sufficiency within the state.</p>

            <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="${b41Img}" alt="Adamawa Workshop Stakeholders" class="w-full h-auto object-cover" />
            </div>
            
            <p>Speaking at the event, the Honourable Commissioner for Works and Energy Development, Hon. Adamu Atiku Abubakar, emphasized that this initiative is a critical step toward crafting a regulatory framework that will not only enhance energy security but also foster economic growth by attracting investments in the power sector. He urged the people of Adamawa to continue supporting policies aimed at improving infrastructure and services in the state.</p>

            <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="${b42Img}" alt="Adamawa Workshop Discussions" class="w-full h-auto object-cover" />
            </div>
            
            <p>The Permanent Secretary of Energy Development, Mr. Dogara Paul Musa, commended participants for their engagement, expressing confidence that their contributions would lead to actionable policies promoting energy efficiency and sustainability. Premplus Nig. Ltd played a pivotal role in the discussions, with Managing Director, Engr. Zaharadeen Usman Ibrahim, highlighting Adamawa’s untapped energy potential. He stressed the need to strategically harness these resources for effective energy generation, transmission, and distribution, ultimately benefiting communities across the state.</p>
            
            <p>Premplus Nig. Ltd played a pivotal role in the discussions, with Managing Director, Engr. Zaharadeen Usman Ibrahim, highlighting Adamawa’s untapped energy potential. He stressed the need to strategically harness these resources for effective energy generation, transmission, and distribution, ultimately benefiting communities across the state.</p>
        `,
        img: b4Img
    },
    {
        id: 5,
        title: 'Premplus CEO receives Award of Excellence',
        category: 'Consultation',
        author: 'NYAN Press',
        date: 'February 08, 2026',
        content: `
            <p><strong>Engr. Zaharadeen Usman, the esteemed CEO of Premplus, has been awarded the prestigious Award of Excellence by the National Youth Assembly of Nigeria, in recognition of his dedicated contributions to the advancement of youth, nation-building initiatives, and societal progress.</strong></p>
            
            <p>The Award of Excellence is an accolade presented by NYAN to individuals who have demonstrated outstanding dedication to the progress and empowerment of Nigerian youth. Engr. Usman's recognition underscores his unwavering commitment to fostering positive change and development within the nation.</p>
            
            <p>In response to receiving the award, Engr. Usman expressed his gratitude to NYAN and reaffirmed his commitment to advancing youth development initiatives. He emphasized that this recognition serves as a motivation to continue working towards a brighter future for Nigerian youth and the nation at large.</p>
            
            <p>Premplus congratulates Engr. Zaharadeen Usman on this well-deserved honor and remains steadfast in its mission to support endeavors that align with our core values of excellence, innovation, and community.</p>
        `,
        img: b5Img
    },
    {
        id: 6,
        title: 'Premplus CEO receives Distinguished Merit Award',
        category: 'Innovation',
        author: 'NANNS Press',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus is proud to announce that our CEO, Engr. Zaharadeen Usman, has been honored with the Distinguished Merit Award by the National Association of Northern Nigerian Students (NANNS). This prestigious accolade recognizes Engr. Usman as an "Epitome of Societal Development" for his significant contributions to national development, educational advancement, youth engagement, and service to humanity.</strong></p>
            
            <p>The Distinguished Merit Award is one of the honors bestowed by NANNS, aimed at acknowledging individuals who have made remarkable impacts in various sectors of society. Engr. Usman's recognition underscores his unwavering commitment to fostering positive change and development within Nigeria.</p>
            
            <p>This award reflects Engr. Usman's dedication to service and his belief in the power of education and youth engagement as catalysts for societal transformation. His efforts resonate with Premplus's mission to contribute meaningfully to the communities we serve.</p>
            
            <p>Engr. Usman expressed his gratitude to NANS for this recognition and reaffirmed his commitment to continuing efforts that promote national development and support for Nigerian students. He emphasized that this award serves as a motivation to further engage in initiatives that drive positive societal change.</p>
        `,
        img: b6Img
    },
    {
        id: 7,
        title: 'Premplus signs partnership deal with Aurora',
        category: 'Consultation',
        author: 'Corporate Communications',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus is excited to announce the signing of a Memorandum of Understanding (MoU) with Aurora, a leading solar energy company. This strategic partnership aims to leverage Aurora's high-quality solar products to enhance our renewable energy solutions.</strong></p>
            
            <p>Aurora has been at the forefront of solar innovation for over a decade, specializing in the development of advanced solar street lighting solutions. Their products are designed for easy installation, safety, and efficiency, reflecting their commitment to making solar energy accessible and affordable. A notable example is their Eiffel series, which utilizes LiFePO4 batteries known for their safety, cost-effectiveness, and long service life of 8-10 years.</p>
            
            <p>In addition to street lighting, Aurora offers a range of solar-powered products, including off-grid systems, LED solar landscape lights, and integrated lithium battery systems with inverters. Their comprehensive approach to solar energy solutions aligns seamlessly with Premplus's mission to provide reliable and efficient renewable energy options.</p>
            
            <p>Through this MoU, Premplus and Aurora will collaborate to integrate advanced solar technologies into our projects. This partnership is set to expand our service offerings, providing clients with cutting-edge solar solutions that are both sustainable and cost-effective. We are confident that this collaboration will significantly contribute to the advancement of renewable energy adoption.</p>
            
            <p>By combining Premplus's expertise in project implementation with Aurora's superior solar products, we aim to deliver exceptional value to our clients and promote a greener future. For more information about Aurora and their offerings, please visit their website: <a href="https://yufai-aurora.com" target="_blank" rel="noopener noreferrer" class="text-brand-green hover:underline">yufai-aurora.com</a>.</p>
            
            <p>Stay tuned for updates on our joint initiatives and projects stemming from this exciting partnership.</p>
        `,
        img: b7Img
    },
    {
        id: 8,
        title: 'Premplus at the REA Stakeholders Engagement Workshop (SEW2024)',
        category: 'Consultation',
        author: 'REA Communications',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus is pleased to share insights from our participation in the Stakeholders Engagement Workshop (SEW2024), held on December 18th and 19th, 2024, at the UBEC Digital Centre in Jahi, Abuja.</strong></p>
            
            <p>Organized by the Rural Electrification Agency (REA), SEW2024 convened key stakeholders in the renewable energy sector, including policymakers, developers, manufacturers, financiers, and productive-use energy users. Themed "Powering Partnerships for Sustainable Energy Access and Innovation," the workshop aimed to foster collaborations for advancing renewable energy initiatives in Nigeria.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">Key Highlights</h3>
            <ul class="list-disc pl-6 space-y-4">
                <li><strong>Launch of the DARES Project:</strong> The workshop marked the initiation of the Distributed Access through Renewable Energy Scale-Up (DARES) project under the Nigeria Electrification Project (NEP). This $750 million initiative seeks to utilize renewable solar energy to electrify rural areas.</li>
                <li><strong>Introduction of the e-H.E.A.R.T Project:</strong> The e-H.E.A.R.T Project was announced, aiming to promote access to reliable and sustainable electricity in rural communities by powering Primary Health Centers (PHCs) across all geopolitical zones.</li>
                <li><strong>Productive Use of Energy (PUE):</strong> Discussions centered on PUE initiatives, highlighting opportunities for economic growth through renewable energy-powered equipment and innovations.</li>
            </ul>
            
            <p class="mt-8">Our participation in SEW2024 underscores Premplus' dedication to contributing to Nigeria's renewable energy landscape. We are committed to leveraging the insights gained to drive sustainable energy solutions and foster partnerships that align with the nation's electrification goals.</p>
        `,
        img: b8Img
    },
    {
        id: 9,
        title: 'Premplus at the NERC Summit on Accelerated Scale-Up of Renewable and Distributed Energy Solutions',
        category: 'Innovation',
        author: 'Policy & Strategy Team',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus recently had the privilege of attending a landmark event organized by the Nigerian Electricity Regulatory Commission (NERC), focused on accelerating the adoption of renewable and distributed energy solutions in Nigeria. This two-day summit, held in Abuja on July 22-23, 2024, brought together a diverse group of stakeholders, including government officials, private sector developers, financial institutions, non-governmental organizations, and international partners to contribute to a greener future.</strong></p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">Driving Renewable Energy Adoption</h3>
            <p>The summit served as a crucial platform for discussing strategies to boost renewable energy usage across Nigeria. Prominent figures such as the Minister of Power, Chief Adebayo Adelabu, and NERC Chairman, Sanusi Garba, delivered keynote addresses that highlighted the significance of this initiative in reshaping Nigeria's energy landscape.</p>
            
            <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="${b91Img}" alt="NERC Summit Presentation" class="w-full h-auto object-cover" />
            </div>

            <p>A notable moment was the presentation by Abba Abubakar Aliyu, Managing Director of the Rural Electrification Agency (REA). He shared impressive achievements, such as electrifying over 7.8 million Nigerians and deploying over 1 million solar home systems through the World Bank-funded Nigeria Electrification Programme (NEP). Looking forward, Mr. Abba introduced the ambitious Nigeria Distributed Access through Renewable Energy Scale-Up (DARES) initiative, aiming to extend electricity access to 17 million more Nigerians with a USD 750 million project.</p>

            <h3 class="text-2xl font-bold mt-8 mb-4">Expanding Horizons and Collaboration</h3>
            <div class="my-8 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                <img src="${b92Img}" alt="NERC Summit Discussions" class="w-full h-auto object-cover" />
            </div>
            
            <p>Olufemi Akinyelure, Head of the Nigeria Electrification Project (NEP), emphasized the successes of NEP and the importance of collaboration among regulators, developers, and financiers to maximize the potential of off-grid solutions. He stressed the need for efficient governance to leverage additional financing and drive sector growth.</p>
            
            <p>NERC Deputy General Manager, Abba Terab, underscored the summit’s role in fostering collaboration among renewable energy companies and distribution companies. He reiterated NERC's commitment to refining regulations and ensuring a supportive environment for renewable energy projects.</p>
            
            <p class="mt-8">Premplus Ltd is honored to be part of this transformative journey and remains dedicated to driving innovation and sustainability in Nigeria's energy sector.</p>
        `,
        img: b9Img
    },
    {
        id: 10,
        title: 'Growing Green Job Career Fair',
        category: 'Innovation',
        author: 'Human Resources',
        date: 'February 08, 2026',
        content: `
            <p><strong>Premplus was proud to participate in the "Growing Green Job" Career Fair and Mini Clinics, a pivotal event dedicated to fostering talent and innovation within the renewable energy sector.</strong></p>
            
            <p>The program served as a dynamic platform for both aspiring professionals and established green energy organizations. Central to the event were the career fair sessions, which facilitated direct engagement between top-tier industry players and the next generation of sustainability leaders. These interactions provided invaluable insights into the diverse career pathways available in the rapidly evolving green economy.</p>
            
            <h3 class="text-2xl font-bold mt-8 mb-4">Empowering Talent through Mini Clinics</h3>
            <p>A highlight of the event was the series of "Mini Clinics" designed for green energy organizations. These focused sessions addressed critical areas such as technical skill development, professional mentorship, and the latest trends in renewable energy technologies. The clinics allowed participants to receive practical, expert-led guidance on navigating the unique challenges and opportunities of the green job market.</p>
            
            <p>Premplus's involvement underscores our commitment to not only deploying world-class energy infrastructure but also investing in the human capital that will drive the global transition to clean energy. We believe that by supporting platforms like the Growing Green Job Career Fair, we are helping to build a more resilient, knowledgeable, and passionate workforce dedicated to societal progress and environmental stewardship.</p>
            
            <p class="mt-8">We look forward to continuing our support for such initiatives and welcoming the innovative minds we met during the fair as they embark on their journeys to create a greener future.</p>
        `,
        img: b10Img
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
