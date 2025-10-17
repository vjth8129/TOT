# TOG Pictures - Content Management Guide

## How to Update Projects and Videos

This guide explains how to update the projects and videos displayed on your website.

---

## Managing the Showreel Video

### Location
`/public/videos.json`

### How to Update the Showreel

1. **Open the file**: Navigate to `/public/videos.json` in your website files
2. **Locate the showreel section**: Find the `"showreel"` object at the top of the file
3. **Update the video information**:

```json
"showreel": {
  "id": 1,
  "title": "Your Video Title",
  "videoUrl": "https://youtu.be/VIDEO_ID",
  "embedUrl": "https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1",
  "thumbnail": "https://your-thumbnail-url.jpg",
  "category": "Showreel"
}
```

### Field Descriptions

- **id**: Keep as 1 (required)
- **title**: The title of your showreel video
- **videoUrl**: The shareable YouTube URL (get from YouTube's "Share" button)
- **embedUrl**: The embed URL with autoplay parameters (replace VIDEO_ID in TWO places)
- **thumbnail**: URL to a thumbnail image (optional - used while loading)
- **category**: The video category name

### Step-by-Step: Changing the Showreel Video

1. **Get your YouTube video ID**:
   - Open your video on YouTube
   - Click the "Share" button
   - Copy the URL (e.g., `https://youtu.be/K_ffJVoX2ig`)
   - The VIDEO_ID is the part after `youtu.be/` (e.g., `K_ffJVoX2ig`)

2. **Update the videoUrl**:
   ```json
   "videoUrl": "https://youtu.be/YOUR_VIDEO_ID"
   ```

3. **Update the embedUrl** (IMPORTANT: Replace VIDEO_ID in TWO places):
   ```json
   "embedUrl": "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
   ```

4. **Save the file** and refresh your website

### Example

If your YouTube video is `https://youtu.be/dQw4w9WgXcQ`:

```json
"showreel": {
  "id": 1,
  "title": "TOG Pictures Showreel 2025",
  "videoUrl": "https://youtu.be/dQw4w9WgXcQ",
  "embedUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1",
  "thumbnail": "https://images.unsplash.com/photo-1618256506572-4c3a7082e4c1",
  "category": "Showreel"
}
```

---

## Managing Projects

### Location
`/public/projects.json`

### Two Options for Managing Projects

#### Option 1: Edit the TypeScript Data File (Requires Rebuild)
**Location**: `/data/projects.ts`

This is the main source file. Edit this file if you have access to rebuild the application.

#### Option 2: Edit the JSON File (No Rebuild Required) 
**Location**: `/public/projects.json`

After deployment, you can edit this JSON file directly on your server and the changes will appear immediately when users refresh the page (no rebuild needed).

### Instructions

1. **Open the file**: Navigate to `/public/projects.json` in your website files
2. **Edit the JSON**: Modify the content following the structure below
3. **Save the file**: Save your changes
4. **Refresh the website**: The changes will appear immediately when you refresh the page

### Project Structure

Each project in the `projects.json` file has the following fields:

```json
{
  "id": "1",
  "title": "Project Title",
  "category": "Documentary",
  "description": "Full description of the project...",
  "thumbnail": "https://example.com/image.jpg",
  "videoUrl": "https://youtu.be/VIDEO_ID",
  "client": "Client Name",
  "year": "2024",
  "duration": "45 min"
}
```

### Field Descriptions

- **id**: Unique identifier (must be a string). Use sequential numbers: "1", "2", "3", etc.
- **title**: The name of your project
- **category**: Choose from: Documentary, Sports, Corporate, Music, Commercial, Event, Training, Fashion (or create new ones)
- **description**: A detailed description of the project (1-3 sentences recommended)
- **thumbnail**: URL to the project's thumbnail image (use Unsplash or upload your own)
- **videoUrl**: YouTube video URL (format: `https://youtu.be/VIDEO_ID`)
- **client**: The client or organization name
- **year**: Year the project was completed
- **duration**: Video length (e.g., "3 min", "45 min", "1 hr")

### Adding a New Project

1. Copy an existing project entry
2. Change the `id` to the next number
3. Update all fields with your new project information
4. Make sure to add a comma after the previous project entry
5. Save the file

### Example - Adding a New Project

```json
{
  "projects": [
    {
      "id": "1",
      "title": "Existing Project",
      ...existing fields...
    },
    {
      "id": "2",
      "title": "New Project Title",
      "category": "Commercial",
      "description": "This is my new project showcasing...",
      "thumbnail": "https://images.unsplash.com/photo-123456789",
      "videoUrl": "https://youtu.be/NEW_VIDEO_ID",
      "client": "New Client",
      "year": "2025",
      "duration": "5 min"
    }
  ]
}
```

### Removing a Project

1. Find the project you want to remove
2. Delete the entire project object including the curly braces `{ }`
3. Remove the comma if it's the last item in the list
4. Save the file

---

## Tips

- **JSON Syntax**: Be careful with commas and quotes. Use a JSON validator if needed: https://jsonlint.com/
- **Thumbnail Images**: Use high-quality images (recommended: 1920x1080 or 16:9 aspect ratio)
- **Video URLs**: Only YouTube videos are supported
- **Categories**: The category filter buttons are automatically generated from your projects
- **Refresh Cache**: After making changes, refresh your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## Getting Video Thumbnails from Unsplash

1. Visit https://unsplash.com
2. Search for relevant images (e.g., "corporate meeting", "sports action")
3. Right-click on an image and select "Copy Image Address"
4. Paste the URL into the `thumbnail` field

---

## Need Help?

If you encounter issues:
1. Check your JSON syntax at https://jsonlint.com/
2. Make sure all quotes and commas are in place
3. Ensure the `id` field is unique for each project
4. Make sure VIDEO_ID appears in BOTH places in the embedUrl
5. Refresh your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Contact**: For technical support, contact your web developer.
