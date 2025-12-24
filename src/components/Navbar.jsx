import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navItems = ['Home', 'About', 'Services', 'Works', 'Contact'];

    const getLink = (item) => {
        const sectionId = item.toLowerCase();
        if (item === 'Contact') return '#contact'; // Assuming contact might not be a section yet, or is footer. Adjust if needed. sticking to pattern.
        // Actually usually Contact is a section or footer. I'll stick to section logic.
        return isHome ? `#${sectionId}` : `/#${sectionId}`;
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-[999999] transition-all duration-300">
                <a href="/" className="text-2xl font-cabinet font-bold tracking-tight text-white mix-blend-difference clickable z-[101]">
                    MOHAMMAD<span className="text-[#CF9EFF]">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/20 shadow-lg">
                    {navItems.slice(0, 4).map((item) => (
                        <a
                            key={item}
                            href={getLink(item)}
                            className="px-6 py-2 rounded-full text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300 clickable"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadhasan707053@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="hidden md:block px-6 py-3 bg-[#CF9EFF] text-black rounded-full text-sm font-bold hover:bg-white transition-colors duration-300 clickable shadow-[0_0_20px_rgba(207,158,255,0.4)]"
                    >
                        Let's Talk
                    </a>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative z-[101] w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full clickable border border-white/20"
                    >
                        <div className="flex flex-col gap-1.5 items-center">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-6 h-0.5 bg-white"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                className="w-6 h-0.5 bg-white origin-center"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-[#121212] z-[9999] flex flex-col justify-center items-center text-white pointer-events-auto"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    href={getLink(item)}
                                    onClick={() => setIsOpen(false)}
                                    className="text-6xl font-cabinet font-bold uppercase tracking-tight hover:text-[#CF9EFF] transition-colors clickable"
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-12 flex flex-col items-center gap-4 text-sm text-gray-500 uppercase tracking-widest"
                        >
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadhasan707053@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors clickable">mohammadhasan707053@gmail.com</a>
                            <div className="flex gap-6">

                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
