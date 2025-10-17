# Dynamic Video Management System

## 🎬 How to Change Videos Without Rebuilding

This project is set up so you can easily change videos and content without rebuilding the entire project!

### 📁 File Structure
```
build/
├── index.html
├── videos.json  ← Edit this file to change videos
└── assets/
    └── ... (compiled files)
```

### 🔧 How to Update Videos

1. **Build the project once:**
   ```bash
   npm run build
   ```

2. **Edit the videos.json file in the build directory:**
   ```bash
   nano build/videos.json
   # or use any text editor
   ```

3. **Update the video URLs, titles, and descriptions as needed**

4. **Deploy the build folder** - no need to rebuild!

### 📝 JSON Structure

The `videos.json` file contains:

```json
{
  "showreel": {
    "title": "SHOWREEL",
    "videoUrl": "https://your-video-url.com/video.jpg",
    "label": "Our Latest Showreel 2024",
    "duration": "2:30"
  },
  "projects": [
    {
      "id": 1,
      "title": "Project Title",
      "category": "youtube",
      "type": "YouTube Video",
      "duration": "5:30",
      "client": "Client Name",
      "videoUrl": "https://your-video-url.com/thumbnail.jpg",
      "description": "Project description",
      "thumbnail": "https://your-video-url.com/thumbnail.jpg"
    }
  ],
  "hero": {
    "backgroundImage": "https://your-image-url.com/hero-bg.jpg",
    "title": "Bringing Stories to Life",
    "subtitle": "One Frame at a Time",
    "description": "Your description here"
  }
}
```

### 🚀 Quick Start

1. **Build and serve locally:**
   ```bash
   ./build-and-serve.sh
   ```

2. **Or manually:**
   ```bash
   npm run build
   cd build
   python3 -m http.server 8080
   ```

3. **Visit:** http://localhost:8080

### ✨ Benefits

- ✅ **No rebuild needed** - just edit the JSON file
- ✅ **Easy content management** - non-technical users can update videos
- ✅ **Fast updates** - changes take effect immediately
- ✅ **Version control** - track changes to your content
- ✅ **Fallback system** - if JSON fails, uses default content

### 🎯 What You Can Change

- **Showreel video** and title
- **Project videos** and descriptions
- **Hero background** image
- **Project categories** and types
- **Client names** and durations
- **All text content**

### 🔄 Workflow

1. Make changes to `build/videos.json`
2. Refresh the website
3. Changes are live immediately!
4. Deploy the updated `build` folder to your server

This system makes it super easy to manage your video content without touching any code!
