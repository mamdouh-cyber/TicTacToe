var Block1 = "Null";
var Block2 = "Null";
var Block3 = "Null";
var Block4 = "Null";
var Block5 = "Null";
var Block6 = "Null";
var Block7 = "Null";
var Block8 = "Null";
var Block9 = "Null";
var scoreX = 1;
var scoreO = 1;
var XO = "X";

// Game mode: 'PVP' for player vs player, 'PVAI' for player vs AI
var gameMode = 'PVAI';

// AI player symbol (either 'X' or 'O')
var aiSymbol = 'O';

// Human player symbol
var humanSymbol = 'X';

// AI difficulty level ('easy', 'medium', 'hard')
var aiDifficulty = 'hard';

// Track the winner to determine who starts next game
var lastWinner = 'Null'; // 'X', 'O', or 'Null' for draw

function RandomStart() {
    // If there was a winner in the last game, that player starts first
    if (lastWinner !== 'Null') {
        XO = lastWinner;
    } else {
        // Otherwise, random start
        var randomStart = Math.random();
        XO = randomStart < 0.5 ? "X" : "O";
        
        // If playing against AI, make sure human starts first in the very first game
        if (gameMode === 'PVAI') {
            XO = humanSymbol;
        }
    }
    
    if (XO == "X") {
        document.getElementById('XS').innerHTML = "(X) Start First";
        document.getElementById('OS').innerHTML = "";
    } else if (XO == "O") {
        document.getElementById('OS').innerHTML = "(O) Start First";
        document.getElementById('XS').innerHTML = "";
    }
    
    // If AI is playing and it's AI's turn after random start, make AI move
    if (gameMode === 'PVAI' && XO === aiSymbol) {
        setTimeout(makeAIMove, 500); // Delay to make it look like AI is thinking
    }
}

// Function to get the current board state
function getBoardState() {
    return [Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9];
}

// Function to check if a player has won
function checkWin(board, player) {
    // Check all possible winning combinations
    return (
        (board[0] === player && board[1] === player && board[2] === player) || // Row 1
        (board[3] === player && board[4] === player && board[5] === player) || // Row 2
        (board[6] === player && board[7] === player && board[8] === player) || // Row 3
        (board[0] === player && board[3] === player && board[6] === player) || // Column 1
        (board[1] === player && board[4] === player && board[7] === player) || // Column 2
        (board[2] === player && board[5] === player && board[8] === player) || // Column 3
        (board[0] === player && board[4] === player && board[8] === player) || // Diagonal 1
        (board[2] === player && board[4] === player && board[6] === player)   // Diagonal 2
    );
}

// Function to check if the board is full (draw)
function isBoardFull() {
    return Block1 !== "Null" && Block2 !== "Null" && Block3 !== "Null" &&
           Block4 !== "Null" && Block5 !== "Null" && Block6 !== "Null" &&
           Block7 !== "Null" && Block8 !== "Null" && Block9 !== "Null";
}

// Minimax algorithm for AI decision making
function minimax(board, depth, isMaximizing) {
    // Check if game is over and return score
    if (checkWin(board, aiSymbol)) {
        return 10 - depth; // Prefer quicker wins
    }
    if (checkWin(board, humanSymbol)) {
        return depth - 10; // Prefer slower losses
    }
    if (board.every(cell => cell !== "Null")) {
        return 0; // Draw
    }

    if (isMaximizing) {
        // AI's turn - maximize score
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "Null") {
                board[i] = aiSymbol;
                let score = minimax(board, depth + 1, false);
                board[i] = "Null"; // Undo move
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        // Human's turn - minimize score
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === "Null") {
                board[i] = humanSymbol;
                let score = minimax(board, depth + 1, true);
                board[i] = "Null"; // Undo move
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Function to get a random move for easy AI
function getRandomMove() {
    let availableMoves = [];
    for (let i = 0; i < 9; i++) {
        if ([Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9][i] === "Null") {
            availableMoves.push(i);
        }
    }
    if (availableMoves.length > 0) {
        return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }
    return -1;
}

// Function to get a move based on difficulty level
function getAIMove() {
    // Get the current board state
    let board = getBoardState();
    
    // Based on difficulty level, choose how to make the move
    if (aiDifficulty === 'easy') {
        // Easy: 70% random moves, 30% smart moves
        if (Math.random() < 0.7) {
            return getRandomMove();
        } else {
            return getSmartMove(board);
        }
    } else if (aiDifficulty === 'medium') {
        // Medium: 40% random moves, 60% smart moves
        if (Math.random() < 0.4) {
            return getRandomMove();
        } else {
            return getSmartMove(board);
        }
    } else { // hard
        // Hard: Always smart moves
        return getSmartMove(board);
    }
}

// Function to get a smart move using minimax
function getSmartMove(board) {
    // Find the best move using minimax
    let bestScore = -Infinity;
    let bestMove = -1;
    
    for (let i = 0; i < 9; i++) {
        if (board[i] === "Null") {
            board[i] = aiSymbol;
            let score = minimax(board, 0, false);
            board[i] = "Null"; // Undo move
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    
    return bestMove;
}

// Function to make AI move
function makeAIMove() {
    // If game mode is not vs AI, don't make AI move
    if (gameMode !== 'PVAI') return;
    
    // If it's not AI's turn, return
    if (XO !== aiSymbol) return;
    
    // Get move based on difficulty level
    let aiMove = getAIMove();
    
    // Make the move
    if (aiMove !== -1) {
        // Convert array index to block number (1-9)
        let blockNumber = aiMove + 1;
        AddXO(blockNumber.toString());
        
        // Update UI to show AI's turn
        if (XO === "X") {
            document.getElementById('XS').innerHTML = "(X) turn";
            document.getElementById('OS').innerHTML = "";
        } else if (XO === "O") {
            document.getElementById('OS').innerHTML = "(O) turn";
            document.getElementById('XS').innerHTML = "";
        }
    }
}

// Function to switch game mode
function switchGameMode(mode) {
    gameMode = mode;
    resetGame();
    
    if (mode === 'PVAI') {
        document.getElementById('gameModeText').innerHTML = "Playing vs AI";
        // Show AI difficulty buttons
        document.getElementById('difficultySection').style.display = 'block';
    } else {
        document.getElementById('gameModeText').innerHTML = "Playing vs Player";
        // Hide AI difficulty buttons
        document.getElementById('difficultySection').style.display = 'none';
    }
}

// Function to switch AI difficulty
function switchDifficulty(difficulty) {
    aiDifficulty = difficulty;
    
    // Update UI to show current difficulty
    let difficultyText = "";
    switch(difficulty) {
        case 'easy':
            difficultyText = "Easy AI";
            break;
        case 'medium':
            difficultyText = "Medium AI";
            break;
        case 'hard':
            difficultyText = "Hard AI";
            break;
    }
    document.getElementById('difficultyText').innerHTML = difficultyText;
    
    // Reset the game when changing difficulty to start fresh
    resetGame();
}

RandomStart();

// Initialize the visibility of difficulty section based on initial game mode
if (gameMode === 'PVP') {
    document.getElementById('difficultySection').style.display = 'none';
} else { // PVAI
    document.getElementById('difficultySection').style.display = 'block';
}

function WhoPlay() {
    if (XO == "X") {
        document.getElementById('XS').innerHTML = "(X) turn";
        document.getElementById('OS').innerHTML = "";
    }else if (XO == "O") {
        document.getElementById('OS').innerHTML = "(O) turn";
        document.getElementById('XS').innerHTML = "";
    }
}

function AddXO(value) {
    if (value == 1 && Block1 == "Null") {
        if (XO == "X") {
            document.getElementById('Block1').innerHTML = "X";
            XO = "O";
            Block1 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block1;
        }

        if (XO == "O") {
            document.getElementById('Block1').innerHTML = "O";
            XO = "X";
            Block1 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block1;
        }
    }

    if (value == 2 && Block2 == "Null") {
        if (XO == "X") {
            document.getElementById('Block2').innerHTML = "X";
            XO = "O";
            Block2 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block2;
        }

        if (XO == "O") {
            document.getElementById('Block2').innerHTML = "O";
            XO = "X";
            Block2 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block2;
        }
    }

    if (value == 3 && Block3 == "Null") {
        if (XO == "X") {
            document.getElementById('Block3').innerHTML = "X";
            XO = "O";
            Block3 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block3;
        }

        if (XO == "O") {
            document.getElementById('Block3').innerHTML = "O";
            XO = "X";
            Block3 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block3;
        }
    }

    if (value == 4 && Block4 == "Null") {
        if (XO == "X") {
            document.getElementById('Block4').innerHTML = "X";
            XO = "O";
            Block4 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block4;
        }

        if (XO == "O") {
            document.getElementById('Block4').innerHTML = "O";
            XO = "X";
            Block4 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block4;
        }
    }

    if (value == 5 && Block5 == "Null") {
        if (XO == "X") {
            document.getElementById('Block5').innerHTML = "X";
            XO = "O";
            Block5 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block5;
        }

        if (XO == "O") {
            document.getElementById('Block5').innerHTML = "O";
            XO = "X";
            Block5 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block5;
        }
    }

    if (value == 6 && Block6 == "Null") {
        if (XO == "X") {
            document.getElementById('Block6').innerHTML = "X";
            XO = "O";
            Block6 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block6;
        }

        if (XO == "O") {
            document.getElementById('Block6').innerHTML = "O";
            XO = "X";
            Block6 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block6;
        }
    }

    if (value == 7 && Block7 == "Null") {
        if (XO == "X") {
            document.getElementById('Block7').innerHTML = "X";
            XO = "O";
            Block7 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block7;
        }

        if (XO == "O") {
            document.getElementById('Block7').innerHTML = "O";
            XO = "X";
            Block7 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block7;
        }
    }

    if (value == 8 && Block8 == "Null") {
        if (XO == "X") {
            document.getElementById('Block8').innerHTML = "X";
            XO = "O";
            Block8 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block8;
        }

        if (XO == "O") {
            document.getElementById('Block8').innerHTML = "O";
            XO = "X";
            Block8 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block8;
        }
    }

    if (value == 9  && Block9 == "Null") {
        if (XO == "X") {
            document.getElementById('Block9').innerHTML = "X";
            XO = "O";
            Block9 = "X";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block9;
        }

        if (XO == "O") {
            document.getElementById('Block9').innerHTML = "O";
            XO = "X";
            Block9 = "O";
            
            // If playing against AI, make AI move after human move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            // Update the UI to show whose turn it is
            WhoPlay();
            
            // Check for win/draw after the move
            setTimeout(function() {
                CheckWhoWin();
                Draw();
            }, 50); // Small delay to ensure the move is visually updated
            
            return XO;
            return Block9;
        }
    }
}

function CheckWhoWin() {
    if (Block1 == "X" && Block2 == "X" && Block3 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block4 == "X" && Block5 == "X" && Block6 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block7 == "X" && Block8 == "X" && Block9 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block1 == "X" && Block4 == "X" && Block7 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block2 == "X" && Block5 == "X" && Block8 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block3 == "X" && Block6 == "X" && Block9 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block1 == "X" && Block5 == "X" && Block9 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }else if (Block3 == "X" && Block5 == "X" && Block7 == "X") {
        alert("X Has Win");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreXValue').innerHTML = scoreX;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreX += 1;
        lastWinner = "X"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreX;
        return XO;
    }

    if (Block1 == "O" && Block2 == "O" && Block3 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block4 == "O" && Block5 == "O" && Block6 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block7 == "O" && Block8 == "O" && Block9 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block1 == "O" && Block4 == "O" && Block7 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block2 == "O" && Block5 == "O" && Block8 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block3 == "O" && Block6 == "O" && Block9 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block1 == "O" && Block5 == "O" && Block9 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }else if (Block3 == "O" && Block5 == "O" && Block7 == "O") {
        alert("O Wins");
        document.getElementById('Block1').innerHTML = "";
        document.getElementById('Block2').innerHTML = "";
        document.getElementById('Block3').innerHTML = "";
        document.getElementById('Block4').innerHTML = "";
        document.getElementById('Block5').innerHTML = "";
        document.getElementById('Block6').innerHTML = "";
        document.getElementById('Block7').innerHTML = "";
        document.getElementById('Block8').innerHTML = "";
        document.getElementById('Block9').innerHTML = "";
        document.getElementById('ScoreOValue').innerHTML = scoreO;
        Block1 = "Null";
        Block2 = "Null";
        Block3 = "Null";
        Block4 = "Null";
        Block5 = "Null";
        Block6 = "Null";
        Block7 = "Null";
        Block8 = "Null";
        Block9 = "Null";
        scoreO += 1;
        lastWinner = "O"; // Track the winner
        RandomStart();
        return Block1;
        return Block2;
        return Block3;
        return Block4;
        return Block5;
        return Block6;
        return Block7;
        return Block8;
        return Block9;
        return scoreO;
        return XO;
    }
    
    // Check for draw if no winner and all blocks are filled
    Draw();
}

function Draw() {
    // Check if all blocks are filled (none are "Null")
    if (Block1 != "Null" && Block2 != "Null" && Block3 != "Null" &&
        Block4 != "Null" && Block5 != "Null" && Block6 != "Null" &&
        Block7 != "Null" && Block8 != "Null" && Block9 != "Null") {
        
        // Check if no one has won (all win conditions failed)
        var xWon = (Block1 == "X" && Block2 == "X" && Block3 == "X") ||
                   (Block4 == "X" && Block5 == "X" && Block6 == "X") ||
                   (Block7 == "X" && Block8 == "X" && Block9 == "X") ||
                   (Block1 == "X" && Block4 == "X" && Block7 == "X") ||
                   (Block2 == "X" && Block5 == "X" && Block8 == "X") ||
                   (Block3 == "X" && Block6 == "X" && Block9 == "X") ||
                   (Block1 == "X" && Block5 == "X" && Block9 == "X") ||
                   (Block3 == "X" && Block5 == "X" && Block7 == "X");
        
        var oWon = (Block1 == "O" && Block2 == "O" && Block3 == "O") ||
                   (Block4 == "O" && Block5 == "O" && Block6 == "O") ||
                   (Block7 == "O" && Block8 == "O" && Block9 == "O") ||
                   (Block1 == "O" && Block4 == "O" && Block7 == "O") ||
                   (Block2 == "O" && Block5 == "O" && Block8 == "O") ||
                   (Block3 == "O" && Block6 == "O" && Block9 == "O") ||
                   (Block1 == "O" && Block5 == "O" && Block9 == "O") ||
                   (Block3 == "O" && Block5 == "O" && Block7 == "O");
        
        // If no one won, it's a draw
        if (!xWon && !oWon) {
            alert("Draw no one win");
            // Reset the board
            document.getElementById('Block1').innerHTML = "";
            document.getElementById('Block2').innerHTML = "";
            document.getElementById('Block3').innerHTML = "";
            document.getElementById('Block4').innerHTML = "";
            document.getElementById('Block5').innerHTML = "";
            document.getElementById('Block6').innerHTML = "";
            document.getElementById('Block7').innerHTML = "";
            document.getElementById('Block8').innerHTML = "";
            document.getElementById('Block9').innerHTML = "";
            Block1 = "Null";
            Block2 = "Null";
            Block3 = "Null";
            Block4 = "Null";
            Block5 = "Null";
            Block6 = "Null";
            Block7 = "Null";
            Block8 = "Null";
            Block9 = "Null";
            lastWinner = "Null"; // Reset last winner on draw
            RandomStart();
            
            // If playing against AI and it's AI's turn, make AI move
            if (gameMode === 'PVAI' && XO === aiSymbol) {
                setTimeout(makeAIMove, 500);
            }
            
            return Block1;
            return Block2;
            return Block3;
            return Block4;
            return Block5;
            return Block6;
            return Block7;
            return Block8;
            return Block9;
        }
    }
}

// Function to reset the game
function resetGame() {
    document.getElementById('Block1').innerHTML = "";
    document.getElementById('Block2').innerHTML = "";
    document.getElementById('Block3').innerHTML = "";
    document.getElementById('Block4').innerHTML = "";
    document.getElementById('Block5').innerHTML = "";
    document.getElementById('Block6').innerHTML = "";
    document.getElementById('Block7').innerHTML = "";
    document.getElementById('Block8').innerHTML = "";
    document.getElementById('Block9').innerHTML = "";
    Block1 = "Null";
    Block2 = "Null";
    Block3 = "Null";
    Block4 = "Null";
    Block5 = "Null";
    Block6 = "Null";
    Block7 = "Null";
    Block8 = "Null";
    Block9 = "Null";
    lastWinner = "Null"; // Reset last winner
    RandomStart();
}

// Function to reset the scores
function resetScore() {
    scoreX = 0;
    scoreO = 0;
    document.getElementById('ScoreXValue').innerHTML = scoreX;
    document.getElementById('ScoreOValue').innerHTML = scoreO;
    
    // Also reset the last winner so the next game starts with a random player
    lastWinner = "Null";
    resetGame();
}