import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
    { title: "PrepInter", category: "AI Application", year: "2024", description: "An AI-powered platform for mock interviews, real-time sessions, and interview preparation.", img: "https://images.unsplash.com/photo-1629904853716-f004c63841e6?q=80&w=1000&auto=format&fit=crop" },
    { title: "PharmaAI", category: "AI Healthcare Assistant", year: "2025", description: "An AI-based system that answers drug, dosage, and severity-related queries using structured medical data.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop" },
    { title: "Query Management", category: "Management Platform", year: "2025", description: "A centralized platform for managing, tracking, and resolving user queries across multiple channels.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
    { title: "Trendify", category: "E-Commerce", year: "2025", description: "A modern e-commerce platform with secure authentication, product management, and online payments.", img: "https://images.unsplash.com/photo-1629904853716-f004c63841e6?q=80&w=1000&auto=format&fit=crop" },
];

const ProjectItem = ({ project, index, setHoveredProject }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`flex flex-col ${isEven ? 'items-end text-right md:pr-24' : 'items-start text-left md:pl-24'}  w-full mb-64 clickable relative group`}
        >
            {/* Mobile: Always Center text, Desktop: Alternating */}
            <div className={`w-full md:w-2/3 flex flex-col ${isEven ? 'items-end' : 'items-start'}`}>
                <span className="text-sm font-mono text-[#CF9EFF] mb-2">0{index + 1}</span>
                <h3 className="text-4xl md:text-6xl font-cabinet font-bold  text-white group-hover:italic transition-all duration-300 group-hover:text-[#CF9EFF]">
                    {project.title}
                </h3>
                <span className="text-lg md:text-xl text-gray-400 mt-2 font-light">{project.category}</span>
                <p className="text-gray-500 mt-4 leading-relaxed max-w-sm">{project.description}</p>
                <span className="text-xs text-gray-700 mt-6 block border border-gray-800 px-3 py-1 rounded-full">{project.year}</span>
            </div>

            {/* Center Dot Indicator */}
            <div className={`absolute top-0 w-4 h-4 rounded-full border border-white/20 bg-[#111111] z-20 hidden md:block
                ${isEven ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'}
            `}>
                <div className="w-full h-full rounded-full bg-[#CF9EFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#CF9EFF]"></div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const overlayOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]); // Fast fade in

    // Timeline height growth
    const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <section id="works" ref={sectionRef} className="bg-[#FAFAFA] py-32 px-4 md:px-0 relative z-40 md:-mt-60 overflow-hidden min-h-[200vh]" onMouseMove={handleMouseMove}>

            {/* Dark Overlay Transition */}
            <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute inset-0 bg-[#111111] w-full h-full -z-10 pointer-events-none"
            />

            {/* Background Glow */}
            <motion.div
                style={{ opacity: overlayOpacity }}
                className="absolute top-0 right-0 w-[600px] h-[900px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10"
            />

            <div className="max-w-7xl mx-auto relative z-10 px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-8 gap-4"
                >
                    <h2 className="text-5xl md:text-7xl mt-24 font-cabinet font tracking-tighter text-white">
                        Explore my<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CF9EFF] to-white"> Works </span>
                    </h2>
                    <div className="hidden md:block text-right">
                        <span className="text-sm font-mono text-gray-400 bg-white/5 px-4 py-2 rounded-full shadow-sm backdrop-blur-md border border-white/10">(0{projects.length})</span>
                    </div>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative w-full flex justify-center">

                    {/* Fixed Base Line */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>

                    {/* Scroll Progress Line (Neon) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute top-0 w-[2px] bg-gradient-to-b from-[#CF9EFF] to-purple-900 shadow-[0_0_15px_#CF9EFF] hidden md:block origin-top"
                    ></motion.div>

                    {/* Projects Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 relative">
                        {projects.map((project, index) => (
                            // Add Spacer div for alternating grid layout
                            <React.Fragment key={index}>
                                {index % 2 !== 0 && <div className="hidden md:block"></div>} {/* Left Spacer for odd items */}
                                <ProjectItem
                                    project={project}
                                    index={index}
                                    setHoveredProject={setHoveredProject}
                                />
                                {index % 2 === 0 && <div className="hidden md:block"></div>} {/* Right Spacer for even items */}
                            </React.Fragment>
                        ))}
                    </div>

                </div>

                <div className="mt-24 text-center">
                    <div className="mt-24 text-center">
                        <Link to="/my-works" className="inline-flex items-center gap-2 px-12 py-5 bg-white text-black rounded-full font-bold uppercase text-sm hover:bg-[#CF9EFF] hover:text-black transition-all duration-300 clickable hover:scale-105">
                            View All Projects
                            <span>↗</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Works;
