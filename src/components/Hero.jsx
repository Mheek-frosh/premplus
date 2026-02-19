import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/s.jpeg';
import img2 from '../assets/2.png.jpg';
import img3 from '../assets/light.png';
import ChatWidget from './ChatWidget';

const slides = [
    {
        id: 1,
        tag: 'Solar Energy',
        title: 'Shaping the future through solar innovation',
        desc: 'Advanced solar solutions designed for maximum efficiency and sustainable growth.',
        img: img1,
        highlight: 'innovation'
    },
    {
        id: 2,
        tag: 'Engineering Services',
        title: 'Premium engineering and consultancy services',
        desc: 'Expert design and deployment of high-voltage power transmission and distribution networks.',
        img: img2,
        highlight: 'consultancy'
    },
    {
        id: 3,
        tag: 'Renewable Power',
        title: 'Sustainable energy for a resilient tomorrow',
        desc: 'Harnessing renewable technologies to meet the diverse energy requirements of modern businesses.',
        img: img3,
        highlight: 'resilient'
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('service-area');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLearnMore = () => {
        navigate('/services');
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-24 md:py-32">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${slides[current].img}")`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
                </motion.div>
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

            <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
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
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
                            {slides[current].title.split(slides[current].highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-brand-yellow">{slides[current].highlight}</span>}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className="text-base md:text-xl text-white/70 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed md:leading-loose px-4">
                            {slides[current].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pb-20 md:pb-32">
                    <button
                        onClick={scrollToNextSection}
                        className="btn-primary flex items-center gap-2 group"
                    >
                        Get Started
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <Play size={16} className="fill-current" />
                        </motion.span>
                    </button>
                    <button
                        onClick={handleLearnMore}
                        className="btn-secondary"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronLeft size={32} mdSize={48} strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronRight size={32} mdSize={48} strokeWidth={1} className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Dash Indicators */}
            <div className="absolute bottom-[160px] md:bottom-[180px] left-1/2 -translate-x-1/2 z-20 flex gap-3">
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
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20"
            >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 grid grid-cols-2 md:flex md:justify-center items-center gap-4 md:gap-12 lg:gap-20">
                    {[
                        { label: 'Founded', value: '2024' },
                        { label: 'Locations', value: '15' },
                        { label: 'Projects', value: '18' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
                            <p className="text-white text-lg md:text-2xl font-bold group-hover:text-brand-yellow transition-colors">{stat.value}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            <ChatWidget />
        </section>
    );
};

export default Hero;
