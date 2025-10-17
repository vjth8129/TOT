import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Behind the Scenes Documentary",
    category: "Documentary",
    description: "An intimate look at the creative process behind major film productions.",
    thumbnail: "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://example.com/video1.mp4",
    client: "Major Film Studio",
    year: "2024"
  },
  {
    id: 2,
    title: "Cycling Championship Highlights",
    category: "Sports",
    description: "High-energy highlight reel showcasing the intensity and passion of competitive cycling.",
    thumbnail: "https://images.unsplash.com/photo-1490507278117-59a4ccd0165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BvcnQlMjBhY3Rpb258ZW58MXx8fHwxNzU5NzI1MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://example.com/video2.mp4",
    client: "Sports Network",
    year: "2024"
  },
  {
    id: 3,
    title: "Corporate Presentation",
    category: "Corporate",
    description: "Professional corporate video featuring executive interviews and company vision.",
    thumbnail: "https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50ZXIlMjBzcGVha2luZyUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzU5NzI1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://example.com/video3.mp4",
    client: "Tech Corporation",
    year: "2024"
  },
  {
    id: 4,
    title: "Music Video Production",
    category: "Music",
    description: "Creative music video with stunning visuals and dynamic storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1629197305385-9dd1089bcac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1OTcyNTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://example.com/video4.mp4",
    client: "Independent Artist",
    year: "2023"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="py-20 bg-gray-50">
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
            Our <span className="text-red-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of cinematic storytelling and creative excellence
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 transition-colors">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600">{selectedProject.client} • {selectedProject.year}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Video Player Placeholder */}
              <div className="aspect-video bg-gray-900 relative">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 cursor-pointer transition-colors">
                    <Play className="w-12 h-12 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}