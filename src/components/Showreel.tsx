import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { useVideoData } from '../hooks/useVideoData';

export function Showreel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [shouldStick, setShouldStick] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use the video data hook
  const { videoData, loading, error } = useVideoData();

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Check if section is in view
            const inView = sectionTop < windowHeight && sectionTop > -sectionHeight;
            setIsInView(inView);
            
            // Determine if we should stick the section - optimized for faster transitions
            const entryPoint = windowHeight * 0.3; // Earlier entry
            const exitPoint = -windowHeight * 0.05; // Much earlier exit to minimize black space
            
            if (sectionTop <= entryPoint && sectionTop >= exitPoint) {
              setShouldStick(true);
              
              // Calculate progress within the sticky zone
              const stickyProgress = (entryPoint - sectionTop) / (entryPoint - exitPoint);
              const clampedProgress = Math.max(0, Math.min(1, stickyProgress));
              setScrollProgress(clampedProgress);
              
            } else if (sectionTop > entryPoint) {
              // Before entering sticky zone
              setShouldStick(false);
              setScrollProgress(0);
            } else {
              // After exiting sticky zone
              setShouldStick(false);
              setScrollProgress(1);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show video iframe when it becomes visible
  useEffect(() => {
    if (scrollProgress > 0.2) {
      setShowVideo(true);
    }
  }, [scrollProgress]);

  // Title animations - fast fade that triggers video immediately
  const titleOpacity = scrollProgress < 0.15 ? Math.max(0, 1 - scrollProgress * 6) : 0;
  const titleScale = Math.max(0.3, 1 - scrollProgress * 1.2);
  const titleY = scrollProgress * -400; // Move much faster to top

  // Video card animations - appears immediately when title starts fading
  const cardOpacity = scrollProgress > 0.05 ? Math.min(1, (scrollProgress - 0.05) * 4) : 0;
  
  // Width animation - starts wider, expands to full viewport width
  const cardWidth = scrollProgress > 0.05 ? 45 + (scrollProgress - 0.05) * 58 : 45; // 45% to 100vw (58 = 100-45+3 for overextension)
  const cardHeight = Math.min(window.innerHeight * 0.85, 300 + scrollProgress * 300); // Better responsive height
  
  // Center position - video stays centered, no bottom positioning
  const cardScale = 0.8 + scrollProgress * 0.2; // Subtle scale animation

  // Show loading state while fetching video data
  if (loading || !videoData) {
    return (
      <div className="relative bg-black overflow-hidden min-h-screen flex items-center justify-center">
        <div className="text-white/40 text-lg">Loading showreel...</div>
      </div>
    );
  }

  return (
    <div 
      ref={sectionRef} 
      className="relative bg-black overflow-hidden"
      style={{ 
        minHeight: '100vh', // Reduced to single viewport height
        position: shouldStick ? 'sticky' : 'relative',
        top: shouldStick ? '0' : 'auto',
        zIndex: shouldStick ? 50 : 'auto'
      }}
    >
      {/* Minimal ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Reduced floating elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 20, 0, -10, 0],
              y: [0, -20, 10, 0, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 3
            }}
            className="absolute"
            style={{
              left: `${30 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              transform: `translateY(${scrollProgress * 30 * (i % 2 ? 1 : -1)}px)`,
              opacity: isInView ? 0.1 : 0.03
            }}
          >
            <div className={`w-1.5 h-1.5 ${i % 2 ? 'bg-red-500/30' : 'bg-white/30'} rounded-full`} />
          </motion.div>
        ))}
      </div>

      {/* Main content container - fixed viewport height */}
      <div className="sticky top-0 h-screen flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 relative h-full">
          
          {/* SHOWREEL Title - positioned at top */}
          <motion.div
            style={{ 
              opacity: titleOpacity,
              transform: `translateY(${titleY}px) scale(${titleScale})`,
              filter: `blur(${scrollProgress > 0.15 ? scrollProgress * 3 : 0}px)`
            }}
            className="absolute inset-x-0 top-16 flex justify-center z-20"
          >
            <h2 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white/20 tracking-wider select-none text-center transform-gpu"
              style={{
                textShadow: `0 0 ${40 + scrollProgress * 60}px rgba(255, 255, 255, ${0.15 + scrollProgress * 0.25})`
              }}
            >
              REEL
            </h2>
          </motion.div>

          {/* Video Card - appears immediately when title fades, centered */}
          <motion.div
            style={{
              opacity: cardOpacity,
              width: scrollProgress > 0.8 ? '100vw' : `${cardWidth}vw`,
              height: `${cardHeight}px`,
              transform: `translateX(-50%) translateY(-50%) scale(${cardScale})`,
              zIndex: scrollProgress > 0.1 ? 30 : 5,
              borderRadius: scrollProgress > 0.8 ? '0px' : '12px'
            }}
            className="absolute left-1/2 top-1/2 overflow-hidden shadow-2xl transform-gpu bg-black"
          >
            {/* Video Content */}
            {showVideo ? (
              <>
                <img
                  src={videoData?.showreel?.videoUrl || "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"}
                  alt={videoData?.showreel?.label || "Showreel"}
                  className="w-full h-full object-cover"
                />
                {/* Transparent overlay to prevent context menu */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-auto"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ background: 'transparent' }}
                />
              </>
            ) : (
              <>
                <img 
                  src={videoData?.showreel?.videoUrl || "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"} 
                  alt={videoData?.showreel?.label || "Showreel"}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <motion.button
                    onClick={() => setShowVideo(true)}
                    className="bg-red-600/90 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 shadow-2xl hover:scale-110 backdrop-blur-sm border-2 border-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-12 h-12 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </motion.button>
                </div>
                
                {/* Video Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{videoData?.showreel?.label || "Our Latest Showreel 2024"}</h3>
                  <p className="text-white/80 text-sm">{videoData?.showreel?.duration || "2:30"}</p>
                </div>
              </>
            )}

            {/* Video effects overlay - optimized */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Simplified animated border glow */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-white/10 to-red-500/20 rounded-xl blur-sm -z-10"
              />

              {/* Scanning line - appears when video is expanding */}
              {scrollProgress > 0.3 && (
                <motion.div
                  animate={{
                    y: [-20, cardHeight + 20]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 2
                  }}
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
                />
              )}

              {/* Corner brackets - fade out as video expands */}
              <div 
                className="absolute inset-3 transition-opacity duration-500"
                style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
              >
                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-red-500/70" />
                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-red-500/70" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-red-500/70" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-red-500/70" />
              </div>

              {/* Subtle cinematic vignette */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"
                style={{ opacity: 0.6 - scrollProgress * 0.4 }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Progress indicator - simplified */}
      {isInView && scrollProgress < 0.8 && (
        <motion.div
          style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="text-center">
            <p className="text-white/40 text-xs mb-2 font-medium">
              {scrollProgress < 0.05 ? 'Scroll to reveal showreel' : 
               scrollProgress < 0.4 ? 'Showreel expanding...' : 
               'Nearly full screen...'}
            </p>
            <div className="w-10 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                style={{ width: `${scrollProgress * 100}%` }}
                className="h-full bg-gradient-to-r from-red-500 to-white rounded-full transition-all duration-150" 
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Production info when video starts expanding */}
      {scrollProgress > 0.2 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ 
            opacity: Math.min(0.8, (scrollProgress - 0.2) * 3),
            y: 0 
          }}
          className="fixed top-6 left-6 z-40 pointer-events-none"
        >
          <div className="bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg border border-white/20 text-xs">
            <p className="font-medium">Professional Media Production</p>
            <p className="text-xs text-white/60">Behind the Scenes</p>
          </div>
        </motion.div>
      )}

      {/* Status indicator when approaching full screen */}
      {scrollProgress > 0.5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: Math.min(1, (scrollProgress - 0.5) * 4),
            scale: 1 
          }}
          className="fixed top-6 right-6 z-40 pointer-events-none"
        >
          <div className="flex items-center gap-1.5 bg-red-600/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span>LIVE</span>
          </div>
        </motion.div>
      )}
    </div>
  );
}