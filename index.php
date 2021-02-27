<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="views/style.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Game</title>
</head>


<body>
    <script>
        "use strict";
    </script>

    <div>
        <a href="task">Task information</a>
    </div>
    <div id="gameAll">
        <div id="game">
            <h2 id="gameHeader">Game</h2>
            <table id="gameTable">
                <tr>
                    <td><button id="button11" class="hidden"></button></td>
                    <td><button id="button12" class="hidden"></button></td>
                    <td><button id="button13" class="empty"></button></td>
                    <td><button id="button14" class="empty"></button></td>
                    <td><button id="button15" class="empty"></button></td>
                    <td><button id="button16" class="hidden"></button></td>
                    <td><button id="button17" class="hidden"></button></td>
                </tr>
                <tr>
                    <td><button id="button21" class="hidden"></button></td>
                    <td><button id="button22" class="hidden"></button></td>
                    <td><button id="button23" class="empty"></button></td>
                    <td><button id="button24" class="empty"></button></td>
                    <td><button id="button25" class="empty"></button></td>
                    <td><button id="button26" class="hidden"></button></td>
                    <td><button id="button27" class="hidden"></button></td>
                </tr>
                <tr>
                    <td><button id="button31" class="empty"></button></td>
                    <td><button id="button32" class="empty"></button></td>
                    <td><button id="button33" class="fox"></button></td>
                    <td><button id="button34" class="empty"></button></td>
                    <td><button id="button35" class="fox"></button></td>
                    <td><button id="button36" class="empty"></button></td>
                    <td><button id="button37" class="empty"></button></td>
                </tr>
                <tr>
                    <td><button id="button41" class="chicken"></button></td>
                    <td><button id="button42" class="chicken"></button></td>
                    <td><button id="button43" class="chicken"></button></td>
                    <td><button id="button44" class="chicken"></button></td>
                    <td><button id="button45" class="chicken"></button></td>
                    <td><button id="button46" class="chicken"></button></td>
                    <td><button id="button47" class="chicken"></button></td>
                </tr>
                <tr>
                    <td><button id="button51" class="chicken"></button></td>
                    <td><button id="button52" class="chicken"></button></td>
                    <td><button id="button53" class="chicken"></button></td>
                    <td><button id="button54" class="chicken"></button></td>
                    <td><button id="button55" class="chicken"></button></td>
                    <td><button id="button56" class="chicken"></button></td>
                    <td><button id="button57" class="chicken"></button></td>
                </tr>
                <tr>
                    <td><button id="button61" class="hidden"></button></td>
                    <td><button id="button62" class="hidden"></button></td>
                    <td><button id="button63" class="chicken"></button></td>
                    <td><button id="button64" class="chicken"></button></td>
                    <td><button id="button65" class="chicken"></button></td>
                    <td><button id="button66" class="hidden"></button></td>
                    <td><button id="button67" class="hidden"></button></td>
                </tr>
                <tr>
                    <td><button id="button71" class="hidden"></button></td>
                    <td><button id="button72" class="hidden"></button></td>
                    <td><button id="button73" class="chicken"></button></td>
                    <td><button id="button74" class="chicken"></button></td>
                    <td><button id="button75" class="chicken"></button></td>
                    <td><button id="button76" class="hidden"></button></td>
                    <td><button id="button77" class="hidden"></button></td>
                </tr>
            </table>
        </div>

        <div id="gameResults">
            <h3>Results</h3>
            <p>Time: <span id="time">00:00</span></p>
            <p>Losses: <span id="losses">0</span></p>
            <p>Total moves: <span id="numOfMoves">0</span></p>
        </div>

        <div id="foxControls">
            <div id="fox1Controls">
                <h3>Fox1</h3>
                <table>
                    <tr>
                        <td><button id="eatLeftUpFox1" onclick="eatLeftUpFox1()">⬉</button></td>
                        <td><button id="upFox1" onclick="moveFox1Up()">🠕</button></td>
                        <td><button id="eatRightUpFox1" onclick="eatRightUpFox1()">⬈</button></td>
                    </tr>
                    <tr>
                        <td><button id="leftFox1" onclick="moveFox1Left()">🠔</button></td>
                        <td><button>⦿</button></td>
                        <td><button id="rightFox1" onclick="moveFox1Right()">🠖</button></td>
                    </tr>
                    <tr>
                        <td><button id="eatLeftDownFox1" onclick="eatLeftDownFox1()">⬋</button></td>
                        <td><button id="downFox1" onclick="moveFox1Down()">🠗</button></td>
                        <td><button id="eatRightDownFox1" onclick="eatRightDownFox1()">⬊</button></td>
                    </tr>
                </table>
            </div>


            <div id="fox2Controls">
                <h3>Fox2</h3>
                <table id="fox2Controls">
                    <tr>
                        <td><button id="eatLeftUpFox2" onclick="eatLeftUpFox2()">⬉</button></td>
                        <td><button id="upFox2" onclick="moveFox2Up()">🠕</button></td>
                        <td><button id="eatRightUpFox2" onclick="eatRightUpFox2()">⬈</button></td>
                    </tr>
                    <tr>
                        <td><button id="leftFox2" onclick="moveFox2Left()">🠔</button></td>
                        <td><button>⦿</button></td>
                        <td><button id="rightFox2" onclick="moveFox2Right()">🠖</button></td>
                    </tr>
                    <tr>
                        <td><button id="eatLeftDownFox2" onclick="eatLeftDownFox2()">⬋</button></td>
                        <td><button id="downFox2" onclick="moveFox2Down()">🠗</button></td>
                        <td><button id="eatRightDownFox2" onclick="eatRightDownFox2()">⬊</button></td>
                    </tr>
                </table>
            </div>

        </div>
    </div>

    <script src="models/results.js"></script>
    <script src="models/common.js"></script>
    <script src="models/chicken.js"></script>
    <script src="models/fox.js"></script>
    <script src="models/foxBot.js"></script>
    <script src="controllers/controller.js"></script>

    <script>
        var interval = window.setInterval(function() {
            increaseTime();
        }, 1000);
    </script>
    <script>
        updateButtons();
    </script>

</body>

</html>