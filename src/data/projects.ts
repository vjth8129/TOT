// Project data for TOG Pictures
// Edit this file to update projects on the website

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  client: string;
  year: string;
  duration: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Behind the Scenes Documentary",
    category: "Documentary",
    description: "An intimate exploration of the creative process behind major film productions, showcasing the dedication and artistry that goes into every frame. This documentary takes viewers on a journey through the unseen world of filmmaking.",
    thumbnail: "https://images.unsplash.com/photo-1683089906941-3dc61665e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBiZWhpbmQlMjBzY2VuZXN8ZW58MXx8fHwxNzU5NjU2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Major Film Studio",
    year: "2024",
    duration: "45 min"
  },
  {
    id: "2",
    title: "Cycling Championship Highlights",
    category: "Sports",
    description: "High-energy highlight reel showcasing the intensity and passion of competitive cycling. Featuring dramatic slow-motion sequences and dynamic camera work that captures the thrill of competition.",
    thumbnail: "https://images.unsplash.com/photo-1490507278117-59a4ccd0165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwc3BvcnQlMjBhY3Rpb258ZW58MXx8fHwxNzU5NzI1MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Sports Network",
    year: "2024",
    duration: "3 min"
  },
  {
    id: "3",
    title: "Corporate Leadership Summit",
    category: "Corporate",
    description: "Professional corporate video featuring executive interviews and company vision. A sophisticated presentation that communicates leadership values and strategic direction with cinematic quality.",
    thumbnail: "https://images.unsplash.com/photo-1563807893646-b6598a2b6fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzZW50ZXIlMjBzcGVha2luZyUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzU5NzI1MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Tech Corporation",
    year: "2024",
    duration: "12 min"
  },
  {
    id: "4",
    title: "Indie Artist Music Video",
    category: "Music",
    description: "Creative music video with stunning visuals and dynamic storytelling. An artistic collaboration that blends music with innovative cinematography and post-production techniques.",
    thumbnail: "https://images.unsplash.com/photo-1629197305385-9dd1089bcac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8MTc1OTcyNTM1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Independent Artist",
    year: "2023",
    duration: "4 min"
  },
  {
    id: "5",
    title: "Product Launch Campaign",
    category: "Commercial",
    description: "High-impact commercial showcasing innovative product features through dynamic visuals and compelling narrative structure designed to drive consumer engagement.",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nfGVufDF8fHx8MTc1OTcyNTM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Consumer Brand",
    year: "2024",
    duration: "2 min"
  },
  {
    id: "6",
    title: "Wedding Ceremony Highlights",
    category: "Event",
    description: "Emotional wedding documentation capturing the essence of love and celebration. Beautifully crafted storytelling that preserves precious memories for a lifetime.",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNvdmVyYWdlfGVufDF8fHx8MTc1OTcyNTM5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Private Client",
    year: "2024",
    duration: "8 min"
  },
  {
    id: "7",
    title: "Employee Training Module",
    category: "Training",
    description: "Educational content designed to engage and inform employees effectively. Interactive training material that combines learning objectives with compelling visual storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHZpZGVvfGVufDF8fHx8MTc1OTcyNTQwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Fortune 500 Company",
    year: "2024",
    duration: "15 min"
  },
  {
    id: "8",
    title: "Environmental Awareness Campaign",
    category: "Documentary",
    description: "Powerful environmental documentary highlighting climate change impacts and conservation efforts. A thought-provoking piece that inspires action through visual storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwZG9jdW1lbnRhcnl8ZW58MXx8fHwxNzU5NzI1NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Environmental NGO",
    year: "2023",
    duration: "30 min"
  },
  {
    id: "9",
    title: "Fashion Brand Showcase",
    category: "Fashion",
    description: "Stylish fashion video showcasing the latest collection through artistic cinematography and dynamic editing that captures the essence of contemporary design.",
    thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdmlkZW98ZW58MXx8fHwxNzU5NzI1NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    videoUrl: "https://youtu.be/K_ffJVoX2ig",
    client: "Fashion House",
    year: "2024",
    duration: "6 min"
  }
];
