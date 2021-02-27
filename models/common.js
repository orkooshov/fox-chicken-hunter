const SIZE = 7;
const CHICKENSMIN = 9;

function getRow(button){
    if (!isDefined(button)) return null;
    return parseInt(button.id[6]);
}
function getCol(button){
    if (!isDefined(button)) return null;
    return parseInt(button.id[7]);
}

function getDownButton(button){
    return document.getElementById(`button${getRow(button)+1}${getCol(button)}`);
}
function getUpButton(button){
    return document.getElementById(`button${getRow(button)-1}${getCol(button)}`);
}
function getRightButton(button){
    return document.getElementById(`button${getRow(button)}${getCol(button)+1}`);
}
function getLeftButton(button){
    return document.getElementById(`button${getRow(button)}${getCol(button)-1}`);
}
function getRightUpButton(button){
    return document.getElementById(`button${getRow(button)-1}${getCol(button)+1}`);
}
function getRightDownButton(button){
    return document.getElementById(`button${getRow(button)+1}${getCol(button)+1}`);
}
function getLeftUpButton(button){
    return document.getElementById(`button${getRow(button)-1}${getCol(button)-1}`);
}
function getLeftDownButton(button){
    return document.getElementById(`button${getRow(button)+1}${getCol(button)-1}`);
}

function updateButtons() {
    for (var i = 1; i <= SIZE; i++) {
        for (var j = 1; j <= SIZE; j++) {
            var tmp = document.getElementById("button" +
                i.toString() + j.toString());
            if (tmp != null) {
                if (isFox(tmp)) {
                    tmp.setAttribute('onclick', 'buttonFoxClick(this)');
                } else if (isChicken(tmp)) {
                    tmp.setAttribute('onclick', 'buttonChickenClick(this)');
                } else if (isEmpty(tmp)) {
                    tmp.setAttribute('onclick', 'buttonEmptyClick(this)');
                } else if (isPossible(tmp)) {
                    tmp.setAttribute('onclick', 'buttonPossibleClick(this)');
                }
            } else {
                console.log(tmp + " element is null");
            }
        }
    }
}

function isWin() {
    var tmp;
    for (var i = 1; i <= 3; i++) {
        for (var j = 3; j <= 5; j++) {
            tmp = document.getElementById(`button${i}${j}`);
            if (!isChicken(tmp)) {
                return false;
            }
        }
    }
    return true;
}
function isLoose(){
    var NumOfChickens = 0;
    for (var i = 1; i <= SIZE; i++){
        for (var j = 1; j <= SIZE; j++){
            var tmp = document.getElementById(`button${i}${j}`);
            if (isChicken(tmp)){
                NumOfChickens++;
                if (NumOfChickens >= CHICKENSMIN){
                    return false;
                }
            }
        }
    }
    return true;
}

function toEmpty(button) {
    button.className = "empty";
    updateButtons();
}
function isEmpty(button){
    return (button.className === "empty");
}

function isDefined(button){
    return (button != undefined);
}
function possibleMove(fromButton, toButton) {
    if (!isDefined(fromButton) || !isDefined(toButton)) {
        return false;
    }
    if (!isEmpty(toButton) && !isPossible(toButton)) {
        return false;
    }
    return true;
}

console.log("common.js loaded ._.");
