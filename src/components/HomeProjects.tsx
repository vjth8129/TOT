import { motion } from 'motion/react';
import { ArrowRight, Play, Camera, Video, Film, Youtube, FileVideo, MonitorPlay, Smartphone, Building, Users, Zap } from 'lucide-react';

const videoTypes = [
  {
    id: 1,
    title: "YouTube Videos",
    description: "Engaging content that captures audiences and builds communities through creative storytelling and optimized production.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1OTcyNjEyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "large",
    icon: Youtube,
    color: "from-red-500/80 to-red-700/90"
  },
  {
    id: 2,
    title: "Documentaries",
    description: "We bring real-life stories to life. Our documentaries inform, entertain, and educate on diverse subjects, ensuring your message is captivatingly conveyed.",
    image: "https://images.unsplash.com/photo-1758788506109-8ed33e99d3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1pbmclMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5ODA1ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium",
    icon: FileVideo,
    color: "from-orange-500/80 to-red-600/90"
  },
  {
    id: 3,
    title: "Shorts & Reels",
    description: "Quick, impactful content designed for maximum engagement on social platforms.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHZpZGVvfGVufDF8fHx8MTc1OTcyNjE0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "tall",
    icon: Smartphone,
    color: "from-blue-500/80 to-cyan-600/90"
  },
  {
    id: 4,
    title: "Mid-Level Ads",
    description: "Strategic advertising content that drives conversions and brand awareness.",
    image: "https://images.unsplash.com/photo-1749321485863-29e9cf0f40c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmclMjB2aWRlbyUyMHNldHxlbnwxfHx8fDE3NTk4MDU5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "wide",
    icon: MonitorPlay,
    color: "from-purple-500/80 to-indigo-600/90"
  },
  {
    id: 5,
    title: "Commercials and Advertisements",
    description: "High-impact advertising content that drives brand engagement and conversions.",
    image: "https://images.unsplash.com/photo-1552599886-a5dd807f93be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmlkZW8lMjBzaG9vdGluZ3xlbnwxfHx8fDE3NTk4MDU4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "large",
    icon: Building,
    color: "from-green-500/80 to-emerald-600/90"
  },
  {
    id: 6,
    title: "Music Videos",
    description: "Creative visual narratives that bring musical artistry to life with dynamic cinematography and innovative storytelling.",
    image: "https://images.unsplash.com/flagged/photo-1557410632-d7973abbe4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NTk4MDU4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium",
    icon: Video,
    color: "from-pink-500/80 to-rose-600/90"
  },
  {
    id: 7,
    title: "Corporate Videos",
    description: "Professional content that communicates brand values and corporate messaging with sophistication and clarity.",
    image: "https://images.unsplash.com/photo-1698945298330-0a000352ad72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aWRlbyUyMGludGVydmlldyUyMHNldHVwfGVufDF8fHx8MTc1OTgwNTg4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small",
    icon: Building,
    color: "from-teal-500/80 to-emerald-600/90"
  },
  {
    id: 8,
    title: "Event Coverage",
    description: "Dynamic event documentation that captures key moments and atmosphere with cinematic quality and emotional depth.",
    image: "https://images.unsplash.com/photo-1586748079776-4c83271509af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvZ3JhcGh5JTIwd2VkZGluZ3xlbnwxfHx8fDE3NTk4MDU4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "wide",
    icon: Camera,
    color: "from-amber-500/80 to-yellow-600/90"
  },
  {
    id: 9,
    title: "Training Videos",
    description: "Educational content designed to engage and inform audiences effectively through visual learning and clear instruction.",
    image: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTk4MDU5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small",
    icon: MonitorPlay,
    color: "from-cyan-500/80 to-blue-600/90"
  },
  {
    id: 10,
    title: "Animation & Motion Graphics",
    description: "Creative animated content that transforms ideas into compelling visual experiences and dynamic storytelling.",
    image: "https://images.unsplash.com/photo-1572018098513-8c5fa9a254cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBwcm9kdWN0aW9uJTIwc3R1ZGlvfGVufDF8fHx8MTc1OTgwNTg5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "tall",
    icon: Zap,
    color: "from-violet-500/80 to-purple-600/90"
  },
  {
    id: 11,
    title: "Sports Broadcasting",
    description: "High-energy sports content that captures the thrill and excitement of competitive athletics with professional coverage.",
    image: "https://images.unsplash.com/photo-1592405375277-8891720bad1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzU5ODA1ODk2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium",
    icon: Camera,
    color: "from-lime-500/80 to-green-600/90"
  },
  {
    id: 12,
    title: "Fashion & Beauty",
    description: "Stylish fashion content showcasing the latest trends through artistic cinematography and sophisticated editing.",
    image: "https://images.unsplash.com/photo-1758613656677-012ee6263745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdmlkZW8lMjBzaG9vdCUyMG1vZGVsfGVufDF8fHx8MTc1OTgwNTg5OXww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "wide",
    icon: Video,
    color: "from-rose-500/80 to-pink-600/90"
  },
  {
    id: 13,
    title: "Studio Production",
    description: "Professional studio environments for controlled lighting and premium production quality with state-of-the-art equipment.",
    image: "https://images.unsplash.com/photo-1759417501792-0d188b64b774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3NTk4MDU4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small",
    icon: Camera,
    color: "from-indigo-500/80 to-blue-600/90"
  },
  {
    id: 14,
    title: "Film Production",
    description: "Complete film production services from pre-production planning to final post-production delivery with cinematic excellence.",
    image: "https://images.unsplash.com/photo-1681137063068-081072cf04b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzU5ODA1ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium",
    icon: Film,
    color: "from-slate-500/80 to-gray-600/90"
  },
  {
    id: 15,
    title: "Live Streaming",
    description: "Professional live streaming services for events, broadcasts, and real-time audience engagement with seamless delivery.",
    image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwc2V0dXB8ZW58MXx8fHwxNzU5ODI3NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small",
    icon: Video,
    color: "from-red-500/80 to-orange-600/90"
  }
];

interface HomeProjectsProps {
  onNavigateToProjects: () => void;
}

export function HomeProjects({ onNavigateToProjects }: HomeProjectsProps) {
  const getCardClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-12 md:col-span-6 lg:col-span-6 h-64 md:h-80';
      case 'medium':
        return 'col-span-12 md:col-span-4 lg:col-span-4 h-48 md:h-64';
      case 'tall':
        return 'col-span-12 md:col-span-3 lg:col-span-3 h-64 md:h-80';
      case 'wide':
        return 'col-span-12 md:col-span-6 lg:col-span-6 h-48 md:h-56';
      case 'small':
        return 'col-span-12 md:col-span-3 lg:col-span-3 h-40 md:h-48';
      default:
        return 'col-span-12 md:col-span-4 lg:col-span-4 h-48 md:h-64';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Dark Background Elements */}
      <div className="absolute inset-0 opacity-30">
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
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-blue-500/20 to-green-500/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-50, 50, -50],
              x: [-30, 30, -30],
              opacity: [0, 0.4, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
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
            Experienced in Various{' '}
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
              Video Types
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full origin-left"
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            From documentaries to commercials, we craft compelling visual stories across all video formats and genres with cinematic excellence
          </motion.p>
        </motion.div>

        {/* Cinematic Horizontal Layout */}
        <div className="relative">
          {/* Horizontal Scrolling Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {videoTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <motion.div
                  key={type.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    y: -12,
                    rotateY: 5,
                    transition: { 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }
                  }}
                  className="group cursor-pointer flex-shrink-0 w-80 h-64"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative overflow-hidden rounded-3xl h-full border border-white/20 bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-xl shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <motion.img
                        src={type.image}
                        alt={type.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 2,
                          transition: { duration: 0.8 }
                        }}
                      />
                      
                      {/* Cinematic Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-70 group-hover:opacity-50 transition-all duration-700`} />
                      
                      {/* Film Noir Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                      
                      {/* Top vignette */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Enhanced Cinematic Shine Effect */}
                    <motion.div
                      initial={{ x: '-200%', opacity: 0 }}
                      whileHover={{ 
                        x: '200%', 
                        opacity: [0, 1, 0],
                        transition: { 
                          duration: 1.8, 
                          ease: "easeInOut",
                          times: [0, 0.5, 1]
                        }
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)',
                        filter: 'blur(1px)'
                      }}
                    />

                    {/* Film Grain Effect */}
                    <div 
                      className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='45' cy='45' r='0.5'/%3E%3Ccircle cx='15' cy='15' r='0.3'/%3E%3Ccircle cx='75' cy='15' r='0.4'/%3E%3Ccircle cx='15' cy='75' r='0.3'/%3E%3Ccircle cx='75' cy='75' r='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Corner Icon with Film Reel Style */}
                    <div className="absolute top-6 right-6 z-20">
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: index * 0.15 + 0.3,
                          type: "spring",
                          stiffness: 120,
                          damping: 12
                        }}
                        whileHover={{
                          scale: 1.3,
                          rotate: 15,
                          transition: { duration: 0.3 }
                        }}
                        className="relative bg-black/60 backdrop-blur-md rounded-full p-3 border border-white/40 group-hover:bg-red-600/80 group-hover:border-red-400/60 transition-all duration-500"
                      >
                        <motion.div
                          whileHover={{
                            rotate: 20,
                            scale: 1.1
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>


                    
                    {/* Content */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6 z-20"
                      whileHover={{
                        y: -4,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        whileHover={{
                          scale: 1.03,
                          transition: { duration: 0.2 }
                        }}
                        className="text-xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-300"
                      >
                        {type.title}
                      </motion.h3>
                      
                      <motion.p 
                        initial={{ y: 15, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="text-sm text-white/80 leading-relaxed transition-all duration-300 group-hover:text-white/95"
                      >
                        {type.description}
                      </motion.p>
                      
                      {/* Cinematic bottom accent */}
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileHover={{ 
                          scaleX: 1,
                          opacity: 1,
                          transition: { duration: 0.5 }
                        }}
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-red-400 to-transparent origin-left"
                      />
                    </motion.div>

                    {/* Film-style border glow */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 rounded-3xl border border-red-500/30 shadow-2xl shadow-red-500/20"
                    />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

          {/* Horizontal Scroll Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center mt-8 mb-12 space-x-3"
          >
            {videoTypes.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5, backgroundColor: '#ef4444' }}
                className="w-3 h-3 bg-white/40 rounded-full cursor-pointer hover:bg-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Explore All Categories Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={onNavigateToProjects}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 shadow-xl group overflow-hidden border border-red-500/30"
          >
            {/* Background Shine Animation */}
            <motion.div
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
            
            <span className="relative z-10">Explore All Categories</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 relative z-10" />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}