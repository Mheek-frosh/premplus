import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
    return (
        <section className="bg-gray-50 py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Benefits</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">The Advantages of <br /> Partnering with <span className="text-brand-green">US</span></h2>
                    </div>
                    <p className="text-brand-gray lg:max-w-md text-lg italic border-l-4 border-brand-yellow pl-8 py-2">
                        "Tailored energy solutions that maximize efficiency and sustainability for your global operations."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" alt="Solar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white text-2xl font-bold mb-2">Sustainable Core</h3>
                            <p className="text-white/70 text-sm">Committed to reduction of carbon footprint globally.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl md:translate-y-12"
                    >
                        <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&q=80" alt="Industry" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white text-2xl font-bold mb-2">Global Impact</h3>
                            <p className="text-white/70 text-sm">Empowering industries across 4 continents.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img src="https://images.unsplash.com/photo-1548333341-3893da82ccf1?w=800&q=80" alt="Wind" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white text-2xl font-bold mb-2">Reliable Supply</h3>
                            <p className="text-white/70 text-sm">24/7 support and delivery infrastructure.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
