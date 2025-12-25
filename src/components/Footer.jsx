import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#121212] text-white pt-32 pb-12 px-4 md:px-16 relative z-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#CF9EFF] opacity-5 filter blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col justify-between min-h-[70vh]">

                {/* Big Typo */}
                <div className="flex flex-col justify-center flex-grow text-center md:text-left relative z-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-gray-400 text-lg md:text-xl mb-4 uppercase tracking-widest font-mono"
                    >
                        Have an idea?
                    </motion.p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadhasan707053@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block relative z-30">
                        <motion.h2
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[14vw] font-cabinet font-bold leading-[0.8] tracking-tighter cursor-pointer clickable bg-[linear-gradient(to_right,#CF9EFF_50%,#ffffff_50%)] bg-[length:200%_100%] bg-right hover:bg-left transition-[background-position] duration-700 text-transparent bg-clip-text"
                        >
                            LET'S TALK
                        </motion.h2>
                    </a>
                </div>

                {/* Bottom Info */}
                <div className="flex flex-col md:flex-row justify-between items-end mt-24 border-t border-gray-800 pt-12 relative z-20">
                    <div className="flex flex-col gap-2">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mohammadhasan707053@gmail.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg md:text-3xl font-bold hover:text-[#CF9EFF] transition-colors clickable">mohammadhasan707053@gmail.com</a>
                        {/* <p className="text-gray-500 md:text-lg">+91 7070530556</p> */}
                    </div>

                    <div className="flex gap-8 mt-12 md:mt-0 uppercase text-xs md:text-sm font-bold tracking-widest text-[#CF9EFF]">
                        {[
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammad0627' },
                            { name: 'Github', url: 'https://github.com/Mohammad90-ui' },
                            { name: 'Leetcode', url: 'https://leetcode.com/u/Mohammad_27/' },
                            { name: 'Resume', url: 'https://drive.google.com/file/d/1P2-swNP6HsXg61ZsfuUSBKrSAqyRrop-/view?usp=sharing' }
                        ].map((social) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors clickable underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-[#CF9EFF]">{social.name}</a>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-24 text-gray-700 text-xs uppercase tracking-widest flex justify-between">
                    <span>© 2025 Mohammad Portfolio</span>
                    <span className="hidden md:block">Designed & Built with Passion</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
