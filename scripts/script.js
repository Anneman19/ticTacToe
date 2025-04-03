let boardArray = ["S", "S", "S", "A", "A", "A", "S", "S", "S"];
let boardSize = 3;

function playGame() {
    generateBoard();
    console.log("\n");
    let userChoiceRow = parseInt(prompt("In which row would you like to play? ") - 1);
    let userChoiceColumn = parseInt(prompt("In which column would you like to play? ") - 1);
    let userChoiceType = prompt("X or 0? ");
    function userChoiceIndex(userChoiceRow, userChoiceColumn, boardSize) {
        return userChoiceRow * boardSize + userChoiceColumn;
    }
    boardArray[userChoiceIndex(userChoiceRow, userChoiceColumn, boardSize)] = userChoiceType;
    generateBoard();
    
}

function generateBoard() {
    for (let i = 0; i < boardArray.length; i++) {
        process.stdout.write(boardArray[i] + " ");

        if ((i + 1) % 3 === 0) {
            console.log();
        }
    }
}

playGame();