import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
];

const Partners = () => {
    return (
        <section className="py-16 bg-app-secondary overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <p className="text-app-muted text-xs font-bold uppercase tracking-[0.3em]">
                    Trusted by Industry Leaders
                </p>
            </div>

            <div className="flex overflow-hidden group">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex flex-nowrap gap-20 py-10"
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt="Partner Logo"
                            className="h-10 w-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
