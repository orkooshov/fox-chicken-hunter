var fox1 = document.getElementById('button33');
var fox2 = document.getElementById('button35');

function toFox(button) {
    button.className = "fox";
    updateButtons();
}
function isFox(button){
    return (button.className === "fox");
}

function moveFoxUpPossible(button){
    var tmp = getUpButton(button);
    if (!isFox(button))
        return false;
    if (!possibleMove(button, tmp)){
        return false;
    }
    return true;
}
function moveFoxDownPossible(button){
    var tmp = getDownButton(button);
    if (!isFox(button))
        return false;
    if (!possibleMove(button, tmp)){
        return false;
    }
    return true;
}
function moveFoxRightPossible(button){
    var tmp = getRightButton(button);
    if (!isFox(button))
        return false;
    if (!possibleMove(button, tmp)){
        return false;
    }
    return true;
}
function moveFoxLeftPossible(button){
    var tmp = getLeftButton(button);
    if (!isFox(button))
        return false;
    if (!possibleMove(button, tmp)){
        return false;
    }
    return true;
}
function eatRightUpPossible(button){
    var tmp = getRightUpButton(button);
    var tmp2 = getRightUpButton(tmp);

    if (tmp == null || tmp2 == null) return false;
    return (isChicken(tmp) && isEmpty(tmp2));
}
function eatRightDownPossible(button){
    var tmp = getRightDownButton(button);
    var tmp2 = getRightDownButton(tmp);

    if (tmp == null || tmp2 == null) return false;
    return (isChicken(tmp) && isEmpty(tmp2));
}
function eatLeftUpPossible(button){
    var tmp = getLeftUpButton(button);
    var tmp2 = getLeftUpButton(tmp);

    if (tmp == null || tmp2 == null) return false;
    return (isChicken(tmp) && isEmpty(tmp2));
}
function eatLeftDownPossible(button){
    var tmp = getLeftDownButton(button);
    var tmp2 = getLeftDownButton(tmp);

    if (tmp == null || tmp2 == null) return false;
    return (isChicken(tmp) && isEmpty(tmp2));
}

function moveFox(button1, button2) {
    toEmpty(button1);
    toFox(button2);
}
function moveFoxUp(button){
    var tmp = getUpButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxDown(button){
    var tmp = getDownButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxRight(button){
    var tmp = getRightButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxLeft(button){
    var tmp = getLeftButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxRightUp(button){
    var tmp = getRightUpButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxRightDown(button){
    var tmp = getRightDownButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxLeftUp(button){
    var tmp = getLeftUpButton(button);
    moveFox(button, tmp);
    return tmp;
}
function moveFoxLeftDown(button){
    var tmp = getLeftDownButton(button);
    moveFox(button, tmp);
    return tmp;
}
function eatRightUp(button){
    var tmp = moveFoxRightUp(button);
    tmp = moveFoxRightUp(tmp);
    return tmp;
}
function eatRightDown(button){
    var tmp = moveFoxRightDown(button);
    tmp = moveFoxRightDown(tmp);
    return tmp;
}
function eatLeftUp(button){
    var tmp = moveFoxLeftUp(button);
    tmp = moveFoxLeftUp(tmp);
    return tmp;
}
function eatLeftDown(button){
    var tmp = moveFoxLeftDown(button);
    tmp = moveFoxLeftDown(tmp);
    return tmp;
}

function moveFox1Up(){
    if (!moveFoxUpPossible(fox1)) return false;
    fox1 = moveFoxUp(fox1);
    return true;
}
function moveFox1Down(){
    if (!moveFoxDownPossible(fox1)) return false;
    fox1 = moveFoxDown(fox1);
    return true;
}
function moveFox1Right(){
    if (!moveFoxRightPossible(fox1)) return false;
    fox1 = moveFoxRight(fox1);
    return true;
}
function moveFox1Left(){
    if (!moveFoxLeftPossible(fox1)) return false;
    fox1 = moveFoxLeft(fox1);
    return true;
}
function eatRightUpFox1(){
    if (!eatRightUpPossible(fox1)) return false;
    fox1 = eatRightUp(fox1);
    return true;
}
function eatRightDownFox1(){
    if (!eatRightDownPossible(fox1)) return false;
    fox1 = eatRightDown(fox1);
    return true;
}
function eatLeftUpFox1(){
    if (!eatLeftUpPossible(fox1)) return false;
    fox1 = eatLeftUp(fox1);
    return true;
}
function eatLeftDownFox1(){
    if (!eatLeftDownPossible(fox1)) return false;
    fox1 = eatLeftDown(fox1);
    return true;
}

function moveFox2Up(){
    if (!moveFoxUpPossible(fox2)) return false;
    fox2 = moveFoxUp(fox2);
    return true;
}
function moveFox2Down(){
    if (!moveFoxDownPossible(fox2)) return false;
    fox2 = moveFoxDown(fox2);
    return true;
}
function moveFox2Right(){
    if (!moveFoxRightPossible(fox2)) return false;
    fox2 = moveFoxRight(fox2);
    return true;
}
function moveFox2Left(){
    if (!moveFoxLeftPossible(fox2)) return false;
    fox2 = moveFoxLeft(fox2);
    return true;
}
function eatRightUpFox2(){
    if (!eatRightUpPossible(fox2)) return false;
    fox2 = eatRightUp(fox2);
    return true;
}
function eatRightDownFox2(){
    if (!eatRightDownPossible(fox2)) return false;
    fox2 = eatRightDown(fox2);
    return true;
}
function eatLeftUpFox2(){
    if (!eatLeftUpPossible(fox2)) return false;
    fox2 = eatLeftUp(fox2);
    return true;
}
function eatLeftDownFox2(){
    if (!eatLeftDownPossible(fox2)) return false;
    fox2 = eatLeftDown(fox2);
    return true;
}


console.log('fox.js loaded ^-^')