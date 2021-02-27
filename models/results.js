function setLosses(num){
    document.getElementById('losses').innerHTML = num;
}
function getLosses(){
    return parseInt(document.getElementById('losses').innerHTML);
}
function increaseLosses(){
    setLosses(getLosses()+1);
}
function setNumOfMoves(num){
    document.getElementById('numOfMoves').innerHTML = num;
}
function getNumOfMoves(){
    return parseInt(document.getElementById('numOfMoves').innerHTML);
}
function increaseMoves(){
    setNumOfMoves(getNumOfMoves()+1);
}
function getTime(){
    return document.getElementById('time').innerHTML;
}
function setTime(str){
    document.getElementById('time').innerHTML = str;
}
function increaseTime(){
    var tmp = document.getElementById('time').innerHTML;
    var mins = parseInt(tmp[0] + tmp[1]);
    var secs = parseInt(tmp[3] + tmp[4]);
    if (secs == 59){
        secs = 0;
        mins++;
    } else {
        secs++;
    }
    if (secs < 10){
        secs = `0${secs}`;
    }
    if (mins < 10){
        mins = `0${mins}`;
    }
    setTime(`${mins}:${secs}`);
}