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
                    className="flex flex-nowrap gap-12 md:gap-24 items-center"
                    style={{ width: "fit-content" }}
                >
                    {[...logoAssets, ...logoAssets].map((logo, i) => {
                        // Selective resizing for smaller-looking logos
                        let heightClass = "h-12 md:h-16";
                        let additionalScale = "";
                        let containerWidth = "w-40 md:w-64";

                        if (logo === signatureBank) {
                            heightClass = "h-16 md:h-20";
                            additionalScale = "scale-105";
                        } else if (logo === abiaLogo || logo === midgardLogo || logo === auroraLogo) {
                            heightClass = "h-16 md:h-20";
                        }

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
