import React from 'react';
import { motion } from 'framer-motion';

// Import local logos
import zenithBank from '../assets/zenithbank.png';
import abiaLogo from '../assets/ABIA-WEB-WHITE-LOGO-1.png';
import arktikLogo from '../assets/Arktik Logo copy.png';
import brunelLogo from '../assets/Brunel-University-London.png';
import midgardLogo from '../assets/Midgard.png';
import adamawaLogo from '../assets/adamawalogo1.png';
import auroraLogo from '../assets/auroralogo.avif';
import beveLogo from '../assets/beve.jpg';
import rea2Logo from '../assets/rea-2.png';
import reanNewLogo from '../assets/rean-new-removebg.png';
import p1Logo from '../assets/p1.png';
import accessBank from '../assets/accessbank.png';


const logoAssets = [
    zenithBank,
    p1Logo,
    accessBank,
    abiaLogo,
    arktikLogo,
    brunelLogo,
    midgardLogo,
    adamawaLogo,
    auroraLogo,
    beveLogo,
    rea2Logo,
    reanNewLogo,
];

const Partners = () => {
    return (
        <section className="py-20 bg-app-secondary overflow-hidden transition-colors duration-300 border-y border-app">
            <div className="max-w-7xl mx-auto px-4 text-center mb-12">
                <p className="text-app-muted text-xs font-bold uppercase tracking-[0.4em] mb-2">
                    Our Clients & Partners
                </p>
                <h2 className="text-2xl font-bold text-app-main">Our Clients & Partners</h2>
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex flex-nowrap gap-16 items-center"
                    style={{ width: "fit-content" }}
                >
                    {[...logoAssets, ...logoAssets].map((logo, i) => (
                        <div key={i} className="flex-shrink-0 flex items-center justify-center w-40">
                            <img
                                src={logo}
                                alt="Partner Logo"
                                className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
