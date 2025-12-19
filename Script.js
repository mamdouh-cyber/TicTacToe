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

function RandomStart() {
    var randomStart = Math.random();
    XO = randomStart < 0.5 ? "X" : "O";
    
    if (XO == "X") {
        document.getElementById('XS').innerHTML = "(X) Start First";
        document.getElementById('OS').innerHTML = "";
    } else if (XO == "O") {
        document.getElementById('OS').innerHTML = "(O) Start First";
        document.getElementById('XS').innerHTML = "";
    }
}

RandomStart();

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
            return XO;
            return Block1;
        }

        if (XO == "O") {
            document.getElementById('Block1').innerHTML = "O";
            XO = "X";
            Block1 = "O";
            return XO;
            return Block1;
        }
    }

    if (value == 2 && Block2 == "Null") {
        if (XO == "X") {
            document.getElementById('Block2').innerHTML = "X";
            XO = "O";
            Block2 = "X";
            return XO;
            return Block2;
        }

        if (XO == "O") {
            document.getElementById('Block2').innerHTML = "O";

            XO = "X";
            Block2 = "O";
            return XO;
            return Block2;
        }
    }

    if (value == 3 && Block3 == "Null") {
        if (XO == "X") {
            document.getElementById('Block3').innerHTML = "X";
            XO = "O";
            Block3 = "X";
            return XO;
            return Block3;
        }

        if (XO == "O") {
            document.getElementById('Block3').innerHTML = "O";
            XO = "X";
            Block3 = "O";
            return XO;
            return Block3;
        }
    }

    if (value == 4 && Block4 == "Null") {
        if (XO == "X") {
            document.getElementById('Block4').innerHTML = "X";
            XO = "O";
            Block4 = "X";
            return XO;
            return Block4;
        }

        if (XO == "O") {
            document.getElementById('Block4').innerHTML = "O";
            XO = "X";
            Block4 = "O";
            return XO;
            return Block4;
        }
    }

    if (value == 5 && Block5 == "Null") {
        if (XO == "X") {
            document.getElementById('Block5').innerHTML = "X";
            XO = "O";
            Block5 = "X";
            return XO;
            return Block5;
        }

        if (XO == "O") {
            document.getElementById('Block5').innerHTML = "O";
            XO = "X";
            Block5 = "O";
            return XO;
            return Block5;
        }
    }

    if (value == 6 && Block6 == "Null") {
        if (XO == "X") {
            document.getElementById('Block6').innerHTML = "X";
            XO = "O";
            Block6 = "X";
            return XO;
            return Block6;
        }

        if (XO == "O") {
            document.getElementById('Block6').innerHTML = "O";
            XO = "X";
            Block6 = "O";
            return XO;
            return Block6;
        }
    }

    if (value == 7 && Block7 == "Null") {
        if (XO == "X") {
            document.getElementById('Block7').innerHTML = "X";
            XO = "O";
            Block7 = "X";
            return XO;
            return Block7;
        }

        if (XO == "O") {
            document.getElementById('Block7').innerHTML = "O";
            XO = "X";
            Block7 = "O";
            return XO;
            return Block7;
        }
    }

    if (value == 8 && Block8 == "Null") {
        if (XO == "X") {
            document.getElementById('Block8').innerHTML = "X";
            XO = "O";
            Block8 = "X";
            return XO;
            return Block8;
        }

        if (XO == "O") {
            document.getElementById('Block8').innerHTML = "O";
            XO = "X";
            Block8 = "O";
            return XO;
            return Block8;
        }
    }

    if (value == 9  && Block9 == "Null") {
        if (XO == "X") {
            document.getElementById('Block9').innerHTML = "X";
            XO = "O";
            Block9 = "X";
            return XO;
            return Block9;
        }

        if (XO == "O") {
            document.getElementById('Block9').innerHTML = "O";
            XO = "X";
            Block9 = "O";
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        alert("O Has Win");
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
        }
    }
}