import { Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  currentPage?: 'home' | 'services' | 'about' | 'projects';
  onNavigateToHome?: () => void;
  onNavigateToServices?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToProjects?: () => void;
}

export function Footer({ currentPage = 'home', onNavigateToHome, onNavigateToServices, onNavigateToAbout, onNavigateToProjects }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
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
  };

  const handleServicesClick = () => {
    onNavigateToServices?.();
  };

  const handleAboutClick = () => {
    onNavigateToAbout?.();
  };

  const handleProjectsClick = () => {
    onNavigateToProjects?.();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-500/30 to-purple-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-l from-blue-500/20 to-cyan-500/30 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.h3 
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              TOT
            </motion.h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Professional video production company specializing in cinematic storytelling, 
              creative content, and visual excellence. Bringing stories to life, one frame at a time.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/tog.pictures/", color: "from-pink-500 to-purple-600" },
                { icon: Youtube, href: "https://youtube.com/@togpictures", color: "from-red-500 to-red-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative bg-gradient-to-r ${social.color} p-3 rounded-xl transition-all duration-300 group overflow-hidden shadow-lg`}
                >
                  {/* Shine Effect */}
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <social.icon className="w-5 h-5 relative z-10 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'Projects', id: 'projects', isProjectsPage: true },
                { name: 'About', id: 'about', isAboutPage: true },
                { name: 'Services', id: 'services', isServicesPage: true },
              ].map((item, index) => (
                <motion.li 
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.button
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
                    whileHover={{ x: 5, color: "#ef4444" }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300 hover:text-red-500 transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-red-500 origin-left"
                      style={{ width: '100%' }}
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+971501364069", type: "tel:+971501364069" },
                { icon: Mail, text: "contact@togpictures.com", type: "mailto:contact@togpictures.com" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.type}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <div className="bg-red-600/20 group-hover:bg-red-600/40 p-2 rounded-lg mr-3 transition-colors duration-300">
                    <contact.icon className="w-4 h-4 text-red-500" />
                  </div>
                  <span>{contact.text}</span>
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start text-gray-300 group"
              >
                <div className="bg-red-600/20 group-hover:bg-red-600/40 p-2 rounded-lg mr-3 transition-colors duration-300 mt-1">
                  <MapPin className="w-4 h-4 text-red-500" />
                </div>
                <div>
                  <p>Tog pictures</p>
                  <p>Bank Street - Mankhool</p>
                  <p>Dubai - UAE</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative border-t border-gray-800/50 mt-16 pt-8"
        >
          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} TOT Studios. All rights reserved. Made with ❤️ for creators.
            </motion.p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2, color: "#ffffff" }}
                  className="text-gray-400 hover:text-white text-sm transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600/20 hover:bg-red-600/40 p-2 rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500/50 group"
              >
                <ArrowUp className="w-4 h-4 text-red-500 group-hover:text-white transition-colors" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}