import { motion } from 'motion/react';
import { ServiceCard } from './ServiceCard';
import { ArrowLeft, Camera, Edit3, Palette, Megaphone, Users, Monitor, Globe, Smartphone, Briefcase } from 'lucide-react';

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
    image: 'https://images.unsplash.com/photo-1681137063068-081072cf04b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMGNhbWVyYSUyMGNyZXd8ZW58MXx8fHwxNzU5ODA1ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
    image: 'https://images.unsplash.com/photo-1744686959591-eaaec00c999c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBwb3N0JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NTk4MDc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    title: 'Digital Marketing',
    description: 'Amplify your message with strategic digital marketing campaigns. We create compelling content and implement data-driven strategies to reach your target audience effectively.',
    features: [
      'Social Media Strategy & Management',
      'Content Marketing Campaigns',
      'SEO & Search Marketing',
      'Paid Advertising (PPC, Social Ads)',
      'Email Marketing Automation',
      'Analytics & Performance Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDF8fHx8MTc1OTY1NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Brand Development',
    description: 'Build a strong, memorable brand identity that resonates with your audience. From logo design to complete brand guidelines, we craft identities that stand out in the market.',
    features: [
      'Logo Design & Brand Identity',
      'Brand Strategy & Positioning',
      'Visual Identity Systems',
      'Brand Guidelines Creation',
      'Brand Messaging & Voice',
      'Rebranding & Brand Evolution'
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbnxlbnwxfHx8fDE3NTk2NTYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Web Development',
    description: 'Create stunning, responsive websites that deliver exceptional user experiences. Our development team builds fast, secure, and scalable web solutions tailored to your needs.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Mobile-Responsive Design',
      'SEO Optimization',
      'Website Maintenance & Support'
    ],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk2NTYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Mobile App Development',
    description: 'Bring your ideas to mobile platforms with custom app development. We create native and cross-platform applications that provide seamless user experiences.',
    features: [
      'iOS & Android Native Apps',
      'Cross-Platform Development',
      'UI/UX Design for Mobile',
      'App Store Optimization',
      'Push Notifications & Analytics',
      'App Maintenance & Updates'
    ],
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTk2NTYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    title: 'Consulting Services',
    description: 'Get expert guidance for your digital transformation journey. Our consultants help you strategize, optimize processes, and implement solutions that drive business growth.',
    features: [
      'Digital Strategy Consulting',
      'Technology Assessment',
      'Process Optimization',
      'Change Management',
      'Training & Knowledge Transfer',
      'Ongoing Strategic Support'
    ],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwc2VydmljZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

interface ServicesPageProps {
  onBack: () => void;
}

export function ServicesPage({ onBack }: ServicesPageProps) {

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1759417501792-0d188b64b774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBzdHVkaW8lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5ODA3NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Video Production Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating Service Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[Camera, Edit3, Palette, Megaphone, Monitor, Globe].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0], 
                  y: [50, -100, -200],
                  scale: [0, 1, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeOut"
                }}
                className="absolute"
                style={{
                  left: `${15 + (i * 12)}%`,
                  top: `${60 + Math.random() * 30}%`,
                }}
              >
                <Icon className="w-8 h-8 text-red-500/60" />
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results across every touchpoint of your business.
            </p>
          </motion.div>

          {/* Service Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-4 md:grid-cols-8 gap-8 justify-items-center"
          >
            {[Camera, Edit3, Palette, Megaphone, Users, Monitor, Globe, Smartphone].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-white/70 group-hover:text-red-400 transition-colors" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From Concept To <span className="text-red-500">Creation</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We guide your project through every stage of development, ensuring excellence at each step of the creative and technical journey.
            </p>
          </motion.div>

          {/* Services Cards */}
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

          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-red-600/10 to-red-400/10 rounded-3xl p-12 border border-red-500/20">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help bring your vision to life. Get in touch with our team for a personalized consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}