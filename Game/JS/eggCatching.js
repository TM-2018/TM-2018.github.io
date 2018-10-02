var caughtEggsCounter = 0;
var superEggFeatureTime = 10000;

function eggCatching(desk) {
    if (letsPlayLock) {return;}
    var deskYCenter = desk.getBoundingClientRect().bottom + desk.getBoundingClientRect().height / 2;
    var deskXCenter = desk.getBoundingClientRect().x + desk.getBoundingClientRect().width / 2;
    var eggsOnBoard = document.querySelectorAll('.egg');

    for (var i = 0; i < eggsOnBoard.length; i++) {
        var eggYCenter = eggsOnBoard[i].getBoundingClientRect().bottom + eggsOnBoard[i].getBoundingClientRect().height / 2;
        var eggXCenter = eggsOnBoard[i].getBoundingClientRect().x + eggsOnBoard[i].getBoundingClientRect().width / 2;
        if (((Math.abs(deskXCenter - eggXCenter) < desk.getBoundingClientRect().width / 2) && (Math.abs(deskYCenter - eggYCenter < desk.getBoundingClientRect().height / 2)))) {
            eggsOnBoard[i].remove();
            eggActions(eggsOnBoard[i]);
            document.querySelector('.scoreValue').innerText = caughtEggsCounter;
        }
    }
}

function eggActions(currentEgg) {
    if (currentEgg.classList.contains('yellowEgg')) {
        caughtEggsCounter += 1;
    } else {
        if (currentEgg.classList.contains('greenEgg')) {
            caughtEggsCounter += 2;
        } else {
            if (currentEgg.classList.contains('redEgg')) {
                caughtEggsCounter += 5;
            } else {
                superEggFeatures(0.25, 0.25, 0.25)
                caughtEggsCounter += 10;
            }
        }
    }
}

function superEggFeatures(a, b, c) {
    var number = Math.random();
    
    if (number < a) {
        wideningBasket();
    } else if (number >= a && number < (a + b)) {
        acceleratingBasket();
    } else if (number >= (a + b) && number < (a + b + c)) {
        moreEggs();
    } else {
        eggReincarnation();
    }
}

function wideningBasket() {
    basket.classList.add('wideBasket');
    document.querySelector('.superEggContainer').innerText = 'BIG BASKET!';
    setTimeout(function() {
        basket.classList.remove('wideBasket');
        document.querySelector('.superEggContainer').innerText = '?';
    }, superEggFeatureTime)
}

function acceleratingBasket() {
    basketVelocity = 0.2;
    document.querySelector('.superEggContainer').innerText = 'EXTRA SPEED!';
    setTimeout(function() {
        basketVelocity = 0.1;
        document.querySelector('.superEggContainer').innerText = '?';
    }, superEggFeatureTime)
}
function moreEggs() {
    eggInterval = 2500;
    document.querySelector('.superEggContainer').innerText = 'MORE EGGS!';
    setTimeout(function() {
        eggInterval = 5000;
        document.querySelector('.superEggContainer').innerText = '?';
    }, superEggFeatureTime)
}
function eggReincarnation() {
    lostEggsCounter -= 1;
    document.querySelector('.superEggContainer').innerText = 'EGG RESURRECTS!';
    document.querySelector('.lostEggsValue').innerText = lostEggsCounter;
    setTimeout(function() {
        document.querySelector('.superEggContainer').innerText = '?';
    }, superEggFeatureTime)
}
