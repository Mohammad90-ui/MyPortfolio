import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutPage from './components/pages/AboutPage';
import WorkPage from './components/pages/WorkPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutPage />} />
                <Route path="/my-works" element={<WorkPage />} />
            </Routes>
        </Router>
    );
}

export default App;
