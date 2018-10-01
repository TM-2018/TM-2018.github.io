var caughtEggsCounter = 0;
function eggCatching(desk) {
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
                superEggFeatures(0.9,0.05,0.05)
                
                caughtEggsCounter += 10;
            }
        }
    }
}

function superEggFeatures(a, b, c) {
    var number = Math.random();
        if (number < a) {
            //widening basket
            wideningBasket(basket);
        } else if (number >= a && number < (a + b)) {
            //accelerating basket
            
        } else if (number >= (a + b) && number < (a + b + c)) {
            //slowing eggs
            
        } else {
            //lost egg reincarnation
            
        }
    }

function wideningBasket(basket) {
    basket.style.width = 100 + 'px';
}