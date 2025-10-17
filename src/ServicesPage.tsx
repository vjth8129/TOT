import { motion } from 'motion/react';
import { ServiceCard } from './components/ServiceCard';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const allServices = [
  {
    title: 'Pre-Production',
    description: 'Pre-production is the backbone of any creative project. It\'s where ideas take shape, budgets get set, schedules are made, and all the important details are planned out before production begins.',
    features: [
      'Concept Development',
      'Location Scouting', 
      'Scriptwriting & Story Development',
      'Budgeting and Scheduling',
      'Equipment Rental',
      'Storyboarding and Shot List'
    ],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmUlMjBwcm9kdWN0aW9uJTIwdmlkZW98ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Production', 
    description: 'Our production phase brings your vision to life with professional cinematography, directing, and technical expertise. We handle all aspects of filming to ensure the highest quality results.',
    features: [
      'Professional Cinematography',
      'Multi-Camera Setups',
      'Professional Lighting',
      'Audio Recording & Sound Design',
      'Live Streaming Services',
      'On-Set Direction & Coordination'
    ],
    image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
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
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3N0JTIwcHJvZHVjdGlvbiUyMHZpZGVvfGVufDF8fHx8MTc1OTY1NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Commercial Production',
    description: 'Create high-impact commercial videos that drive results and engage your target audience with compelling storytelling and professional production values.',
    features: [
      'Brand Storytelling',
      'Product Showcases',
      'TV & Digital Commercials',
      'Marketing Campaign Videos',
      'Testimonial Videos',
      'Call-to-Action Integration'
    ],
    image: 'https://images.unsplash.com/photo-1551122089-4ac2d5430b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhjb21tZXJjaWFsJTIwdmlkZW98ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Corporate Videos',
    description: 'Professional corporate content including training videos, company profiles, and executive communications that strengthen your brand and internal communications.',
    features: [
      'Company Profile Videos',
      'Training & Educational Content',
      'Executive Interviews',
      'Internal Communications',
      'Corporate Events',
      'HR & Recruitment Videos'
    ],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aWRlb3xlbnwxfHx8fDE3NTk2NTYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Documentary Films',
    description: 'Authentic documentary storytelling that captures real stories and creates meaningful connections with audiences through compelling narrative structures.',
    features: [
      'Feature-Length Documentaries',
      'Short Documentary Films',
      'Historical & Cultural Content',
      'Personal & Corporate Stories',
      'Interview-Based Narratives',
      'Archival Footage Integration'
    ],
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG18ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Social Media Content',
    description: 'Engaging content optimized for social platforms to maximize reach and audience engagement across all major social media channels.',
    features: [
      'Instagram Reels & Stories',
      'YouTube Content & Shorts',
      'TikTok Videos',
      'LinkedIn Professional Content',
      'Facebook Video Campaigns',
      'Multi-Platform Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHZpZGVvfGVufDF8fHx8MTc1OTY1NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Motion Graphics & Animation',
    description: 'Creative motion graphics and animation to enhance your visual storytelling and brand presence with dynamic, engaging animated content.',
    features: [
      '2D & 3D Animation',
      'Logo Animation & Branding',
      'Title Sequences & Graphics',
      'Explainer Video Animation',
      'Character Animation',
      'Kinetic Typography'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NTk2NTYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Live Streaming & Events',
    description: 'Professional live streaming services for events, webinars, and real-time audience engagement with multi-camera setups and interactive features.',
    features: [
      'Multi-Camera Live Streaming',
      'Event Coverage & Broadcasting',
      'Interactive Features & Chat',
      'Global Reach & Distribution',
      'Live Audio & Visual Mixing',
      'Real-Time Technical Support'
    ],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nfGVufDF8fHx8MTc1OTY1NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHNlcnZpY2VzfGVufDF8fHx8MTc1OTY1NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our <span className="text-red-500">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed"
          >
            Comprehensive video production services to bring your vision to life with professional excellence and creative innovation.
          </motion.p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {allServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can bring your vision to life with our comprehensive video production services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}