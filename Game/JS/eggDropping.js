var eggInterval = 5000;
//generate egg, assign classes, put into motion at random speed
function eggDropping() {
    var eggTime = 20;
    var topOffset = 0;
    //egg creation
    var egg = document.createElement('div');
    egg.classList.add('egg');
    var eggsContainer = document.querySelector('.eggsContainer');
    eggsContainer.appendChild(egg);
    //egg positioning
    egg.style.left = randomEggPosition(1, 490) + 'px';
    egg.style.top = 50 + 'px';
    //egg type picking
    randomEggOneOfFour(0.05, 0.05, 0.05, egg);
    
    //egg movement
    setInterval(function() {
        var eggVelocity = randomEggSpeed(0.1, 0.2);
        if (topOffset >= 0 && topOffset < 500) {
            topOffset = topOffset + eggVelocity * eggTime;
            egg.style.top = topOffset + 'px';
        } else {
            egg.remove();
        }
    }, eggTime)
}

//random eggDropping call, IIFE
(function randomEggDropping(maxTimeInterval) {
    var randomTimeInterval = Math.random() * maxTimeInterval;
    setTimeout(function () {
        eggDropping();
        randomEggDropping(eggInterval);
    }, randomTimeInterval);
}());

//random picking of egg.style.left value from given range - in our case 1-490px
function randomEggPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
// random eggs Speed
function randomEggSpeed(min, max) {
    return Math.random() * (max - min);
}

// four types of eggs with different probabilities a, b, c and d (d=1-(a+b+c))
function randomEggOneOfFour(a, b, c, egg) {
    var number = Math.random();
    if (number < a) {
        egg.classList.add('yellowEgg');
    } else if (number >= a && number < (a + b)) {
        egg.classList.add('greenEgg');
    } else if (number >= (a + b) && number < (a + b + c)) {
        egg.classList.add('redEgg');
    } else {
        egg.classList.add('superEgg');
    }
}

