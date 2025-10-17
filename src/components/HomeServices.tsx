import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Eye, EyeOff, PlayCircle, ChevronDown, ChevronUp } from 'lucide-react';

const homeServices = [
  {
    title: 'Pre-Production',
    description: 'Pre-production is the backbone of any creative project. It\'s where ideas take shape, budgets get set, schedules are made, and all the important details are planned out before production begins.',
    features: [
      'Concept Development',
      'Location Scouting', 
      'Casting and Talent Selection',
      'Wardrobe and Styling',
      'Budgeting and Scheduling',
      'Equipment Rental',
      'Storyboarding and Shot List'
    ],
    image: 'https://images.unsplash.com/photo-1685463894505-d33387aa8430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yeWJvYXJkJTIwc2NyaXB0JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU5ODA3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500/20 to-cyan-600/30'
  },
  {
    title: 'Production', 
    description: 'Production is where all the planning comes to life. Cameras roll, models step into their roles, and every shot captures the essence of the creative vision. It\'s the stage where ideas turn into reality, bringing the project one step closer to completion.',
    features: [
      'Professional Cinematography',
      'Multi-Camera Setups',
      'Professional Lighting',
      'Audio Recording & Sound Design',
      'Live Streaming Services',
      'On-Set Direction & Coordination'
    ],
    image: 'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBjcmV3JTIwZmlsbWluZyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU5ODA3OTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-red-500/20 to-orange-600/30'
  },
  {
    title: 'Post-Production',
    description: 'Transform raw footage into polished, engaging content with our comprehensive post-production services. From editing to final delivery, we ensure every frame tells your story perfectly.',
    features: [
      'Video Editing & Color Correction',
      'Motion Graphics & Animation',
      'Sound Mixing & Audio Enhancement',
      'Visual Effects (VFX)',
      'Final Output & Delivery',
      'Multiple Format Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1695218716405-5b813000e994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZSUyMHNvZnR3YXJlfGVufDF8fHx8MTc1OTgwNzkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500/20 to-indigo-600/30'
  }
];

interface ServiceCardProps {
  service: typeof homeServices[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ModernServiceCard({ service, index, isExpanded, onToggle }: ServiceCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-white/10 hover:border-red-500/30 transition-all duration-500 shadow-2xl backdrop-blur-sm"
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
      
      {/* Shine Wave Effect */}
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileHover={{ 
          x: '200%', 
          opacity: [0, 0.8, 0],
          transition: { 
            duration: 1.5, 
            ease: "easeOut",
            times: [0, 0.5, 1]
          }
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
          filter: 'blur(1px)'
        }}
      />

      {/* Card Content */}
      <div className="relative z-20 flex">
        {/* Left Side - Image */}
        <div className="w-80 h-64 flex-shrink-0 relative overflow-hidden rounded-l-3xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60" />
          
          {/* Play Button Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600/90 backdrop-blur-sm text-white rounded-full p-3 shadow-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <PlayCircle className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Right Side - Content */}
        <div className="flex-1 p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-200 transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-gray-300 text-base leading-relaxed mb-6"
              >
                {service.description}
              </motion.p>
            </div>
          </div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.7 }}
            className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8"
          >
            {service.features.slice(0, isExpanded ? service.features.length : 4).map((feature, featureIndex) => (
              <motion.div 
                key={featureIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: featureIndex * 0.1 }}
                className="flex items-center text-gray-400 text-sm hover:text-white transition-colors duration-300 group/item"
              >
                <motion.div 
                  whileHover={{ scale: 1.5 }}
                  className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0 group-hover/item:bg-red-400 transition-colors duration-300" 
                />
                <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={onToggle}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm hover:bg-red-600/80 text-white px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-2 border border-white/20 hover:border-red-500/50 group/btn"
            >
              {isExpanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                {isExpanded ? 'Hide Details' : 'Show Details'}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                x: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600/80 backdrop-blur-sm hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-2 border border-red-500/30 hover:border-red-400/50 shadow-lg group/btn"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-red-500 via-red-400 to-transparent origin-left"
          />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(239,68,68,0.2)'
        }}
      />

      {/* Corner decoration */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-2 bg-red-500/30 rounded-full animate-pulse" />
      </div>
    </motion.div>
  );
}

interface HomeServicesProps {
  onNavigateToServices: () => void;
}

export function HomeServices({ onNavigateToServices }: HomeServicesProps) {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/30 to-purple-500/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.1, 0.4]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-cyan-500/30 rounded-full blur-3xl"
        />

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            From Concept To{' '}
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-red-500 via-white to-red-500 bg-200% bg-clip-text text-transparent relative"
              style={{ backgroundSize: '200% 200%' }}
            >
              Creation
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            We guide your project through every stage of production, ensuring excellence at each step of the creative journey.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <div className="space-y-8 mb-16">
          {homeServices.map((service, index) => (
            <ModernServiceCard 
              key={service.title}
              service={service}
              index={index}
              isExpanded={expandedCards.includes(index)}
              onToggle={() => toggleCard(index)}
            />
          ))}
        </div>

        {/* Enhanced Explore Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={onNavigateToServices}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-500 shadow-xl group overflow-hidden border border-red-500/30"
          >
            {/* Background Shine Animation */}
            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            
            <span className="relative z-10">Explore All Services</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}