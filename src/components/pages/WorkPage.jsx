import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        domain: "AI Assistant",
        title: "PrepInter",
        description: "An AI-powered mock interview platform built with modern web technologies, designed to simulate real interview scenarios and provide structured, context-aware feedback for technical preparation.",
        tech: ["React", "OpenAI API", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", // Placeholder
        link: "https://prepinter-ai.vercel.app/",
        repo: "https://github.com/Mohammad90-ui/Capstone_Project_PrepInter.git"
    },
    {
        domain: "AI Healthcare Assistant",
        title: "Pharma AI",
        description: "A pharma-focused AI chatbot that answers clinical trial queries using structured drug data and documented medical insights.",
        tech: ["Python", "FastAPI", "React", "AI", "FAISS", "Clinical Data"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200", // New Placeholder
        link: "#",
        repo: "https://github.com/Mohammad90-ui/Atrix_PharmaAI_chatbot.git"
    },
    {
        domain: "Web Platform",
        title: "Query Management",
        description: "A lightweight query management platform built to organize, track, and resolve user queries through a clean and structured interface.",
        tech: ["Next.js", "TypeScript", "App Router", "Component-Based UI", "Query Management", "Frontend Architecture"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        link: "https://query-management-jet.vercel.app/",
        repo: "https://github.com/Mohammad90-ui/QueryManagement.git"
    },
    {
        domain: "E-commerce",
        title: "Trendify",
        description: "A full-stack e-commerce platform with secure authentication, product management, shopping cart, and Stripe-based payment processing.",
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT Authentication", "Stripe Payments", "Redux Toolkit", "REST APIs"],
        image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1200&auto=format&fit=crop",
        link: "https://trendify-ecom-bv.vercel.app/",
        repo: "https://github.com/Mohammad90-ui/Trendify-Ecommerce.git"
    },
    {
        domain: "AI Assistant",
        title: "AgroHelp",
        description: "A multilingual AI-powered advisory platform that provides farmers with real-time, context-aware guidance for crops, weather, and plant health.",
        tech: ["React", "Tailwind CSS", "Python", "FastAPI", "AI Assistant", "Computer Vision", "Multilingual Support", "Weather APIs"],
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        repo: "https://github.com/Mohammad90-ui/AgroHelp.git"
    },
    {
        domain: "Movie Discovery Platform",
        title: "MovieApp",
        description: "A modern movie discovery web app that allows users to search films, view trending titles, and explore detailed movie information.",
        tech: ["React", "Vite", "Tailwind CSS", "TMDB API", "Appwrite", "Debounced Search", "Responsive UI"],
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
        link: "#",
        repo: "https://github.com/Mohammad90-ui/MovieReactApp.git"
    }
];

const WorkPage = () => {
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

            <div className="flex-grow flex flex-col px-6 md:px-16 pt-32 pb-24">
                <div className="max-w-7xl mx-auto w-full">

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <h1 className="text-[10vw] md:text-[6rem] font-cabinet leading-none mb-8 text-black tracking-tighter">
                            My Works
                        </h1>
                        <div className="max-w-2xl">
                            <p className="text-xl md:text-lg text-gray-700 font-satoshi leading-relaxed font-normal">
                                A selection of projects that reflect my journey of learning through building real-world digital experiences. From designing complex backend systems to crafting immersive front-end interfaces, each project represents a hands-on challenge that strengthened my problem-solving skills and deepened my understanding of modern web development.
                            </p>
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex flex-col gap-6 group"
                            >
                                {/* Domain Label */}
                                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                                    <span className="font-cabinet text-xl text-gray-500 group-hover:text-black transition-colors duration-300">
                                        {project.domain}
                                    </span>
                                    <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#CF9EFF] transition-colors duration-300" />
                                </div>

                                {/* Card Container */}
                                <div className="flex flex-col gap-6">
                                    {/* Image Placeholder */}
                                    <div
                                        className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm group-hover:shadow-xl transition-all duration-500"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />

                                        {/* Overlay Button on Hover (Desktop) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white font-cabinet font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                View Project
                                            </a>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-3xl font-cabinet font-bold text-black group-hover:text-[#CF9EFF] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 font-satoshi text-base leading-relaxed line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Tags */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-500 uppercase tracking-wide">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-[#CF9EFF] hover:text-black transition-all duration-300 group/btn"
                                            >
                                                View Live
                                                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </a>
                                            <a
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                                            >
                                                <Github size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WorkPage;
