import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  description: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title, description }: VideoModalProps) {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop()?.split('?')[0] || '';
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-5xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors z-10"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Video Container */}
              <div className="bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Video Header */}
                <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 px-6 py-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>

                {/* Video Player */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={getEmbedUrl(videoUrl)}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
