import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ================== DATA ================== */

const services = [
    {
        title: "Full Stack Development",
        desc: "Building scalable and high-performance web applications using Next.js, Node.js, MERN and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
        num: "01",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H9C10.1 11 11 10.1 11 9V5C11 3.9 10.1 3 9 3Z" stroke="currentColor" strokeWidth="2" />
                <path d="M21 3H17C15.9 3 15 3.9 15 5V9C15 10.1 15.9 11 17 11H21C22.1 11 23 10.1 23 9V5C23 3.9 22.1 3 21 3Z" stroke="currentColor" strokeWidth="2" />
                <path d="M21 13H17C15.9 13 15 13.9 15 15V19C15 20.1 15.9 21 17 21H21C22.1 21 23 20.1 23 19V15C23 13.9 22.1 13 21 13Z" stroke="currentColor" strokeWidth="2" />
                <path d="M9 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21H9C10.1 21 11 20.1 11 19V15C11 13.9 10.1 13 9 13Z" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: "Problem Solving",
        desc: "Solving complex problems using Java with a strong foundation in data structures and algorithms and OOPs, focusing on efficient logic, clean implementations, and performance-oriented solutions.",
        num: "02",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: "Backend Engineering & APIs",
        desc: "Developing secure and scalable backend systems with Node.js, Express, and MongoDB, including RESTful APIs, authentication, role-based access control, and real-time features.",
        num: "03",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 12V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H12" stroke="currentColor" strokeWidth="2" />
                <path d="M21 12H12" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
    {
        title: "Performance & System Optimization",
        desc: "Improving application reliability and performance through efficient database design, optimized APIs, secure authentication, and clean, maintainable architectural patterns.",
        num: "04",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M2 20L22 4" stroke="currentColor" strokeWidth="2" />
                <path d="M22 20L2 4" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
    },
];

/* ================== CARD ================== */

const ServiceCard = ({ service }) => (
    <div className="min-w-[100vw] md:min-w-[40vw] h-[60vh] md:h-[500px] flex flex-col justify-between p-8 md:p-12 bg-[#F3F3F3] border-r border-gray-300 relative group hover:bg-white hover:border-[#CF9EFF] transition-all duration-500 clickable">
        <div className="flex justify-between items-start">
            <div className="w-16 h-16 rounded-full bg-[#CF9EFF] flex items-center justify-center text-black group-hover:scale-110 transition">
                {service.icon}
            </div>
            <span className="text-2xl text-gray-400">{service.num}</span>
        </div>

        <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-[#CF9EFF] transition">
                {service.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                {service.desc}
            </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-[#CF9EFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </div>
);

/* ================== MAIN ================== */

const Services = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Horizontal move happens only in middle scroll phase
    const x = useTransform(scrollYProgress, [0.25, 0.75], ["0%", "-45%"]);

    return (
        <section
            ref={ref}
            id="services"
            className="relative min-h-screen md:h-[400vh] bg-[#FAFAFA] rounded-t-[3rem]"
        >
            {/* ===== HEADER (NORMAL SCROLL) ===== */}
            <div className="px-6 md:px-16 pt-32 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Transforming Ideas into exceptional digital <br />
                    experiences through{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-[#CF9EFF]">
                        skills and innovation
                    </span>
                </h2>
            </div>
            {/* ===== MOBILE / TABLET FALLBACK ===== */}
            <div className="md:hidden px-6 flex flex-col gap-6 mt-16">
            {services.map((service, i) => (
                <div
                key={i}
                className="h-auto flex flex-col gap-6 p-6 bg-[#F3F3F3] border border-gray-300 rounded-2xl clickable"
                >
                <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-full bg-[#CF9EFF] flex items-center justify-center text-black">
                    {service.icon}
                    </div>
                    <span className="text-xl text-gray-400">{service.num}</span>
                </div>

                <h3 className="text-2xl font-bold text-black">
                    {service.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                    {service.desc}
                </p>
                </div>
            ))}
            </div>

            {/* ===== STICKY HORIZONTAL SCROLL ===== */}
            <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden mt-32 pointer-events-none">
                <motion.div style={{ x }} className="flex pl-6 md:pl-16 pointer-events-auto">
                    {services.map((service, i) => (
                        <ServiceCard key={i} service={service} />
                    ))}
                </motion.div>

                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[600px] h-[600px] bg-gradient-to-r from-[#CF9EFF]/20 to-purple-500/10 blur-[120px] rounded-full" />
                </div>
                
            </div>
            <div className="md:hidden h-24"></div>
        </section>
    );
};

export default Services;
