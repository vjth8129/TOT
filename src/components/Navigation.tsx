import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/9f22a0a46b8a8587bb9608b3f8da0f38773c1458.png';

interface NavigationProps {
  currentPage?: 'home' | 'services' | 'about' | 'projects';
  onNavigateToHome?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToProjects?: () => void;
}

export function Navigation({ currentPage = 'home', onNavigateToHome, onNavigateToServices, onNavigateToAbout, onNavigateToProjects }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      // If not on home page, navigate to home first
      onNavigateToHome?.();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = () => {
    onNavigateToServices?.();
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    onNavigateToAbout?.();
    setIsMobileMenuOpen(false);
  };

  const handleProjectsClick = () => {
    onNavigateToProjects?.();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => currentPage === 'home' ? scrollToSection('home') : onNavigateToHome?.()}
              className="flex items-center gap-3 group transition-all duration-300"
            >
              <img 
                src={logoImage} 
                alt="TOT Logo" 
                className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
              />
              <span className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                TOT
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects', isProjectsPage: true },
                { name: 'About', id: 'about', isAboutPage: true },
                { name: 'Services', id: 'services', isServicesPage: true },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.isServicesPage) {
                      handleServicesClick();
                    } else if (item.isAboutPage) {
                      handleAboutClick();
                    } else if (item.isProjectsPage) {
                      handleProjectsClick();
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    (currentPage === 'services' && item.isServicesPage) || 
                    (currentPage === 'about' && item.isAboutPage) ||
                    (currentPage === 'projects' && item.isProjectsPage) ||
                    (currentPage === 'home' && item.id === 'home')
                      ? 'text-gray-400' 
                      : 'text-white hover:text-red-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Projects', id: 'projects', isProjectsPage: true },
              { name: 'About', id: 'about', isAboutPage: true },
              { name: 'Services', id: 'services', isServicesPage: true },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.isServicesPage) {
                    handleServicesClick();
                  } else if (item.isAboutPage) {
                    handleAboutClick();
                  } else if (item.isProjectsPage) {
                    handleProjectsClick();
                  } else {
                    scrollToSection(item.id);
                  }
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                  (currentPage === 'services' && item.isServicesPage) || 
                  (currentPage === 'about' && item.isAboutPage) ||
                  (currentPage === 'projects' && item.isProjectsPage) ||
                  (currentPage === 'home' && item.id === 'home')
                    ? 'text-gray-400' 
                    : 'text-white hover:text-red-400'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}