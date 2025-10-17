import { motion } from 'motion/react';

const clients = [
  'Netflix', 'Prime Video', 'HBO Max', 'Disney+', 'Apple TV+', 'Hulu', 
  'Paramount+', 'Discovery+', 'Peacock', 'ESPN+', 'Showtime', 'Starz',
  'Amazon Studios', 'Warner Bros', 'Universal', 'Sony Pictures'
];

export function ClientSection() {
  return (
    <div className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Standing Tall with Our <span className="text-red-500">Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by leading brands and streaming platforms worldwide
          </p>
        </motion.div>

        {/* Horizontally Scrolling Client Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Transparent overlay card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="overflow-hidden">
              {/* Scrolling container */}
              <div className="flex animate-scroll">
                {/* First set of clients */}
                {clients.map((client, index) => (
                  <div key={`first-${index}`} className="flex items-center flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="text-white/80 hover:text-white text-xl font-semibold px-8 py-2 transition-all duration-300 hover:scale-105"
                    >
                      {client}
                    </motion.div>
                    
                    {/* Vertical separator */}
                    {index < clients.length - 1 && (
                      <div className="w-px h-8 bg-white/20 mx-4" />
                    )}
                  </div>
                ))}
                
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div key={`second-${index}`} className="flex items-center flex-shrink-0">
                    <div className="text-white/80 hover:text-white text-xl font-semibold px-8 py-2 transition-all duration-300 hover:scale-105">
                      {client}
                    </div>
                    
                    {/* Vertical separator */}
                    {index < clients.length - 1 && (
                      <div className="w-px h-8 bg-white/20 mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-500 mb-2">500+</h3>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-500 mb-2">50+</h3>
            <p className="text-gray-400">Global Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-500 mb-2">15+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}