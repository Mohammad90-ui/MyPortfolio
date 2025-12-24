import React, { useEffect } from 'react';
import Navbar from '../Navbar';
import Hero from '../Hero';
import About from '../About';
import Experience from '../Experience';
import Services from '../Services';
import Works from '../Works';
import Footer from '../Footer';
import CustomCursor from '../CustomCursor';
import Lenis from '@studio-freight/lenis';

const Home = () => {
    useEffect(() => {
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

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <div className="App bg-[#E7E7E7]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Services />
                <Works />
            </main>
            <Footer />
            <CustomCursor />
        </div>
    );
};

export default Home;
