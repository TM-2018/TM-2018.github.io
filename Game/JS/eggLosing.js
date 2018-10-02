var lostEggsCounter = 0;
function eggLosing() {
    var eggsOnBoard = document.querySelectorAll('.egg');
    for (var i = 0; i < eggsOnBoard.length; i++) {
        var eggyTop = eggsOnBoard[i].getBoundingClientRect().top;
        if (eggyTop >= 500) {
            eggsOnBoard[i].remove();
            lostEggsCounter += 1;
            document.querySelector('.lostEggsValue').innerText = lostEggsCounter;
        }
    }
}
