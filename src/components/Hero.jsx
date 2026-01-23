import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        tag: 'Sustainable Energy',
        title: 'Fueling industries empowering sustainable solutions',
        desc: 'Leading the global transition to clean, efficient, and reliable energy through innovative technology.',
        img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        highlight: 'sustainable'
    },
    {
        id: 2,
        tag: 'Renewable Power',
        title: 'Harnessing the wind to power a cleaner world',
        desc: 'Our terrestrial and offshore wind solutions provide consistent, clean energy for local and national grids.',
        img: 'https://images.unsplash.com/photo-1466611653911-954ff21caaf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Tall white windmill
        highlight: 'cleaner'
    },
    {
        id: 3,
        tag: 'Energy Infrastructure',
        title: 'Advanced petroleum solutions for global demand',
        desc: 'Secure, efficient, and innovative offshore gasoline and oil extraction and distribution network.',
        img: 'https://images.unsplash.com/photo-1538474705339-e85de812795c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', // Offshore Gasoline/Oil
        highlight: 'advanced'
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.4]"
                    style={{ backgroundImage: `url("${slides[current].img}")` }}
                />
            </AnimatePresence>

            {/* Animated Overlay Circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[800px] h-[800px] rounded-full border border-white/10 z-0"
            />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-brand-yellow uppercase bg-brand-yellow/10 rounded-full border border-brand-yellow/20">
                            {slides[current].tag}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1]">
                            {slides[current].title.split(slides[current].highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-brand-yellow">{slides[current].highlight}</span>}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-loose">
                            {slides[current].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="btn-primary flex items-center gap-2 group">
                        Get Started
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Play size={16} className="fill-current" />
                        </motion.span>
                    </button>
                    <button className="btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Dash Indicators */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-brand-yellow' : 'w-6 bg-white/30'}`}
                    />
                ))}
            </div>

            {/* Stats bar floating at bottom */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 hidden lg:block"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 flex justify-around items-center">
                    {[
                        { label: 'Founded', value: '2015' },
                        { label: 'Countries', value: '12+' },
                        { label: 'Projects', value: '500+' },
                        { label: 'Success Rate', value: '99%' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-white text-2xl font-bold group-hover:text-brand-yellow transition-colors">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
