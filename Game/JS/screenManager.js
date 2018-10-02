function startGame() {
    var message = popUp(
        'start',
        'Welcome in ClimbApp game!<br><br>To move use: LeftKey, RightKey, UpKey, DownKey.<br><br>To pause game press Space.<br><br>Trust in bananas to get Turbo Speed!<br>'
    );

    
}
startGame();

function popUp(textClass, textValue, button1, button2) {
    // sprawdzamy czy okienko już się nie wyświetla i jak się wyświetla to je usuwamy
    // zanim wyświetlimy następne (zabezpieczenie przed utworzeniem dwóch okienek):
    document.querySelectorAll('.popup').forEach(function (node) {
        node.remove();
    });
    // tworzymy wyskakujące okienko, nadajemy klasę i przypinamy do body:
    var body = document.querySelector('body');
    var popupWindow = document.createElement('div');
    popupWindow.classList.add('popup');
    body.appendChild(popupWindow);

    //tworzymy w tym okienku część tekstową, wstawiamy treść i nadajemy klasę
    var message = document.createElement('p');
    message.classList.add(textClass);
    message.innerHTML = textValue;
    popupWindow.appendChild(message);
        
    // tworzymy i osadzamy przycisk:
    var button1 = document.createElement('button');
    button1.innerHTML = 'Play';
    popUpWindow.appendChild(button1);

    // dodajemy event:
    button1.addEventListener('click', function () {
        letsPlay();
        document.querySelectorAll('.popup').forEach(function (node) {
            node.remove();
        });
        timerId = timeCounter(timerId);
    });

    return message;
}