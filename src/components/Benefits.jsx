import React from 'react';
import { motion } from 'framer-motion';
import mouLogo from '../assets/mou.png';

const benefitItems = [
    {
        title: 'Excellence and professionalism',
        img: mouLogo,
        desc: 'We uphold the highest standards of quality and professional ethics in every project we undertake.'
    },
    {
        title: 'Innovation with purpose',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        desc: 'Driving meaningful change through creative solutions that address real-world energy challenges.'
    },
    {
        title: 'Integrity and result orientation',
        img: 'https://images.unsplash.com/photo-1541888941257-e8bcad95d137?w=800&q=80',
        desc: 'Commitment to transparency and delivering measurable value for our partners and clients.'
    }
];

const Benefits = () => {
    return (
        <section className="bg-app-secondary py-10 overflow-hidden transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-6 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Benefits</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-app-main">The Advantages of <br /> Partnering with <span className="text-brand-green">US</span></h2>
                    </div>
                    <p className="text-app-muted lg:max-w-md text-lg italic border-l-4 border-brand-yellow pl-8 py-2">
                        "Tailored energy solutions that maximize efficiency and sustainability for your global operations."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
                    {benefitItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group bg-app-card rounded-3xl overflow-hidden border border-app shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col ${index === 0 ? 'lg:row-span-2 h-full' : 'h-full'
                                }`}
                        >
                            <div className={`relative overflow-hidden ${index === 0 ? 'h-40 md:h-56 lg:h-64' : 'h-20 md:h-24'
                                }`}>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
                            </div>
                            <div className="p-5 md:p-6 flex-1 flex flex-col justify-center">
                                <h3 className={`font-bold mb-2 group-hover:text-brand-green transition-colors leading-tight text-app-main ${index === 0 ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
                                    }`}>
                                    {item.title}
                                </h3>
                                <p className={`text-app-muted leading-relaxed ${index === 0 ? 'text-sm md:text-base' : 'text-[10px] md:text-xs'
                                    }`}>
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
