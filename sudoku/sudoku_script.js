const sudoku = document.getElementById("sudoku");


// Zrobione 81 pole
for (let i = 0; i < 81; i++) {

    let input = document.createElement("input");

    input.type = "number";
    input.min = "1";
    input.max = "9";

    sudoku.appendChild(input);
}


// Sprawdzamy sudoku
function checkSudoku() {

    let inputs = document.querySelectorAll("#sudoku input");

    let board = [];

    // PKonwiertacja 81 pola do tablicy 9 × 9
    for (let row = 0; row < 9; row++) {

        board[row] = [];

        for (let col = 0; col < 9; col++) {

            let value = inputs[row * 9 + col].value;

            board[row][col] = Number(value);
        }
    }


    // Sprawdzamy rekordy
    for (let row = 0; row < 9; row++) {

        let numbers = [];

        for (let col = 0; col < 9; col++) {

            let number = board[row][col];

            if (number < 1 || number > 9) {
                document.getElementById("message").textContent =
                    "Wyprlnij wszystkie pola";
                return;
            }

            if (numbers.includes(number)) {
                document.getElementById("message").textContent =
                    "Blad w rekordzie";
                return;
            }

            numbers.push(number);
        }
    }


    // Sprawdzamy kolumne
    for (let col = 0; col < 9; col++) {

        let numbers = [];

        for (let row = 0; row < 9; row++) {

            let number = board[row][col];

            if (numbers.includes(number)) {
                document.getElementById("message").textContent =
                    "Blad w kolumnie";
                return;
            }

            numbers.push(number);
        }
    }


    document.getElementById("message").textContent =
        "Sudoku wykonana poprawnie!";
}