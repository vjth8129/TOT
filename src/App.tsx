import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { ClientSection } from './components/ClientSection';
import { HomeServices } from './components/HomeServices';
import { HomeProjects } from './components/HomeProjects';
import { HomeAbout } from './components/HomeAbout';
import { HomeTestimonials } from './components/HomeTestimonials';
import { Services } from './components/Services';

import { Footer } from './components/Footer';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import logoImage from 'figma:asset/9f22a0a46b8a8587bb9608b3f8da0f38773c1458.png';

type Page = 'home' | 'services' | 'about' | 'projects';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Set document title
    document.title = 'TOG Pictures - Media Production & Digital Agency';
    
    // Set favicon
    const setFavicon = () => {
      // Remove existing favicons
      const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
      existingFavicons.forEach(favicon => favicon.remove());
      
      // Create new favicon link
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.href = logoImage;
      document.head.appendChild(link);
      
      // Also set apple-touch-icon for iOS devices
      const appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      appleTouchIcon.href = logoImage;
      document.head.appendChild(appleTouchIcon);
    };
    
    setFavicon();
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const navigateToServices = () => {
    setCurrentPage('services');
    window.scrollTo(0, 0);
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo(0, 0);
  };

  const navigateToProjects = () => {
    setCurrentPage('projects');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'services') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation 
          currentPage={currentPage} 
          onNavigateToHome={navigateToHome} 
          onNavigateToServices={navigateToServices}
          onNavigateToAbout={navigateToAbout}
          onNavigateToProjects={navigateToProjects}
        />
        <ServicesPage onBack={navigateToHome} />
        <Footer currentPage={currentPage} onNavigateToHome={navigateToHome} onNavigateToServices={navigateToServices} onNavigateToAbout={navigateToAbout} onNavigateToProjects={navigateToProjects} />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation 
          currentPage={currentPage} 
          onNavigateToHome={navigateToHome} 
          onNavigateToServices={navigateToServices}
          onNavigateToAbout={navigateToAbout}
          onNavigateToProjects={navigateToProjects}
        />
        <AboutPage onBack={navigateToHome} />
        <Footer currentPage={currentPage} onNavigateToHome={navigateToHome} onNavigateToServices={navigateToServices} onNavigateToAbout={navigateToAbout} onNavigateToProjects={navigateToProjects} />
      </div>
    );
  }

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        <Navigation 
          currentPage={currentPage} 
          onNavigateToHome={navigateToHome} 
          onNavigateToServices={navigateToServices}
          onNavigateToAbout={navigateToAbout}
          onNavigateToProjects={navigateToProjects}
        />
        <ProjectsPage onBack={navigateToHome} />
        <Footer currentPage={currentPage} onNavigateToHome={navigateToHome} onNavigateToServices={navigateToServices} onNavigateToAbout={navigateToAbout} onNavigateToProjects={navigateToProjects} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation 
        currentPage={currentPage} 
        onNavigateToHome={navigateToHome}
        onNavigateToServices={navigateToServices} 
        onNavigateToAbout={navigateToAbout} 
        onNavigateToProjects={navigateToProjects}
      />
      
      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="relative">
          <Hero />
        </section>

        {/* Showreel Section */}
        <section className="relative">
          <Showreel />
        </section>

        {/* Client Section */}
        <section className="relative">
          <ClientSection />
        </section>

        {/* Home Services Section */}
        <section className="relative">
          <HomeServices onNavigateToServices={navigateToServices} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative">
          <HomeProjects onNavigateToProjects={navigateToProjects} />
        </section>

        {/* About Section */}
        <section id="about" className="relative">
          <HomeAbout onNavigateToAbout={navigateToAbout} />
        </section>

        {/* Testimonials Section */}
        <section className="relative">
          <HomeTestimonials />
        </section>
      </main>

      {/* Footer */}
      <Footer currentPage={currentPage} onNavigateToHome={navigateToHome} onNavigateToServices={navigateToServices} onNavigateToAbout={navigateToAbout} onNavigateToProjects={navigateToProjects} />
    </div>
  );
}