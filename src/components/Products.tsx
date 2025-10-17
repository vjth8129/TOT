import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { 
  Play, 
  X,
  Calendar,
  User,
  Eye,
  Heart
} from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Brand Launch Campaign",
    category: "Media Production",
    client: "TechCorp Inc.",
    date: "December 2024",
    views: "2.3M",
    likes: "45.2K",
    image: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjByZWVsfGVufDF8fHx8MTc1OTAyODMyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A cinematic brand story that showcases innovation and growth through stunning visuals and compelling narrative.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-amber-600 to-orange-600"
  },
  {
    id: 2,
    title: "Digital Strategy Showcase",
    category: "Digital Marketing",
    client: "StartupCo",
    date: "November 2024",
    views: "1.8M",
    likes: "32.1K",
    image: "https://images.unsplash.com/photo-1625295698206-d28378d2c6ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFkdmVydGlzaW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzU4OTgwMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A comprehensive digital campaign that increased brand awareness by 340% and generated 2M+ impressions.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-red-600 to-pink-600"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Design & Development",
    client: "Fashion House",
    date: "October 2024",
    views: "950K",
    likes: "18.7K",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODk3MTI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "A modern, responsive e-commerce platform with seamless UX and integrated payment solutions.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-orange-600 to-amber-600"
  },
  {
    id: 4,
    title: "Product Launch Video",
    category: "Media Production",
    client: "GadgetZone",
    date: "September 2024",
    views: "3.1M",
    likes: "67.4K",
    image: "https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMHByb2R1Y3Rpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzU5MDI4MzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-end product photography and cinematography showcasing cutting-edge technology.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-red-600 to-orange-600"
  },
  {
    id: 5,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    client: "FoodieFinds",
    date: "August 2024",
    views: "4.2M",
    likes: "89.3K",
    image: "https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODkyNzgyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Multi-platform social strategy that went viral and increased follower engagement by 520%.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-amber-600 to-red-600"
  },
  {
    id: 6,
    title: "Mobile App Design",
    category: "Design & Development",
    client: "HealthTrack",
    date: "July 2024",
    views: "1.5M",
    likes: "28.9K",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTg5NzgwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Intuitive health tracking app with personalized insights and gamified user experience.",
    videoUrl: "https://player.vimeo.com/video/76979871?autoplay=1&loop=1&muted=1",
    gradient: "from-orange-600 to-amber-600"
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Showcase of
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Creative Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the innovative projects that have helped our clients achieve remarkable 
            results and transform their digital presence.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-orange-500/10">
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute inset-0 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                          <Play size={24} className="text-white ml-1" />
                        </div>
                      </motion.button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[80vh] bg-black border-gray-800 p-0">
                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <iframe
                          src={product.videoUrl}
                          className="w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </DialogContent>
                  </Dialog>

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
                      <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
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

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full mt-4 py-3 rounded-2xl bg-gradient-to-r ${product.gradient} text-white font-semibold transition-all duration-300 hover:shadow-xl shadow-lg`}
                    >
                      View Project Details
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl shadow-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}