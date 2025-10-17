#!/bin/bash

echo "🚀 Building the project..."
npm run build

echo "📁 Build completed! The videos.json file is now in the build directory."
echo "📝 You can edit build/videos.json to change videos without rebuilding!"

echo ""
echo "🌐 Starting a simple server to test the build..."
echo "The website will be available at http://localhost:8080"
echo "Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    cd build && python3 -m http.server 8080
elif command -v python &> /dev/null; then
    cd build && python -m SimpleHTTPServer 8080
else
    echo "❌ Python not found. Please install Python to run the local server."
    echo "Alternatively, you can serve the build directory using any web server."
fi
