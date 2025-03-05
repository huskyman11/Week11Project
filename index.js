// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML element of choice.


// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.

// A heading should say whether it is X's or O's turn and change with each move made.

// A button should be available to clear the grid and restart the game.

// When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.


// Setting the IDs for each square on the board:

let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');
let box9 = $('#box9');

let player1 = "X";
let player2 = "O";

let turn = 0;

let winner = false


// CUrrent player
let currentPlayer= '';

// Hiding the popups before gameplay warrants them

$('#alertStart').hide();
$('#alertWinner').hide();
$('#alertTie').hide();

const winningGame = [
    [box1,box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1,box4,box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7]
];

const endGame=() => {
    console.log("GAMEOVER");
    $(".box").css("pointer-events", "none");
}

const checkForWin = (currentPlayer, a, b, c) => {

    if (a.text()=== currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer){
        winner = true;
        console.log('WINNER, WINNER, CHICKEN DINNER !!');

        a.removeClass('text-info bg-dark');
        b.removeClass('text-info bg-dark');
        c.removeClass('text-info bg-dark');

        a.addClass('text-dark bg-info');
        b.addClass('text-dark bg-info');
        c.addClass('text-dark bg-info');

        if(currentPlayer === 'X'){
            currentPlayer = "Player 1";}
       else {currentPlayer = "Player 2";}
        
        $('#alertWinner').text('GAME OVER');
        $('#alertWinner').show();

        endGame();

    }
}

const checkOutcome = () => {
    checkForWin(currentPlayer, ...winningGame[0]);
    checkForWin(currentPlayer, ...winningGame[1]);
    checkForWin(currentPlayer, ...winningGame[2]);
    checkForWin(currentPlayer, ...winningGame[3]);
    checkForWin(currentPlayer, ...winningGame[4]);
    checkForWin(currentPlayer, ...winningGame[5]);
    checkForWin(currentPlayer, ...winningGame[6]);
    checkForWin(currentPlayer, ...winningGame[7]);

}



const startGame = () => {
    console.log("START GAME!");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);

    $('#1player').addClass("bg-danger border border-info");


    $('#alertStart').show();

    // Getting markers into the squares for gameplay

    $('.box').on('click',function(){
        $('#alertStart').hide();


        $(this).text(currentPlayer);

        if (turn > 4){

            console.log('winner??');
            checkOutcome();
        }
// MY CONTINGENGY for TIES

       if (turn > 8 && winner === false){
            console.log('TIE BALLGAME');
            checkOutcome();
            $('#alertTie').show();
             $(".box").css("pointer-events", "none");
        }

        if (winner === false){
// SHOWING THE picking player
        if(currentPlayer === player1){
            currentPlayer=player2;
            console.log(turn++);
            $('#2player').addClass("bg-danger border border-info");
            $('#1player').removeClass("bg-danger border border-info");
        } else{ currentPlayer = player1;
            console.log(turn++);
            $('#1player').addClass("bg-danger border border-info");
            $('#2player').removeClass("bg-danger border border-info");
        }
         }
    })

}

// Start and reset button function

document.getElementById('playBtn').addEventListener('click',() => startGame());

document.getElementById('resetBtn').addEventListener('click', () =>document.location.reload(true));


// $('#alertWinner').show();
// $('#alertTie').show();