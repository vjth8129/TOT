import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { VideoModal } from './VideoModal';
import { ArrowLeft, Play, Calendar, User, Tag } from 'lucide-react';
import { projectsData, type Project } from '../data/projects';

interface ProjectsPageProps {
  onBack: () => void;
}

export function ProjectsPage({ onBack }: ProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);

  // Load project data - tries JSON first, falls back to imported data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Try to fetch from videos.json file first (for easy updates after deployment)
        const response = await fetch('/videos.json');
        
        if (response.ok) {
          const data = await response.json();
          const projects = data.projects || [];
          
          if (projects.length > 0) {
            // Transform the data to match Project interface
            const transformedProjects = projects.map((p: any) => ({
              id: p.id,
              title: p.title,
              category: p.category,
              type: p.type,
              duration: p.duration,
              client: p.client,
              videoUrl: p.videoUrl,
              thumbnail: p.thumbnail,
              description: p.description,
              embedUrl: p.videoUrl, // Use videoUrl as embedUrl for now
              year: "2024",
              tags: [p.type, p.category]
            }));
            
            setAllProjects(transformedProjects);
            
            // Extract unique categories dynamically
            const uniqueCategories = Array.from(
              new Set(transformedProjects.map((p: Project) => p.category))
            ).sort();
            setCategories(["All", ...uniqueCategories]);
            setIsLoading(false);
            return;
          }
        }
      } catch (error) {
        console.log('videos.json file not available, using imported data');
      }
      
      // Use imported data as fallback
      setAllProjects(projectsData);
      
      const uniqueCategories = Array.from(
        new Set(projectsData.map(p => p.category))
      ).sort();
      setCategories(["All", ...uniqueCategories]);
      
      setIsLoading(false);
    };
    
    loadProjects();
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const playVideo = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Dark Theme */}
      <div className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-red-950 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1751823886813-0cfc86cb9478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcmVlbCUyMGNpbmVtYSUyMG1vdmllfGVufDF8fHx8MTc1OTgwNzczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Film Reel Cinema"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        {/* Darker Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated film strip elements - darker */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -100, rotate: -15 }}
                animate={{ 
                  opacity: [0, 0.4, 0], 
                  x: [-100, 1000],
                  rotate: [-15, 15, -15]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-32 h-6 bg-gradient-to-r from-red-500/20 to-red-700/30 rounded"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                }}
              />
            ))}
          </div>

          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="text-red-500">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse portfolio of visual storytelling across multiple genres and formats
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter - Dark Theme */}
      <div className="py-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white shadow-lg border-red-500'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 hover:text-white shadow border-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects Grid - Dark Theme */}
      <div className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
              <p className="text-gray-400 mt-4">Loading projects...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900/50 shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.02] border border-gray-800/50">
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      
                      {/* Play Button - Top Left */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playVideo(project);
                        }}
                        className="absolute top-4 left-4 bg-red-600/90 hover:bg-red-700 text-white rounded-full p-3 transition-all duration-300 shadow-lg backdrop-blur-sm border border-red-500/30 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 z-10"
                      >
                        <Play className="w-5 h-5" fill="currentColor" />
                      </button>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-gray-700/50">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Project Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoUrl={selectedProject.videoUrl}
          title={selectedProject.title}
          description={selectedProject.description}
        />
      )}
    </div>
  );
}
