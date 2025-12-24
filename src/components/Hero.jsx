import React from 'react';
import { motion } from 'framer-motion';
import portfolioBlob from '../assets/portfolio_blob.mp4';

const Hero = () => {
    // Text animations
    const letterAnim = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: i * 0.05
            }
        })
    };

    const containerAnim = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section id="home" className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center text-center px-4">

            {/* Background Blob Video - Enhanced Visibility */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <video
                    src={portfolioBlob}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[90vw] h-[90vw] md:w-[50vw] md:h-[50vw] object-cover rounded-full filter  opacity-100 mix-blend-multiply transition-all duration-1000 ease-in-out pointer-events-none"
                />
            </div>

            {/* Typography Layer */}
            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-8 w-full max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-3 font-cabinet font-medium text-base md:text-xl text-gray-800 mb-2"
                >
                    <span className="w-2 h-2 rounded-full bg-[#CF9EFF] animate-pulse"></span>
                    <span>Hi! I'm Mohammad Hasan</span>
                </motion.div>

                <div className="flex flex-col items-center leading-[0.85] tracking-tighter w-full">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={containerAnim}
                            className="text-[4vw] md:text-[6rem] font-cabinet font-Semibold text-black flex"
                        >
                            {Array.from("SOFTWARE").map((char, i) => (
                                <motion.span key={i} custom={i} variants={letterAnim} className="inline-block">
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mt-2 md:mt-0">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={containerAnim}
                            className="text-[8vw] md:text-[10rem] font-cabinet font-Semibold text-black flex"
                        >
                            {Array.from("DEVELOPER").map((char, i) => (
                                <motion.span key={i} custom={i + 10} variants={letterAnim} className="inline-block">
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-8 md:mt-12 text-gray-600 max-w-xs md:max-w-md font-medium text-sm md:text-base leading-relaxed"
                >
                    Crafting immersive digital experiences with code and creativity. <br className="hidden md:block" />
                    <span className="text-black font-bold">Based in Bengaluru, available globally.</span>
                </motion.p>

            </div>

            {/* Bottom Indicators - Responsive */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-16 md:bottom-24 w-full px-6 md:px-12 flex justify-between items-end text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500"
            >
                <div className="flex flex-col gap-2 clickable">
                    <span className="hidden md:block">Scroll to Explore</span>
                    <div className="w-5 h-8 border border-gray-400 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 bg-black rounded-full"
                        />
                    </div>
                </div>

                {/* <div className="text-right">
                    <span className="block text-black">Portfolio 2025</span>
                    <span>All Rights Reserved</span>
                </div> */}
            </motion.div>
        </section>
    );
};

export default Hero;
