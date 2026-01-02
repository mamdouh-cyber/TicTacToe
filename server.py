#!/usr/bin/env python3
"""
Simple HTTP server for the XO Game
This server hosts the XO game files on port 8000
"""

import http.server
import socketserver
import os
from pathlib import Path

# Change to the XO directory
xo_dir = Path(__file__).parent
os.chdir(xo_dir)

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

print(f"Starting XO Game server on http://localhost:{PORT}")
print(f"Serving files from: {xo_dir}")
print("Press Ctrl+C to stop the server")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"XO Game server running at http://localhost:{PORT}")
        print("Game is accessible at: http://localhost:8000/XO-Game.html")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped by user")
except Exception as e:
    print(f"Server error: {e}")