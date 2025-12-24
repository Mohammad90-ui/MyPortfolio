import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

const Marquee = () => {
    return (
        <div className="w-full py-12 md:py-24 overflow-hidden flex items-center bg-[#E7E7E7] border-t border-gray-300">
            <div className="relative w-full flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-20%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                    {[...Array(4)].map((_, i) => (
                        <h1 key={i} className="text-[10vw] leading-none font-cabinet font-bold uppercase text-black mr-12 opacity-90">
                            SOFTWARE & FULL STACK DEVELOPER.
                        </h1>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

const AboutPage = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Smooth Darkening Effect matching Works.jsx
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const yMove = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacityInput = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        // Immediate simple scroll to top when component mounts
        window.scrollTo(0, 0);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Ensure Lenis starts at top
        lenis.scrollTo(0, { immediate: true });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <div className="bg-[#E7E7E7] min-h-screen flex flex-col justify-between">
            <Navbar />

            <div className="flex-grow flex flex-col justify-center px-6 md:px-16 pt-32 pb-12">
                <div className="max-w-7xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Huge Heading */}
                        <h1 className="text-[10vw] md:text-[6rem] font-cabinet leading-none mb-12 text-black tracking-tighter">
                            About Me
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Empty Left Col for spacing/layout similar to image */}
                            {/* <div className="hidden lg:block lg:col-span-4"></div> */}

                            {/* Text Content */}
                            <div className="lg:col-span-10">
                                <p className="text-xl md:text-lg text-gray-700 font-satoshi leading-relaxed font-normal">
                                    I’m a full-stack developer who enjoys building products that solve real user problems through clean design and reliable engineering. My work spans full-stack web development, AI-driven features, and interactive user experiences, where I focus on turning ideas into functional, polished products. From designing responsive React interfaces to building secure and scalable backend systems, I enjoy working across the entire development lifecycle. In past projects, I’ve optimized application performance, reduced response times, and automated repetitive workflows to improve overall efficiency. I’m driven by writing clean, maintainable code and creating fast, scalable systems that users genuinely enjoy interacting with.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Marquee />

            <section className="bg-[#E7E7E7] px-6 md:px-16 py-24 text-black pb-48"> {/* Added extra padding bottom to ensure scroll room */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Column 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
                            <span className="text-sm font-mono text-gray-500">01</span>
                            <h3 className="text-2xl font-cabinet font-bold">Full-Stack Architecture</h3>
                        </div>
                        <p className="text-gray-600 font-satoshi leading-relaxed font-normal text-base">
                            I build end-to-end web applications using modern full-stack technologies, working across React and Next.js frontends with reliable Node.js backend systems. From designing responsive user interfaces to developing secure RESTful APIs and database-driven features, I focus on creating scalable, maintainable architectures that support smooth development and deployment.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
                            <span className="text-sm font-mono text-gray-500">02</span>
                            <h3 className="text-2xl font-cabinet font-bold">AI & Integration</h3>
                        </div>
                        <p className="text-gray-600 font-satoshi leading-relaxed font-normal text-base">
                            I work on integrating AI-driven features into web applications, focusing on practical use cases such as intelligent workflows, data-driven responses, and automation. By combining backend logic with API-based AI services, I aim to build systems that enhance functionality while remaining reliable, efficient, and easy to maintain.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4 border-t border-gray-300 pt-6">
                            <span className="text-sm font-mono text-gray-500">03</span>
                            <h3 className="text-2xl font-cabinet font-bold">Interactive Experiences</h3>
                        </div>
                        <p className="text-gray-600 font-satoshi leading-relaxed font-normal text-base">
                            I create interactive and visually engaging web experiences that enhance user interaction and presentation. By combining modern frontend frameworks with animations and interactive elements, I focus on building smooth, responsive interfaces that feel intuitive and enjoyable across devices.                        </p>
                    </div>
                </div>

                <div className="mt-32 mb-16 flex flex-col items-center">
                    {/* Spacer */}
                </div>
            </section>

            {/* Dark Background Section with Technology Arsenal - Works Style Transition */}
            <section
                ref={containerRef}
                className="relative w-full min-h-screen bg-[#E7E7E7] text-white flex flex-col items-center px-4 md:px-12 py-32 rounded-t-[3rem] -mt-60 z-20 overflow-hidden"
            >
                {/* Dark Overlay for Smooth Transition */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 w-full h-full bg-[#111111] pointer-events-none -z-10"
                />

                {/* Background Parallax Effects (visible when dark) */}
                <motion.div
                    style={{ y: yMove, opacity: overlayOpacity }} // Sync opacity with overlay
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                >
                    <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[#CF9EFF] rounded-full filter blur-[150px] opacity-20 mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-[10%] right-[-10%] w-[35vw] h-[35vw] bg-black rounded-full filter blur-[150px] opacity-10 mix-blend-screen"></div>
                </motion.div>

                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

                    <div className="mb-24 text-center mt-24">
                        <h2 className="text-5xl md:text-7xl font-cabinet font-medium tracking-tight mb-6 relative">Technology Arsenal</h2>
                        <p className="text-gray-400 font-satoshi text-lg md:text-xl max-w-2xl mx-auto">
                            A comprehensive toolkit for building modern, scalable applications
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            {
                                title: "Languages & Frameworks",
                                skills: ["Java", "Python", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3"]
                            },
                            {
                                title: "AI-Powered Features & Integrations",
                                skills: ["OpenAI API", "Prompt Engineering", "AI Workflow Integration", "Generative AI", "Data-Driven Responses"]
                            },
                            {
                                title: "Interactive UI & Motion Experiences",
                                skills: ["Framer Motion", "Interactive Animations", "Motion-Based UI", "Interactive UI", "GSAP", "Responsive Interactions"]
                            },
                            {
                                title: "Databases & State",
                                skills: ["MySQL", "MongoDB", "MongoDB Atlas", "Mongoose", "React Query", "Redux Toolkit"]
                            },
                            {
                                title: "Deployment & Cloud Tools",
                                skills: ["Git", "GitHub", "Render", "Netlify", "Docker", "CI/CD", "AWS", "Vercel"]
                            },
                            {
                                title: "UI & Styling",
                                skills: ["Tailwind CSS", "Figma", "Component-Based UI", "Framer Motion"]
                            }
                        ].map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col gap-6"
                            >
                                <h3 className="text-xl font-cabinet font-bold text-white">{category.title}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-gray-200 border border-white/10 hover:bg-white/20 hover:border-[#CF9EFF] transition-all duration-300 clickable"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center pointer-events-auto">
                        <h2 className="text-3xl font-cabinet text-gray-500 hover:text-white transition-colors duration-300 clickable">Let's build something amazing together.</h2>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutPage;
