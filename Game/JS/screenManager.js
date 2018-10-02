//start game
function startGame() {
    popUp(
        "start",
        "Welcome to Catch the Eggs game!<br><br>Moving basket: LeftKey & RightKey<br><br>To pause press Space<br><br>Don't lose more than 5 eggs!<br><br>Watch out for super eggs!<br>",
        "Play"
    );
}
startGame();

//pause
var pauseCounter = 0;

function pauseOn() {
    popUp(
        "pause", 
        "Paused. Press Space to resume game.",
        "Restart"
    );
}

function pauseOff() {
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
    });
}

function pause() {
    window.addEventListener('keydown', function (event) {
        switch (event.code) {
            case "Space":
                if (pauseCounter % 2 === 0) {
                    pauseOn();
                    pauseCounter +=1;
                } else {
                    pauseOff();
                    pauseCounter = 0;
                }
                break;
        };
    });
};
pause();

//gameover
function gameOver() {
    popUp(
        "end",
        "You lost! Your score: ",
        "Play again"
    );
    var scoreValue = document.createElement('span');
    scoreValue.classList.add('end');
    scoreValue.innerText = caughtEggsCounter;
    var message = document.querySelector('.end');
    message.appendChild(scoreValue);
}

//popup window for start/pause/end screens
function popUp(textClass, textValue, button1Text) {
    // checks if window is not already open
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
    });
    // popup window
    var body = document.querySelector('body');
    var popUpWindow = document.createElement('div');
    popUpWindow.classList.add('popup');
    body.appendChild(popUpWindow);

    //text for popup
    var message = document.createElement('p');
    message.classList.add(textClass);
    message.innerHTML = textValue;
    popUpWindow.appendChild(message);

    // button nr 1 - Play/Restart/PlayAgain:
    var button1 = document.createElement('button');
    button1.innerHTML = button1Text;
    popUpWindow.appendChild(button1);
    button1.addEventListener('click', function () {
        letsPlay();
        document.querySelectorAll('.popup').forEach(function (node) {
            node.remove();
        });
    });

    // button nr 2 - Home:
    var button2 = document.createElement('button');
    var linkToHome = document.createElement('a');
    linkToHome.innerText = 'Home';
    linkToHome.href = "https://tomasz-milaszewski.github.io/";
    button2.appendChild(linkToHome);
    popUpWindow.appendChild(button2);
}

