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
                caughtEggsCounter += 10;
            }
        }
    }
}