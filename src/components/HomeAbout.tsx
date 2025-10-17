import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Star, Camera, Users, Award, Play } from 'lucide-react';
import { useRef } from 'react';

interface HomeAboutProps {
  onNavigateToAbout: () => void;
}

export function HomeAbout({ onNavigateToAbout }: HomeAboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <div ref={containerRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-500/20 to-gray-500/20 rounded-full blur-2xl"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-l from-black/10 to-red-500/20 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Modern Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-red-900/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium border border-red-800/30"
            >
              <Sparkles className="w-4 h-4" />
              About Us
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Crafting Stories That{' '}
              <motion.span 
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-red-600 via-black to-red-600 bg-200% bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                Inspire
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 leading-relaxed max-w-lg"
            >
              We are passionate storytellers dedicated to transforming ideas into compelling visual narratives. 
              Our creative expertise combines cutting-edge technology with timeless storytelling techniques.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">500+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-700" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Awards</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={onNavigateToAbout}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(239, 68, 68, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Modern Image Section */}
          <motion.div
            style={{ scale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-gray-100 to-white">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTcyNTQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative team working"
                  className="w-full h-80 object-cover"
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/90 backdrop-blur-sm text-red-600 rounded-full p-4 shadow-xl"
                  >
                    <Play className="w-8 h-8" fill="currentColor" />
                  </motion.button>
                </motion.div>

                {/* Bottom Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">Award-Winning Team</h4>
                        <p className="text-gray-500 text-xs">Creative Excellence Since 2014</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-red-50 rounded-full p-2">
                          <Award className="w-4 h-4 text-red-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-red-600 rounded-full p-3 shadow-xl z-10"
              >
                <Camera className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 bg-gray-900 rounded-full p-3 shadow-xl z-10"
              >
                <Users className="w-6 h-6 text-white" />
              </motion.div>

              {/* Decorative Border */}
              <motion.div
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-1 rounded-2xl opacity-20 -z-10"
                style={{
                  background: 'conic-gradient(from 0deg, transparent 340deg, rgba(239,68,68,0.6) 360deg)',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}