import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../assets/s.webp';
import img2 from '../assets/2.png.webp';
import img3 from '../assets/light.webp';
import ChatWidget from './ChatWidget';

const slides = [
    {
        id: 1,
        tag: 'Solar Energy',
        title: 'Shaping the future through solar technology',
        desc: 'Advanced solar solutions designed for maximum efficiency and sustainable growth',
        img: img1,
        highlight: 'technology'
    },
    {
        id: 2,
        tag: 'Engineering Services',
        title: 'Premium engineering and consultancy services',
        desc: 'End-to-end engineering and consultancy services across the energy value chain',
        img: img2,
        highlight: 'consultancy'
    },
    {
        id: 3,
        tag: 'Renewable Power',
        title: 'Sustainable energy for a resilient tomorrow',
        desc: 'Harnessing renewable technologies for communities, institutions, and industries',
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
        <section className="relative h-[100dvh] min-h-[560px] flex flex-col overflow-hidden bg-black">
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
                className="absolute w-[420px] h-[420px] md:w-[800px] md:h-[800px] rounded-full border border-white/10 z-0"
            />

            <div className="relative z-10 text-center px-5 sm:px-8 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-3 sm:pb-4 min-h-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full"
                    >
                        <span className="inline-block px-4 py-1.5 mb-3 sm:mb-5 [@media(max-height:700px)]:mb-2 text-xs font-bold tracking-widest text-brand-yellow uppercase bg-brand-yellow/10 rounded-full border border-brand-yellow/20">
                            {slides[current].tag}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl [@media(max-height:700px)]:text-3xl [@media(max-height:700px)]:sm:text-4xl [@media(max-height:700px)]:md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 [@media(max-height:700px)]:mb-2 leading-[1.2] md:leading-[1.1]">
                            {slides[current].title.split(slides[current].highlight).map((part, i, arr) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-brand-yellow">{slides[current].highlight}</span>}
                                </React.Fragment>
                            ))}
                        </h1>
                        <p className={`text-white/70 mb-4 sm:mb-5 md:mb-6 [@media(max-height:700px)]:mb-3 mx-auto leading-normal ${slides[current].id === 2 ? 'whitespace-nowrap px-0 text-[clamp(0.5625rem,0.05rem+1.55vw,1.25rem)]' : 'whitespace-normal sm:whitespace-nowrap px-1 text-[clamp(0.8125rem,0.1rem+1.7vw,1.25rem)]'}`}>
                            {slides[current].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
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

            {/* Navigation Arrows — large screens only, kept clear of the bottom stats bar */}
            <button onClick={prevSlide} className="hidden xl:flex absolute left-4 2xl:left-8 top-[42%] -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronLeft strokeWidth={1} className="w-10 h-10 2xl:w-12 2xl:h-12" />
            </button>
            <button onClick={nextSlide} className="hidden xl:flex absolute right-4 2xl:right-8 top-[42%] -translate-y-1/2 z-20 text-white/50 hover:text-white transition-colors p-2">
                <ChevronRight strokeWidth={1} className="w-10 h-10 2xl:w-12 2xl:h-12" />
            </button>

            {/* Carousel + stats stay stacked in normal flow so they never overlap on any screen */}
            <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 sm:pt-2 pb-20 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 [@media(max-height:700px)]:gap-2.5 [@media(max-height:700px)]:pb-5 shrink-0">
                <div className="flex justify-center gap-2.5 sm:gap-3" aria-label="Carousel slides">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === current ? 'true' : undefined}
                            className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-10 sm:w-12 bg-brand-yellow' : 'w-5 sm:w-6 bg-white/30'}`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="w-full"
                >
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 grid grid-cols-3 items-center gap-2 sm:gap-8 md:gap-12 lg:gap-20">
                        {[
                            { label: 'Founded', value: '2024' },
                            { label: 'Locations', value: '19' },
                            { label: 'Projects', value: '38' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group min-w-0">
                                <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5 sm:mb-1">{stat.label}</p>
                                <p className="text-white text-base sm:text-xl md:text-2xl font-bold group-hover:text-brand-yellow transition-colors">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <ChatWidget />
        </section>
    );
};

export default Hero;
