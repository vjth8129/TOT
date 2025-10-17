import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "https://images.unsplash.com/photo-1645220127528-a4ffca2d2057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVtYmVycyUyMHBvcnRyYWl0c3xlbnwxfHx8fDE3NTg4NTk2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The team transformed our brand story into a cinematic masterpiece. Our engagement rates increased by 340% and we've never looked back. Their creative vision is unmatched.",
    rating: 5,
    project: "Brand Campaign Video"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1ODc5OTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Working with this agency was a game-changer. They didn't just build us a website – they created a digital experience that converts visitors into customers at an incredible rate.",
    rating: 5,
    project: "Full Website Development"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "GreenSpace Co.",
    image: "https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHBvcnRmb2xpbyUyMG1vY2t1cCUyMGRlc2lnbnxlbnwxfHx8fDE3NTg4MzI3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Their digital marketing strategy tripled our online sales in just 6 months. The ROI has been phenomenal, and their team feels like an extension of our own company.",
    rating: 5,
    project: "Digital Marketing Strategy"
  },
  {
    id: 4,
    name: "David Park",
    role: "Creative Director",
    company: "Artisan Brands",
    image: "https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTg4MTU4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "The documentary series they produced for us was beyond our wildest expectations. It won multiple festival awards and positioned us as thought leaders in our industry.",
    rating: 5,
    project: "Documentary Production"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Brand Manager",
    company: "NextGen Solutions",
    image: "https://images.unsplash.com/photo-1620360362780-d484683ea998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGNhbWVyYSUyMGZpbG0lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU4ODU5NjI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "Their UX/UI design for our mobile app is incredible. We achieved a 4.8-star rating on the App Store and over 100,000 downloads in the first month alone.",
    rating: 5,
    project: "Mobile App Design"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2">
            Client Love
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders and growing brands 
            have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Client Image */}
                    <div className="text-center md:text-left">
                      <div className="relative inline-block">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-lg" />
                        <ImageWithFallback
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="relative w-32 h-32 rounded-full object-cover mx-auto md:mx-0 border-4 border-gray-600"
                        />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h3>
                        <p className="text-purple-400">{testimonials[currentIndex].role}</p>
                        <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                        
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start mt-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="md:col-span-2">
                      <div className="relative">
                        <Quote size={48} className="text-purple-600/30 absolute -top-4 -left-2" />
                        <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic relative z-10 pl-8">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                      </div>
                      
                      <div className="mt-6">
                        <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
                          {testimonials[currentIndex].project}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 hover:border-purple-500 backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700 hover:border-purple-500 backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`text-left p-4 rounded-lg transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-700/50 border-2 border-purple-500' 
                  : 'bg-gray-800/30 border-2 border-transparent hover:border-gray-600'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center space-x-3">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{testimonial.name}</p>
                  <p className="text-gray-400 text-xs truncate">{testimonial.company}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}