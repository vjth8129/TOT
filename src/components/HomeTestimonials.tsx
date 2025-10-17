import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with this team was an absolute game-changer for our brand. Their creative vision and technical expertise brought our story to life in ways we never imagined possible.",
    author: "Jessica Martinez",
    position: "Marketing Director",
    company: "TechFlow Inc.",
    rating: 5,
    project: "Corporate Brand Film",
    avatar: "JM"
  },
  {
    id: 2,
    quote: "The professionalism and attention to detail exceeded all our expectations. Every frame was crafted with purpose, and the final result was nothing short of cinematic perfection.",
    author: "Michael Thompson",
    position: "CEO",
    company: "GreenSpace Solutions",
    rating: 5,
    project: "Environmental Documentary",
    avatar: "MT"
  },
  {
    id: 3,
    quote: "From concept to delivery, they handled everything seamlessly. Our product launch video drove incredible engagement and significantly boosted our conversion rates.",
    author: "Amanda Foster",
    position: "Brand Manager",
    company: "StyleCraft Co.",
    rating: 5,
    project: "Product Launch Campaign",
    avatar: "AF"
  },
  {
    id: 4,
    quote: "The creative team understood our vision immediately and enhanced it beyond our wildest dreams. The music video they created has over 2 million views and counting!",
    author: "Carlos Rodriguez",
    position: "Artist",
    company: "Independent Musician",
    rating: 5,
    project: "Music Video Production",
    avatar: "CR"
  },
  {
    id: 5,
    quote: "Exceptional storytelling combined with stunning visuals. They turned our complex message into a compelling narrative that resonated with our target audience perfectly.",
    author: "Rachel Kim",
    position: "Communications Lead",
    company: "HealthFirst Medical",
    rating: 5,
    project: "Healthcare Awareness Campaign",
    avatar: "RK"
  },
  {
    id: 6,
    quote: "The level of creativity and technical innovation they brought to our project was unprecedented. Every detail was meticulously crafted to perfection.",
    author: "David Wilson",
    position: "Creative Director",
    company: "Innovate Labs",
    rating: 5,
    project: "Tech Innovation Showcase",
    avatar: "DW"
  }
];

export function HomeTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], displayIndex: i });
    }
    return result;
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-500/20 to-white/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-white/10 to-red-500/20 rounded-full blur-3xl"
        />

        {/* Moving particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-50, 50, -50],
              x: [-30, 30, -30],
              opacity: [0, 0.3, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 px-4 py-2 rounded-full text-sm font-medium border border-white/20 mb-8"
          >
            <Quote className="w-4 h-4" />
            Client Stories
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">What Do </span>
            <motion.span 
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gradient-to-r from-red-500 via-white to-red-500 bg-200% bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
            >
              Clients Say
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real testimonials from clients who trusted us with their vision and got extraordinary results
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ 
                scale: 1.1, 
                x: -5,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-4 shadow-xl transition-all duration-300 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ 
                scale: 1.1, 
                x: 5,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full p-4 shadow-xl transition-all duration-300 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Testimonials Container */}
          <div className="flex items-center justify-center gap-8 px-16">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, i) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.8,
                    rotateY: i === 1 ? 0 : i === 0 ? -15 : 15
                  }}
                  animate={{ 
                    opacity: i === 1 ? 1 : 0.6,
                    y: i === 1 ? -20 : 0,
                    scale: i === 1 ? 1.05 : 0.9,
                    rotateY: 0,
                    z: i === 1 ? 50 : 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    y: -50, 
                    scale: 0.8 
                  }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{
                    scale: i === 1 ? 1.08 : 0.95,
                    y: i === 1 ? -25 : -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`
                    relative min-w-[350px] max-w-[400px] p-8 rounded-3xl backdrop-blur-md border transition-all duration-500 cursor-pointer
                    ${i === 1 
                      ? 'bg-white/15 border-white/30 shadow-2xl' 
                      : 'bg-white/5 border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className={`absolute -top-4 -left-4 rounded-full p-3 ${
                      i === 1 ? 'bg-red-500' : 'bg-white/20'
                    }`}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Glow Effect for Center Card */}
                  {i === 1 && (
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-white/10 to-red-500/20 rounded-3xl blur-xl -z-10"
                    />
                  )}

                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonial.rating)].map((_, star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: star * 0.1 + i * 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Text */}
                  <motion.blockquote 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`text-center mb-8 italic leading-relaxed ${
                      i === 1 ? 'text-white text-lg' : 'text-gray-300 text-base'
                    }`}
                  >
                    "{testimonial.quote}"
                  </motion.blockquote>

                  {/* Author Info */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="text-center border-t border-white/20 pt-6"
                  >
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-white ${
                        i === 1 ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-white/20'
                      }`}
                    >
                      {testimonial.avatar}
                    </motion.div>

                    <h4 className={`font-bold mb-1 ${i === 1 ? 'text-white text-lg' : 'text-gray-200'}`}>
                      {testimonial.author}
                    </h4>
                    <p className={`font-semibold mb-1 ${i === 1 ? 'text-red-300' : 'text-gray-400'}`}>
                      {testimonial.position}
                    </p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className={`text-xs mt-2 font-medium ${i === 1 ? 'text-white/80' : 'text-gray-500'}`}>
                      {testimonial.project}
                    </p>
                  </motion.div>

                  {/* Hover Border Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-3 mt-12"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-500 scale-125 shadow-lg shadow-red-500/50' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}