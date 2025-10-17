import { Phone, PhoneCall } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Motion scroll tracking for subtle parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll - much more subtle
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  useEffect(() => {
    let ticking = false;
    
    const updateScrollY = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollY, { passive: true });
    updateScrollY();
    
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Background - Dark and moody like sample */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1632670535530-aaf6e90042ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdmlkZW8lMjBwcm9kdWN0aW9uJTIwc3R1ZGlvJTIwZmlsbW1ha2VyfGVufDF8fHx8MTc1OTgxMTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dark Video Production Studio"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Overlay to match sample darkness */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
        
        {/* Additional subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </motion.div>

      {/* Subtle cinematic effects - much more minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Very subtle film grain */}
        <motion.div
          animate={{ 
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-gray-900/20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '3px 3px'
          }}
        />
        
        {/* Subtle ambient lighting */}
        <div className="absolute inset-0 bg-gradient-radial from-red-500/5 via-transparent to-transparent opacity-60" />
      </div>

      {/* Main content - simplified to match sample */}
      <motion.div 
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        style={{ 
          y: contentY,
          opacity: contentOpacity
        }}
      >
        {/* Main heading - larger size with red and white combination */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight"
          style={{
            textShadow: '0 6px 20px rgba(0,0,0,0.9)'
          }}
        >
          <span className="block mb-3 text-white whitespace-nowrap">Bringing Stories to Life</span>
          <span 
            className="block text-red-500 relative whitespace-nowrap"
            style={{ 
              textShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
            }}
          >
            One Frame at a Time
          </span>
        </motion.h1>

        {/* Subtitle - matching sample style */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          style={{
            textShadow: '0 2px 8px rgba(0,0,0,0.8)'
          }}
        >
          We create high-quality commercials, corporate videos, social media content, and more, bringing your ideas to life with expert storytelling.
        </motion.p>

        {/* Action Buttons - exactly like sample */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Red Call button - smaller size */}
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 25px rgba(239,68,68,0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-lg min-w-[180px] justify-center"
          >
            <Phone className="w-4 h-4" />
            Call +971 4 575 7813
          </motion.button>
          
          {/* White Request Callback button - smaller size */}
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 8px 25px rgba(255,255,255,0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-gray-100 text-gray-900 px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 transition-all duration-300 shadow-lg min-w-[180px] justify-center"
          >
            <PhoneCall className="w-4 h-4" />
            Request a Callback
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - minimal and clean */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: scrollY < 100 ? 1 : 0, 
          y: scrollY < 100 ? 0 : 20 
        }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div 
          animate={{ 
            y: [0, 8, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center relative"
        >
          <motion.div 
            animate={{ 
              y: [6, 20, 6],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2" 
          />
        </motion.div>
      </motion.div>

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30 pointer-events-none z-15" />
    </div>
  );
}