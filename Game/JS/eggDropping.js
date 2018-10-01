//generate egg, assign classes, put into motion at random speed
function eggDropping() {
    var eggTime = 10;
    var egg = document.createElement('div');
    egg.classList.add('egg');
    var eggsContainer = document.querySelector('.eggsContainer');
    eggsContainer.appendChild(egg);
    egg.style.left = randomEggPosition(6, 494) + 'px';
    egg.style.top = 50 + 'px';
    var topOffset = 0;

    setInterval(function() {
        var eggVelocity = randomEggSpeed(0.05, 0.2);
        if (topOffset >= 0 && topOffset <= 500) {
            topOffset = topOffset + eggVelocity * eggTime;
            console.log(topOffset);
            egg.style.top = topOffset + 'px';
        }
    }, eggTime)
}
eggDropping();
//random eggDropping call, IIFE
// (function randomEggDropping(maxTimeInterval) {
//     var randomTimeInterval = Math.random() * maxTimeInterval;
//     console.log(randomTimeInterval);
//     setTimeout(function () {
//         eggDropping();
//         randomEggDropping(5000);
//     }, randomTimeInterval);
// }());

//random picking of egg.style.left value from given range - in our case 6-494px
function randomEggPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// random eggs Speed
function randomEggSpeed(min, max) {
    return Math.random() * (max - min);
}

// four types of eggs with different probabilities yellow(1pts,60%,12/20), green(2pts,25%,5/20), red(5pts,10%,2/20), super(extra feature,5%,1/20)
function randomEggColor(a, b, c) {
    var number = Math.random();
    if (number < a) {
        return 'yellow'
    } else if (number >= a && number < (a + b)) {
        return 'green'
    } else if (number >= (a + b) && number < (a + b + c)) {
        return 'red'
    } else {
        return 'super'
    }
}

