import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Lightbulb } from 'lucide-react';

const benefitItems = [
    {
        title: 'Excellence and professionalism',
        desc: 'We uphold the highest standards of quality and professional ethics in every project we undertake.',
        icon: Award,
        color: 'bg-emerald-500/10 text-emerald-600'
    },
    {
        title: 'Integrity and result orientation',
        desc: 'Commitment to transparency and delivering measurable value for our partners and clients.',
        icon: Shield,
        color: 'bg-amber-500/10 text-amber-600'
    },
    {
        title: 'Innovation with purpose',
        desc: 'Driving meaningful change through creative solutions that address real-world energy challenges.',
        icon: Lightbulb,
        color: 'bg-blue-500/10 text-blue-600'
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-app-secondary relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Benefits</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-app-main">Why choose <span className="text-brand-green">Us</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefitItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-[40px] bg-app-card border border-app shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-app-main group-hover:text-brand-green transition-colors mb-4">{item.title}</h3>
                            <p className="text-app-muted leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
