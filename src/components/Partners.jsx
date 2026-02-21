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
import reanNewLogo from '../assets/reannew.png';
import p1Logo from '../assets/p1.png';
import p2Logo from '../assets/p2.png';
import accessBank from '../assets/accessbank.png';
import signatureBank from '../assets/signbank.png';


const logoAssets = [
    zenithBank,
    signatureBank,
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
        <section className="py-28 md:py-36 bg-app-secondary overflow-hidden transition-colors duration-300 border-y border-app">
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
                    className="flex flex-nowrap gap-12 md:gap-24 items-center"
                    style={{ width: "fit-content" }}
                >
                    {[...logoAssets, ...logoAssets].map((logo, i) => {
                        // Big logos (don't touch): signatureBank, abiaLogo, midgardLogo, auroraLogo
                        const isBigLogo = logo === signatureBank || logo === abiaLogo || logo === midgardLogo || logo === auroraLogo;
                        const heightClass = isBigLogo ? "h-16 md:h-20" : "h-20 md:h-28";
                        const additionalScale = logo === signatureBank ? "scale-105" : "";
                        const containerWidth = isBigLogo ? "w-40 md:w-64" : "w-48 md:w-72";

                        return (
                            <div key={i} className={`flex-shrink-0 flex items-center justify-center ${containerWidth}`}>
                                <img
                                    src={logo}
                                    alt="Partner Logo"
                                    className={`${heightClass} ${additionalScale} w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-500`}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Partners;
