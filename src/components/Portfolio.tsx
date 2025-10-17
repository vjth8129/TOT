import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Play, 
  X,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Share2,
  Download,
  ExternalLink, 
  Award, 
  ArrowUpRight, 
  Sparkles, 
  Eye, 
  TrendingUp, 
  Heart, 
  Film, 
  Camera, 
  Video,
  Calendar,
  User,
  Target,
  Zap
} from 'lucide-react';

// Portfolio Reels Data
const portfolioReels = [
  {
    id: 1,
    title: "Cinematic Brand Revolution",
    category: "Media Production",
    type: "Video Campaign",
    image: "https://images.unsplash.com/photo-1742540425709-7610d1affa0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMHNob3djYXNlfGVufDF8fHx8MTc1ODg2MDI4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A visually stunning brand transformation that redefined luxury storytelling through immersive video content and strategic positioning.",
    client: "Luxury Retail Co.",
    results: "340% engagement boost",
    impact: "2.3M views",
    duration: "2:45",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    color: "from-amber-500/20 to-orange-500/20",
    featured: true,
    tags: ["Cinematography", "Brand Story", "Visual Identity"]
  },
  {
    id: 2,
    title: "Digital Growth Explosion",
    category: "Digital Marketing",
    type: "Growth Strategy",
    image: "https://images.unsplash.com/photo-1495046370729-fa5e793723e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGNyZWF0aXZlfGVufDF8fHx8MTc1ODg2MDI5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Revolutionary digital ecosystem that transformed a startup into an industry leader through data-driven marketing excellence.",
    client: "Tech Innovators",
    results: "300% revenue growth",
    impact: "500K users",
    duration: "1:30",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    color: "from-red-500/20 to-orange-500/20",
    featured: false,
    tags: ["Performance Marketing", "Analytics", "Conversion Optimization"]
  },
  {
    id: 3,
    title: "Award-Winning App Design",
    category: "Design & Development",
    type: "Mobile Experience",
    image: "https://images.unsplash.com/photo-1630522790858-50b4ef44944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4ODU2ODU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Intuitive design philosophy meets cutting-edge technology in this award-winning mobile application that redefined user experience standards.",
    client: "FinTech Pioneers",
    results: "4.9★ App Store rating",
    impact: "250K downloads",
    duration: "3:20",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    color: "from-amber-500/20 to-red-500/20",
    featured: true,
    tags: ["UI/UX Design", "Mobile Dev", "User Research"]
  },
  {
    id: 4,
    title: "Immersive Digital Art",
    category: "Media Production",
    type: "Creative Direction",
    image: "https://images.unsplash.com/photo-1663867148037-5dd602c68fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwYW5pbWF0aW9ufGVufDF8fHx8MTc1ODg2MDI4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Groundbreaking visual narrative that pushed creative boundaries and established new standards for digital storytelling excellence.",
    client: "Creative Collective",
    results: "Festival Grand Prix",
    impact: "1.5M impressions",
    duration: "4:15",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    color: "from-orange-500/20 to-amber-500/20",
    featured: false,
    tags: ["Motion Graphics", "Creative Direction", "Digital Art"]
  }
];

// Products Data
const products = [
  {
    id: 5,
    title: "Brand Launch Campaign",
    category: "Media Production",
    client: "TechCorp Inc.",
    date: "December 2024",
    views: "2.3M",
    likes: "45.2K",
    image: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjByZWVsfGVufDF8fHx8MTc1OTAyODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A cinematic brand story that showcases innovation and growth through stunning visuals and compelling narrative.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-amber-600 to-orange-600",
    type: "Case Study"
  },
  {
    id: 6,
    title: "Digital Strategy Showcase",
    category: "Digital Marketing",
    client: "StartupCo",
    date: "November 2024", 
    views: "1.8M",
    likes: "32.1K",
    image: "https://images.unsplash.com/photo-1625295698206-d28378d2c6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFkdmVydGlzaW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU4OTgwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A comprehensive digital campaign that increased brand awareness by 340% and generated 2M+ impressions.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-red-600 to-pink-600",
    type: "Case Study"
  },
  {
    id: 7,
    title: "E-commerce Platform",
    category: "Design & Development",
    client: "Fashion House",
    date: "October 2024",
    views: "950K",
    likes: "18.7K",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODk3MTI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A modern, responsive e-commerce platform with seamless UX and integrated payment solutions.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-orange-600 to-amber-600",
    type: "Case Study"
  },
  {
    id: 8,
    title: "Product Launch Video",
    category: "Media Production",
    client: "GadgetZone",
    date: "September 2024",
    views: "3.1M",
    likes: "67.4K",
    image: "https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHByb2R1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MDI4MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-end product photography and cinematography showcasing cutting-edge technology.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-red-600 to-orange-600",
    type: "Case Study"
  }
];

const categories = ["All", "Media Production", "Digital Marketing", "Design & Development"];

// Enhanced ScrollReveal Component
function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction],
        scale: 0.95 
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1 
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.21, 1.11, 0.81, 0.99] 
      }}
    >
      {children}
    </motion.div>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeTab, setActiveTab] = useState("reels");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredReels = activeCategory === "All" 
    ? portfolioReels 
    : portfolioReels.filter(reel => reel.category === activeCategory);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleVideoPlay = (item) => {
    setSelectedItem(item);
    setIsVideoPlaying(true);
  };

  const handleVideoClose = () => {
    setSelectedItem(null);
    setIsVideoPlaying(false);
    setIsMuted(true);
    setIsFullscreen(false);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-slate-950">      
      {/* Dark Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-red-500/5 to-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900/50 backdrop-blur-xl rounded-full border border-gray-700/30 mb-8">
              <Target size={20} className="text-amber-400" />
              <span className="text-white">Portfolio & Case Studies</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-7xl mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Creative Excellence
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                In Action
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive showcase of creative reels, successful campaigns, and transformative 
              projects that have driven exceptional results for our clients.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabbed Interface */}
        <ScrollReveal delay={0.2}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-800/50 backdrop-blur-xl border border-gray-700/30 rounded-3xl p-2 mb-8">
              <TabsTrigger 
                value="reels" 
                className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Film className="mr-2" size={18} />
                Creative Reels
              </TabsTrigger>
              <TabsTrigger 
                value="products" 
                className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-600 data-[state=active]:to-red-600 data-[state=active]:text-white transition-all duration-300"
              >
                <Zap className="mr-2" size={18} />
                Case Studies
              </TabsTrigger>
            </TabsList>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <ScrollReveal key={category} delay={0.1 * index} direction="up">
                  <Button
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={`px-8 py-3 rounded-2xl transition-all duration-500 group relative ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-amber-600 to-red-600 text-white shadow-2xl shadow-amber-500/20"
                        : "bg-gray-800/50 border-gray-600/30 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/40 backdrop-blur-sm"
                    }`}
                  >
                    <span className="relative z-10">{category}</span>
                    {activeCategory === category && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-amber-600 to-red-600 rounded-2xl"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Button>
                </ScrollReveal>
              ))}
            </div>

            {/* Creative Reels Tab */}
            <TabsContent value="reels" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredReels.map((reel, index) => (
                    <ScrollReveal key={`reels-${activeCategory}-${reel.id}`} delay={0.1 * index}>
                      <motion.div
                        layout
                        className="group cursor-pointer"
                        whileHover={{ y: -10, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setHoveredItem(`reel-${reel.id}`)}
                        onHoverEnd={() => setHoveredItem(null)}
                      >
                        <Card className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 hover:border-gray-600/60 transition-all duration-500 overflow-hidden h-full rounded-3xl hover:shadow-2xl hover:shadow-amber-500/10">
                          <div className="relative overflow-hidden aspect-video">
                            <ImageWithFallback
                              src={reel.image}
                              alt={reel.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${reel.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                            
                            {/* Play Button - Top Left Corner */}
                            <motion.div
                              className="absolute top-4 left-4 z-10"
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleVideoPlay(reel)}
                            >
                              <div className="w-12 h-12 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30 transition-all duration-300 backdrop-blur-sm">
                                <Play size={18} className="text-white ml-0.5" />
                              </div>
                            </motion.div>

                            {/* Duration Badge - Top Right */}
                            <div className="absolute top-4 right-4">
                              <Badge className="bg-black/60 backdrop-blur-sm text-white border-0 text-xs px-3 py-1">
                                {reel.duration}
                              </Badge>
                            </div>

                            {/* Featured Badge */}
                            {reel.featured && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="absolute bottom-4 right-4"
                              >
                                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 text-xs px-3 py-1">
                                  <Sparkles size={12} className="mr-1" />
                                  Featured
                                </Badge>
                              </motion.div>
                            )}

                            {/* Hover Overlay */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: hoveredItem === `reel-${reel.id}` ? 1 : 0 }}
                              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30"
                              >
                                <Play size={24} className="text-white ml-1" />
                              </motion.div>
                            </motion.div>
                          </div>

                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge className="bg-gray-800/50 text-gray-300 border-gray-600/30 text-xs">
                                {reel.type}
                              </Badge>
                              <div className="flex items-center gap-1 text-gray-500">
                                <Video size={12} />
                              </div>
                            </div>
                            
                            <h3 className="text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                              {reel.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                              {reel.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-2">
                                <TrendingUp size={14} className="text-emerald-400" />
                                <span className="text-white">{reel.results}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Eye size={14} className="text-blue-400" />
                                <span className="text-gray-400">{reel.impact}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="products" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {filteredProducts.map((product, index) => (
                    <ScrollReveal key={`products-${activeCategory}-${product.id}`} delay={0.1 * index}>
                      <motion.div
                        layout
                        className="group cursor-pointer"
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        onHoverStart={() => setHoveredItem(`product-${product.id}`)}
                        onHoverEnd={() => setHoveredItem(null)}
                      >
                        <Card className="group h-full bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 hover:border-gray-600/60 transition-all duration-500 overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-orange-500/10">
                          <div className="relative h-64 overflow-hidden">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-60`} />
                            <div className="absolute inset-0 bg-black/40" />
                            
                            {/* Top Left Info */}
                            <div className="absolute top-4 left-4">
                              <Badge className={`bg-gradient-to-r ${product.gradient} text-white border-0 px-3 py-1`}>
                                {product.category}
                              </Badge>
                            </div>

                            {/* Play Button */}
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
                              onClick={() => handleVideoPlay(product)}
                            >
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                                <Play size={24} className="text-white ml-1" />
                              </div>
                            </motion.button>

                            {/* Bottom Stats */}
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                              <div className="flex items-center gap-4 text-white/80 text-sm">
                                <div className="flex items-center gap-1">
                                  <Eye size={14} />
                                  <span>{product.views}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Heart size={14} />
                                  <span>{product.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                                  {product.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                              </div>

                              <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                  <User size={14} />
                                  <span>{product.client}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar size={14} />
                                  <span>{product.date}</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </AnimatePresence>
              </div>
            </TabsContent>
          </Tabs>
        </ScrollReveal>

        {/* Enhanced Video Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={handleVideoClose}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300
                }}
                className={`relative bg-gray-900/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl ${
                  isFullscreen ? 'w-full h-full' : 'max-w-5xl w-full max-h-[90vh]'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Video Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/30">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <h3 className="text-xl text-white">{selectedItem.title}</h3>
                    <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {selectedItem.duration || "Live"}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMuted(!isMuted)}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isMuted ? <VolumeX size={18} className="text-gray-400" /> : <Volume2 size={18} className="text-white" />}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-full flex items-center justify-center transition-colors"
                    >
                      {isFullscreen ? <Minimize size={18} className="text-gray-400" /> : <Maximize size={18} className="text-gray-400" />}
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleVideoClose}
                      className="w-10 h-10 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X size={18} className="text-red-400" />
                    </motion.button>
                  </div>
                </div>

                {/* Video Container */}
                <div className={`relative ${isFullscreen ? 'h-full' : 'aspect-video'} bg-black`}>
                  <iframe
                    src={`${selectedItem.videoUrl}&muted=${isMuted ? 1 : 0}`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                  
                  {/* Video Overlay Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <RotateCcw size={20} className="text-white" />
                      </motion.button>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Share2 size={16} className="text-white" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Download size={16} className="text-white" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                {!isFullscreen && (
                  <div className="p-6">
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedItem.description}</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl text-white mb-2">
                          {selectedItem.results || selectedItem.views}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {selectedItem.results ? "Results" : "Views"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-white mb-2">
                          {selectedItem.impact || selectedItem.likes}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {selectedItem.impact ? "Impact" : "Likes"}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl text-white mb-2">{selectedItem.client}</div>
                        <div className="text-gray-400 text-sm">Client</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Creative CTA Section */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-24">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
              <div className="relative bg-gray-900/60 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-12 max-w-2xl mx-auto">
                <h3 className="text-3xl text-white mb-4">
                  Ready to Create Your Next
                  <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent ml-2">
                    Success Story?
                  </span>
                </h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Join our portfolio of successful brands and experience the transformation that comes with exceptional creative execution.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      className="group bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl shadow-amber-500/20"
                    >
                      <Camera className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                      Get In Touch
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-gray-500 px-8 py-4 rounded-2xl transition-all duration-300"
                    >
                      <Award className="mr-2" size={20} />
                      View All Work
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}