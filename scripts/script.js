function playGame() {

}

function generateBoard() {
    let boardArray = ["X", "X", "X", "0", "0", "0", "X", "X", "X"];

    for (let i = 0; i < boardArray.length; i++) {
        process.stdout.write(boardArray[i] + " ");

        if ((i + 1) % 3 === 0) {
            console.log();
        }
    }
}

generateBoard();