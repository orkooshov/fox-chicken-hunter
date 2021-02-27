var buttonClicked;
var tmpButton;

function buttonFoxClick(button) {
    console.log(`${button.id} (fox) clicked`);
    alert('you cannot handle with fox...');
    buttonClicked = undefined;
}
function buttonChickenClick(button) {
    console.log(`${button.id} (chicken) clicked`);

    if (buttonClicked != undefined) {
        if (buttonClicked.className == 'fox') {
            alert('error, choose another field!');
            return;
        }
    }
    buttonClicked = button;
    toChoosedChicken(buttonClicked);

    displayPossibleChickenMoves(buttonClicked);

    if (tmpButton != undefined) {
        removePossibleChickenMoves(tmpButton);
        if (tmpButton != buttonClicked) {
            toChicken(tmpButton);
            tmpButton = undefined;
        }
        else {
            toChicken(buttonClicked);
            buttonClicked = undefined;
        }
    }
    tmpButton = buttonClicked;
}
function buttonEmptyClick(button) {
    console.log(`${button.id} (empty) clicked`);
    if (buttonClicked != undefined) {
        alert('it is impossible');
    }
}
function buttonPossibleClick(button) {
    console.log(`${button.id} (possible) clicked`);
    tmpButton = null;
    
    if (buttonClicked != undefined) {
        if (isChoosedChicken(buttonClicked)) {
            moveChicken(buttonClicked, button);
            removePossibleChickenMoves(buttonClicked);
            if (isWin()){
                alert('you win');
                clearInterval(interval);
            }
        }
        buttonClicked = null;
    }
    makeMove();
    if (isLoose()){
        alert('You lost');
    }
}

console.log('controller.js loaded :)')