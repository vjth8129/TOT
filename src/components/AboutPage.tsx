import { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Users, Video, Zap, ArrowLeft, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { HomeTestimonials } from './HomeTestimonials';

const stats = [
  { icon: Video, number: '500+', label: 'Projects Completed' },
  { icon: Users, number: '200+', label: 'Happy Clients' },
  { icon: Award, number: '50+', label: 'Awards Won' },
  { icon: Zap, number: '10+', label: 'Years Experience' },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: 'Award-winning filmmaker with over 15 years of experience in cinematic storytelling and visual narrative development.',
    email: 'alex@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Producer',
    bio: 'Expert in managing large-scale productions and bringing creative visions to life with precision and artistic flair.',
    email: 'sarah@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Director of Photography',
    bio: 'Master of visual storytelling with a keen eye for capturing compelling narratives through innovative cinematography.',
    email: 'marcus@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Emma Rodriguez',
    role: 'Post-Production Lead',
    bio: 'Specialist in editing, color grading, and visual effects with expertise in bringing raw footage to life.',
    email: 'emma@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'David Kim',
    role: 'Sound Designer',
    bio: 'Audio expert crafting immersive soundscapes that enhance emotional connection and narrative impact.',
    email: 'david@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    name: 'Lisa Thompson',
    role: 'Brand Strategist',
    bio: 'Creative strategist helping brands tell their stories through compelling visual content and marketing campaigns.',
    email: 'lisa@reelstudios.com',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

const values = [
  {
    title: 'Creative Excellence',
    description: 'We push creative boundaries while maintaining the highest standards of visual storytelling and technical execution.'
  },
  {
    title: 'Client Partnership',
    description: 'We believe in collaborative relationships, working closely with clients to understand and exceed their vision.'
  },
  {
    title: 'Innovation First',
    description: 'We embrace cutting-edge technology and innovative techniques to deliver unique and impactful visual content.'
  },
  {
    title: 'Authentic Stories',
    description: 'Every project tells a genuine story that resonates with audiences and creates meaningful connections.'
  }
];

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Darker animated background elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-gray-800/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-l from-gray-600/20 to-red-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-tr from-white/10 to-gray-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </motion.div>

      {/* Hero Section - Dark Theme */}
      <div className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-red-950 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTc1MjMwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Creative Team Meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Darker background pattern */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent"
          />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          {/* Page Title - Dark Theme */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-12"
          >
            {/* Red floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0], 
                    scale: [0, 1, 0],
                    y: [-30, -80, -120],
                    x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                  className="absolute w-1.5 h-1.5 bg-red-500/80 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${75 + Math.random() * 20}%`,
                  }}
                />
              ))}
            </div>
            
            <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 relative">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-r from-white via-red-500 via-gray-300 to-white bg-300% bg-clip-text text-transparent"
                style={{ backgroundSize: '300% 300%' }}
              >
                About
              </motion.span>{' '}
              <motion.span 
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="bg-gradient-to-r from-red-500 via-white via-red-500 to-red-500 bg-300% bg-clip-text text-transparent"
                style={{ backgroundSize: '300% 300%' }}
              >
                Us
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              We are passionate storytellers dedicated to transforming ideas into compelling visual narratives that move, inspire, and captivate audiences worldwide.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Story Section - Dark Theme */}
      <div className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Crafting Stories That{' '}
                <motion.span 
                  className="bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Resonate
                </motion.span>
              </motion.h2>
              
              <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
                {[
                  "Since our founding, we've been at the forefront of visual storytelling, combining cutting-edge technology with timeless narrative techniques to create content that moves, inspires, and captivates audiences.",
                  "Our team of creative professionals brings together diverse expertise in cinematography, editing, sound design, and post-production to deliver exceptional results that exceed expectations.",
                  "From intimate documentaries to large-scale commercial productions, we approach every project with the same level of passion, creativity, and attention to detail that has made us industry leaders."
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="hover:text-gray-300 transition-colors duration-300"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTcyNTQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Creative team working"
                  className="w-full h-96 object-cover"
                />
                <motion.div 
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(239,68,68,0.3), rgba(75,85,99,0.3))',
                      'linear-gradient(45deg, rgba(75,85,99,0.3), rgba(255,255,255,0.2))',
                      'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(239,68,68,0.3))'
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Stats Section - Dark Theme */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden border border-red-500/20"
          >
            {/* Background Animation */}
            <motion.div
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 opacity-10"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(239,68,68,0.4), transparent, rgba(75,85,99,0.4), transparent)'
              }}
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10
                  }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-all duration-300 border border-red-500/30"
                    whileHover={{
                      boxShadow: "0 0 40px rgba(239, 68, 68, 0.8)"
                    }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Client Testimonials Section - Using HomeTestimonials Component */}
      <HomeTestimonials />

      {/* Enhanced Contact Form Section - Dark Theme */}
      <div className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-950 relative overflow-hidden">
        {/* Background Animation */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-5"
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(239,68,68,0.4), transparent, rgba(75,85,99,0.4), transparent)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Get In </span>
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
                Touch
              </motion.span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to bring your story to life? Let's discuss your project and create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">Let's Start a Conversation</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Phone', info: '+971501364069', link: 'tel:+971501364069' },
                  { icon: Mail, title: 'Email', info: 'contact@togpictures.com', link: 'mailto:contact@togpictures.com' },
                  { icon: MapPin, title: 'Office', info: 'Tog pictures\nBank Street - Mankhool\nDubai - UAE', link: null }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center group"
                  >
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                      }}
                      className="bg-red-600/20 backdrop-blur-sm p-4 rounded-full mr-6 border border-red-500/30 group-hover:bg-red-600/30 transition-all duration-300"
                    >
                      <contact.icon className="w-6 h-6 text-red-400" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                      {contact.link ? (
                        <a href={contact.link} className="text-gray-400 hover:text-red-400 transition-colors whitespace-pre-line">
                          {contact.info}
                        </a>
                      ) : (
                        <p className="text-gray-400 whitespace-pre-line">{contact.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h4 className="font-semibold text-white mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/tog.pictures/", color: "from-pink-500 to-purple-600", label: "Instagram" },
                    { icon: Youtube, href: "https://youtube.com/@togpictures", color: "from-red-500 to-red-700", label: "YouTube" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative bg-gradient-to-r ${social.color} p-4 rounded-xl transition-all duration-300 group overflow-hidden shadow-lg`}
                      aria-label={social.label}
                    >
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <social.icon className="w-6 h-6 relative z-10 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-16 p-8 bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700/30"
              >
                <h4 className="font-bold text-white mb-6 text-xl">Why Choose Us?</h4>
                <ul className="space-y-4">
                  {[
                    'Award-winning creative team',
                    'State-of-the-art equipment',
                    'Fast turnaround times',
                    'Competitive pricing'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-4" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/30"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500"
                    placeholder="Enter your email address"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all text-white placeholder-gray-500"
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 40px rgba(239, 68, 68, 0.6)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl relative overflow-hidden group"
                >
                  {/* Button Background Animation */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  />
                  
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}