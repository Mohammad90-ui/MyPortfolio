import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const About = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    // Scroll Parallax Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yMove = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacityInput = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="about"
            ref={containerRef}
            className="relative w-full min-h-[130vh] bg-[#111111] text-white flex flex-col justify-center items-center px-4 md:px-12 py-32 rounded-t-[3rem] z-20 overflow-hidden"
        >
            {/* Background Parallax Effects */}
            <motion.div
                style={{ y: yMove, opacity: opacityInput }}
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            >
                <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[#CF9EFF] rounded-full filter blur-[150px] opacity-20 mix-blend-screen animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-black rounded-full filter blur-[150px] opacity-10 mix-blend-screen"></div>
            </motion.div>

            <div ref={contentRef} className="max-w-5xl mx-auto text-center flex flex-col items-center gap-12 relative z-10">

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-3xl md:text-5xl lg:text-4xl font-cabinet font-medium leading-tight tracking-tight"
                >
                    I'm Mohammad – a Software & Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.
                </motion.h2>

                {/* Sub Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-400 text-lg md:text-xl md:max-w-3xl leading-relaxed"
                >
                    I specialize in architecting scalable full-stack applications, AI-powered solutions, and immersive web experiences using technologies like <span className="text-white">Next.js</span>, <span className="text-white">Node.js</span>, and <span className="text-white">MERN</span>.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-4 mt-4"
                >
                    <Link to="/about-me" className="bg-[#CF9EFF] hover:bg-white transition-all duration-300  hover:scale-105 text-black px-8 py-4 rounded-full font-cabinet font-bold text-lg hover:scale-105 transition-transform duration-300 clickable inline-block">
                        About Me
                    </Link>

                    <Link to="/about-me" className="w-14 h-14 bg-[#CF9EFF] hover:bg-white transition-all duration-300 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform duration-300 clickable ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </motion.div>

            </div>

            {/* Bottom Indicators Matches the Image */}
            <div className="absolute bottom-16 md:bottom-24 left-0 w-full px-8 md:px-16 flex justify-between items-end text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                    <span>Scroll to Explore</span>
                </div>

                <div className="flex flex-col items-end gap-4">
                    {/* The circle indicator from the image */}
                    <div className="w-12 h-12 border border-gray-700 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>My Short Story</span>
                </div>
            </div>

        </section>
    );
};

export default About;
