function eatPossible(button) {
    return (
        eatRightUpPossible(button) || eatRightDownPossible(button) ||
        eatLeftUpPossible(button) || eatLeftDownPossible(button));
}
function movePossible(button) {
    return (
        moveFoxUpPossible(button) || moveFoxDownPossible(button) ||
        moveFoxRightPossible(button) || moveFoxLeftPossible(button));
}
function makeMovePossible(button) {
    return (movePossible(button) || eatPossible(button));
}

function possibleMoves(button) {
    var arr = [];
    if (moveFoxUpPossible(button)) {
        arr.push('Up');
    }
    if (moveFoxDownPossible(button)) {
        arr.push('Down');
    }
    if (moveFoxRightPossible(button)) {
        arr.push('Right');
    }
    if (moveFoxLeftPossible(button)) {
        arr.push('Left');
    }
    return arr;
}
function fox1PossibleMoves(){
    return possibleMoves(fox1);
}
function fox2PossibleMoves(){
    return possibleMoves(fox2);
}
function possibleEats(button) {
    var arr = [];
    if (eatRightUpPossible(button)) {
        arr.push('RightUp');
    }
    if (eatRightDownPossible(button)) {
        arr.push('RightDown');
    }
    if (eatLeftUpPossible(button)) {
        arr.push('LeftUp');
    }
    if (eatLeftDownPossible(button)) {
        arr.push('LeftDown');
    }
    return arr;
}
function fox1PossibleEats(){
    return possibleEats(fox1);
}
function fox2PossibleEats(){
    return possibleEats(fox2);
}

function eat(button){
    var tmp;
    var _possibleEats = possibleEats(button);
    var rnd = Math.floor((Math.random() * _possibleEats.length));
    var element = _possibleEats[rnd];
    if (element == 'RightUp') tmp = eatRightUp(button);
    else if (element == 'RightDown') tmp = eatRightDown(button);
    else if (element == 'LeftUp') tmp = eatLeftUp(button);
    else if (element == 'LeftDown') tmp = eatLeftDown(button);
    return tmp;
}
function fox1Eat(){
    fox1 = eat(fox1);
}
function fox2Eat(){
    fox2 = eat(fox2);
}
function move(button){
    var _possibleMoves = possibleMoves(button);
    var rnd = Math.floor(Math.random() * _possibleMoves.length);
    var element = _possibleMoves[rnd];
    console.log(rnd);
    console.log(element);
    var tmp;
    if      (element == 'Up')       tmp = moveFoxUp(button);
    else if (element == 'Down')     tmp = moveFoxDown(button);
    else if (element == 'Right')    tmp = moveFoxRight(button);
    else if (element == 'Left')     tmp = moveFoxLeft(button);
    return tmp;
}
function fox1Move(){
    fox1 = move(fox1);
}
function fox2Move(){
    fox2 = move(fox2);
}

function makeMove() {
    increaseMoves();
    if (eatPossible(fox1)) {
        increaseLosses();
        fox1Eat();
        return;
    } else if (eatPossible(fox2)) {
        increaseLosses();
        fox2Eat();
        return;
    }
    if (Math.floor(Math.random() * 2)){
        if (movePossible(fox1)){
            fox1Move();
        }
        else if (movePossible(fox2)){
            fox2Move();
        }
    } else {
        if (movePossible(fox2)){
            fox2Move();
        }
        else if (movePossible(fox1)){
            fox1Move();
        }
    }
}

console.log('foxBot.js loaded                      SOS');