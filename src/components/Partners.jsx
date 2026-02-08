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
import p2Logo from '../assets/p2.png';
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
            </div>

            <div className="flex overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex flex-nowrap gap-20 items-center"
                    style={{ width: "fit-content" }}
                >
                    {[...logoAssets, ...logoAssets].map((logo, i) => (
                        <div key={i} className="flex-shrink-0 flex items-center justify-center w-56">
                            {logo === p1Logo ? (
                                <div className="relative h-16 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <img src={p1Logo} alt="Premplus Logo" className="h-16 w-auto object-contain dark:hidden" />
                                    <img src={p2Logo} alt="Premplus Logo" className="h-16 w-auto object-contain hidden dark:block" />
                                </div>
                            ) : (
                                <img
                                    src={logo}
                                    alt="Partner Logo"
                                    className="h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500"
                                />
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
