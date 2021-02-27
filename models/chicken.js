function toChicken(button) {
    button.className = "chicken";
    updateButtons();
}
function isChicken(button){
    return button.className === 'chicken';
}
function toPossible(button) {
    button.className = "possible";
    updateButtons();
}
function isPossible(button){
    return button.className === "possible";
}
function toChoosedChicken(button) {
    button.className = "choosedChicken";
}
function isChoosedChicken(button){
    return (button.className === 'choosedChicken');
}

function removeChicken(button) {
    toEmpty(button);
}
function moveChicken(button1, button2) {
    toEmpty(button1);
    toChicken(button2);
}


function displayPossibleChickenMoves(button) {
    var row = getRow(button);
    var col = getCol(button);

    var toButton = document.getElementById(`button${row - 1}${col}`);
    if (possibleMove(button, toButton)) {
        toPossible(toButton);
    }
    var toButton = document.getElementById(`button${row}${col + 1}`);
    if (possibleMove(button, toButton)) {
        toPossible(toButton);
    }
    var toButton = document.getElementById(`button${row}${col - 1}`);
    if (possibleMove(button, toButton)) {
        toPossible(toButton);
    }
}
function removePossibleChickenMoves(button) {
    var row = getRow(button);
    var col = getCol(button);
    var toButton = document.getElementById(`button${row - 1}${col}`);
    if (possibleMove(button, toButton)) {
        toEmpty(toButton);
    }
    var toButton = document.getElementById(`button${row}${col + 1}`);
    if (possibleMove(button, toButton)) {
        toEmpty(toButton);
    }
    var toButton = document.getElementById(`button${row}${col - 1}`);
    if (possibleMove(button, toButton)) {
        toEmpty(toButton);
    }
}