import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ServiceSection from './components/ServiceSection';
import Benefits from './components/Benefits';
import VideoSection from './components/VideoSection';
import Blog from './components/Blog';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

import officeImg from './assets/office.png';
import img1 from './assets/1.jpeg';
import manladderImg from './assets/manladder.png';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import solarImg from './assets/solar.png';
import adamImg from './assets/adam.jpeg';
import cap1Img from './assets/cap1.jpeg';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Partners />

    {/* Intro Section - What We Do */}
    <section id="about-intro" className="section-container bg-app-main transition-colors duration-300">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl -z-10 animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <img src={img1} className="rounded-3xl h-64 w-full object-cover shadow-2xl border-4 border-app-card" />
              <img src={manladderImg} className="rounded-3xl h-48 w-full object-cover shadow-lg" />
            </div>
            <div className="space-y-4">
              <img src={img2} className="rounded-3xl h-48 w-full object-cover shadow-lg" />
              <img src={img3} className="rounded-3xl h-64 w-full object-cover shadow-2xl border-4 border-app-card" />
            </div>
          </div>
        </div>

        <div className="lg:pl-8">
          <span className="text-brand-green font-bold text-sm uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-8 leading-tight text-app-main">Empowering Energy Solutions</h2>
          <p className="text-app-muted text-lg mb-10 leading-relaxed italic">
            Leading the global transition to clean, efficient, and reliable energy through innovative technology and strategic expertise.
          </p>
          <div className="space-y-6 mb-12">
            {[
              'Innovative energy distribution technologies',
              'Sustainable petroleum product harvesting',
              'Renewable energy integration strategies'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="font-semibold text-app-main">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/about">
            <button className="bg-brand-green text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-brand-green/20 hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>
      </div>
    </section>

    <Benefits />
    <ServiceSection />

    {/* Completed Projects */}
    <section className="py-24 bg-app-main transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold text-sm uppercase tracking-widest">Project</span>
          <h2 className="text-5xl font-bold mt-4 text-app-main">Completed Project</h2>
          <p className="text-app-muted max-w-2xl mx-auto mt-6">
            Watch our story in action - various projects that we have successfully delivered with excellence and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="h-96 rounded-[40px] overflow-hidden shadow-2xl relative group"
          >
            <img src={solarImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-white font-bold text-xl">120KWp Hybrid Solar Mini Grid Installation in Abia State</p>
            </div>
          </motion.div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="h-96 rounded-[40px] overflow-hidden shadow-2xl relative group"
            >
              <img src={adamImg} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold lg:text-lg">Adamawa State Electricity Policy</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="h-96 rounded-[40px] overflow-hidden shadow-2xl relative group"
            >
              <img src={cap1Img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold lg:text-lg">Capacity Development in Abia State</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <VideoSection />
    <Blog />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
