import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building2, HardHat } from 'lucide-react';

const benefitItems = [
    {
        title: 'Renewable Energy Design and Deployment',
        icon: <Zap className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
        desc: 'Providing end-to-end solar, wind, and hybrid energy solutions tailored to industrial and commercial needs.'
    },
    {
        title: 'Sustainable Building Design',
        icon: <Building2 className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
        desc: 'Integrating green architecture and energy-efficient systems into modern infrastructure.'
    },
    {
        title: 'Engineering, Procurement and Construction',
        icon: <HardHat className="w-8 h-8 text-brand-green" />,
        img: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=800&q=80',
        desc: 'Delivering comprehensive EPC services for large-scale energy and infrastructure projects.'
    }
];

const Benefits = () => {
    return (
        <section className="bg-app-secondary py-24 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Benefits</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-app-main">The Advantages of <br /> Partnering with <span className="text-brand-green">US</span></h2>
                    </div>
                    <p className="text-app-muted lg:max-w-md text-lg italic border-l-4 border-brand-yellow pl-8 py-2">
                        "Tailored energy solutions that maximize efficiency and sustainability for your global operations."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefitItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-app-card rounded-3xl overflow-hidden border border-app shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/10 transition-colors" />
                                <div className="absolute bottom-4 left-4 p-3 bg-app-main/90 backdrop-blur rounded-2xl shadow-lg">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors leading-tight text-app-main">
                                    {item.title}
                                </h3>
                                <p className="text-app-muted text-sm leading-relaxed">
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
