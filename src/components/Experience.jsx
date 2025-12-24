import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Marquee = () => {
    return (
        <div className="w-full py-12 md:py-24 overflow-hidden flex items-center bg-[#E7E7E7] rounded-t-[3rem]">
            <div className="relative w-full flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-20%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                    {[...Array(4)].map((_, i) => (
                        <h1 key={i} className="text-[12vw] leading-none font-cabinet font-bold uppercase text-black mr-12 opacity-90">
                            SOFTWARE & FULL STACK DEVELOPER.
                        </h1>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="relative w-full bg-[#E7E7E7] -mt-12 rounded-t-[3rem] z-30 pb-32 overflow-hidden">

            {/* Background Scroll Effect */}
            <motion.div style={{ y: bgY }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#CF9EFF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Marquee Section */}
            <Marquee />

            {/* Spacer */}
            <div className="h-20 md:h-32"></div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div ref={textRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

                    {/* Left Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h3 className="text-3xl md:text-4xl font-cabinet font-medium leading-[1.1] text-black">
                            Driving measurable growth and engagement through thoughtful design and engineering.
                        </h3>
                    </motion.div>

                    {/* Right Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="flex flex-col justify-between"
                    >
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            Every product I build starts with understanding real user needs and translating them into intuitive, high-performance experiences. From concept to deployment, I focus on <span className="text-black font-semibold">building reliable, scalable systems that improve usability, performance, and overall product quality.</span>
                        </p>
                    </motion.div>
                </div>

                <div className="w-full h-[1px] bg-gray-300 mb-16"></div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Checkout my Resume/CV</span>
                        <a href="https://drive.google.com/file/d/1P2-swNP6HsXg61ZsfuUSBKrSAqyRrop-/view?usp=sharing" className="inline-block mt-4 px-10 py-4 bg-black text-white rounded-full font-cabinet font-bold text-lg md:text-xl hover:bg-white hover:text-black border border-black transition-all duration-300 clickable">
                            View Resume
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Projects Completed</span>
                        <span className="text-6xl md:text-8xl font-cabinet font-bold text-black">5+</span>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Floating Circle */}
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute bottom-20 right-20 w-8 h-8 border border-black rounded-full hidden md:block"
            />
        </section>
    );
};
export default Experience;


