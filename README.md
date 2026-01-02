# XO Game (Tic Tac Toe)

A fully-featured Tic Tac Toe game with AI opponent and multiple difficulty levels.

## Features

- **Player vs Player (PVP)** mode
- **Player vs AI (PVAI)** mode with three difficulty levels:
  - Easy AI: Makes 70% random moves, 30% smart moves
  - Medium AI: Makes 40% random moves, 60% smart moves  
  - Hard AI: Always makes optimal moves using minimax algorithm
- **Smart win detection** - automatically detects wins and starts new game
- **Winner starts first** - winner of previous game starts next game
- **Responsive design** - works on desktop and mobile devices
- **Automatic game reset** when changing difficulty levels
- **Dynamic UI** - AI difficulty buttons hide/show based on game mode

## How to Play

1. Choose game mode: "2 Players" or "vs AI"
2. If playing vs AI, select difficulty level (Easy, Medium, Hard)
3. Players take turns placing X's and O's on the 3x3 grid
4. First player to get 3 of their marks in a row (up, down, across, or diagonally) wins
5. After a win, a new game starts automatically with the winner going first

## Game Controls

- **Game Mode Selection**: Switch between PVP and PVAI
- **AI Difficulty**: Choose Easy, Medium, or Hard when in PVAI mode
- **Game Board**: Click on any empty square to place your mark

## Running the Game

### Method 1: Python Built-in Server
```bash
cd "d:/Programing Project/XO"
python -m http.server 8000
```

Then open your browser and go to: http://localhost:8000/XO-Game.html

### Method 2: Using the Server Script
```bash
cd "d:/Programing Project/XO"
python server.py
```

Then open your browser and go to: http://localhost:8000/XO-Game.html

## Technical Details

- **Frontend**: HTML, CSS, JavaScript
- **AI Algorithm**: Minimax algorithm for Hard AI, with randomized moves for Easy/Medium
- **Responsive Design**: Works on various screen sizes
- **State Management**: Tracks game state, scores, and win history

## Files

- `XO-Game.html` - Main game page
- `Script.js` - Game logic and AI implementation
- `Style.css` - Styling and responsive design
- `server.py` - Python server script for hosting

## Browser Compatibility

The game works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Publishing

To publish this game on a web server:
1. Upload all files (XO-Game.html, Script.js, Style.css) to your web server
2. Ensure the file paths in the HTML are correct
3. The game should run without any backend requirements