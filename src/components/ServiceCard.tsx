import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function ServiceCard({ title, description, features, image, isExpanded, onToggle }: ServiceCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  
  const expanded = isExpanded !== undefined ? isExpanded : internalExpanded;
  const handleToggle = onToggle || (() => setInternalExpanded(!internalExpanded));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-red-500/30 transition-all duration-500 shadow-2xl"
    >
      <div className="flex items-start">
        {/* Left side - Image */}
        <div className="w-80 h-64 flex-shrink-0 relative overflow-hidden rounded-l-3xl group/image">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
        </div>
        
        {/* Right side - Content */}
        <div className="flex-1 p-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {description}
              </p>
            </div>
          </div>

          {/* Features in two columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>

          {/* Hide Details Button */}
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 backdrop-blur-sm hover:bg-red-600/80 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 border border-white/20 hover:border-red-500/50"
          >
            <Eye className="w-4 h-4" />
            {expanded ? 'Hide Details' : 'Show Details'}
          </motion.button>
        </div>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="border-t border-white/10"
          >
            <div className="p-8 bg-black/10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* All Features List */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Complete Service Breakdown:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300 text-sm bg-white/5 rounded-lg p-3 border border-white/10"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Process & Timeline */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-lg">Our Process:</h4>
                  <div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <h5 className="text-red-400 font-medium mb-2">01. Planning & Strategy</h5>
                      <p className="text-gray-400 text-sm">We start with understanding your vision and goals.</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <h5 className="text-red-400 font-medium mb-2">02. Execution</h5>
                      <p className="text-gray-400 text-sm">Professional execution with attention to detail.</p>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <h5 className="text-red-400 font-medium mb-2">03. Delivery</h5>
                      <p className="text-gray-400 text-sm">Final delivery with post-support included.</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-4 mt-8 pt-6 border-t border-white/10"
              >
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2">
                  Get Quote
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/20">
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}