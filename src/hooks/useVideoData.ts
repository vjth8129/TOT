import { useState, useEffect } from 'react';

export interface VideoData {
  showreel: {
    title: string;
    videoUrl: string;
    label: string;
    duration: string;
  };
  projects: Array<{
    id: number;
    title: string;
    category: string;
    type: string;
    duration: string;
    client: string;
    videoUrl: string;
    description: string;
    thumbnail: string;
  }>;
  hero: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    description: string;
  };
}

export function useVideoData() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/videos.json');
        
        if (!response.ok) {
          throw new Error(`Failed to fetch video data: ${response.status}`);
        }
        
        const data = await response.json();
        setVideoData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching video data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load video data');
        
        // Fallback data in case JSON fails to load
        setVideoData({
          showreel: {
            title: "SHOWREEL",
            videoUrl: "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            label: "Our Latest Showreel 2024",
            duration: "2:30"
          },
          projects: [],
          hero: {
            backgroundImage: "https://images.unsplash.com/photo-1632670535530-aaf6e90042ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdmlkZW8lMjBwcm9kdWN0aW9uJTIwc3R1ZGlvJTIwZmlsbW1ha2VyfGVufDF8fHx8MTc1OTgxMTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            title: "Bringing Stories to Life",
            subtitle: "One Frame at a Time",
            description: "We create high-quality commercials, corporate videos, social media content, and more, bringing your ideas to life with expert storytelling."
          }
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  return { videoData, loading, error };
}
