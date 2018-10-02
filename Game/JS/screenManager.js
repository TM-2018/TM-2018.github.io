function startGame() {
    popUp(
        "start",
        "Welcome to Catch the Eggs game!<br><br>Moving basket: LeftKey & RightKey<br><br>To pause press Space<br><br>Don't lose more than 3 eggs!<br><br>Watch out for super eggs!<br>",
        "Play"
    );
}
startGame();

function popUp(textClass, textValue, button1Text) {
    // checks if window is not already open
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
    });
    // popup window
    var body = document.querySelector('body');
    var popupWindow = document.createElement('div');
    popupWindow.classList.add('popup');
    body.appendChild(popupWindow);

    //text for popup
    var message = document.createElement('p');
    message.classList.add(textClass);
    message.innerHTML = textValue;
    popupWindow.appendChild(message);

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
    button2.innerHTML = 'Home';
    var linkToHome = document.createElement('a');
    linkToHome.href = "https://tomasz-milaszewski.github.io/";
    button2.appendChild(linkToHome);
    popUpWindow.appendChild(button2);
    // return message;
}

