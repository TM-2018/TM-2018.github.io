var caughtEggsCounter = 0;
function eggCatching(desk) {
    var deskYCenter = desk.getBoundingClientRect().bottom + desk.getBoundingClientRect().height/2;
    var deskXCenter = desk.getBoundingClientRect().x + desk.getBoundingClientRect().width/2;
    
    var eggsOnBoard = document.querySelectorAll('.egg'); //nodeList
    for (var i = 0 ; i < eggsOnBoard.length ; i++) {
        var eggYCenter = eggsOnBoard[i].getBoundingClientRect().bottom + eggsOnBoard[i].getBoundingClientRect().height/2;
        var eggXCenter = eggsOnBoard[i].getBoundingClientRect().x + eggsOnBoard[i].getBoundingClientRect().width/2;
        if (((Math.abs(deskXCenter - eggXCenter) < desk.getBoundingClientRect().width/2) && (Math.abs(deskYCenter - eggYCenter < desk.getBoundingClientRect().height/2)))) {
            eggsOnBoard[i].remove(); //action on superEgg
            caughtEggsCounter += 1; //differ points for different eggs - super - no point
            document.querySelector('.scoreValue').innerText = caughtEggsCounter;
        }
    }
}
