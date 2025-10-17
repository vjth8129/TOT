import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your story to life? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a href="tel:+971501364069" className="text-gray-600 hover:text-red-600 transition-colors">+971501364069</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:contact@togpictures.com" className="text-gray-600 hover:text-red-600 transition-colors">contact@togpictures.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office</h4>
                  <p className="text-gray-600">Tog pictures<br />Bank Street - Mankhool<br />Dubai - UAE</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
              <h4 className="font-bold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  Award-winning creative team
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  State-of-the-art equipment
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  Fast turnaround times
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                  Competitive pricing
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}