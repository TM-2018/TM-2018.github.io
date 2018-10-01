//generate egg, assign classes, put into motion at random speed
function eggDropping() {
    var eggTime = 10;
    var topOffset = 0;
    //egg creation
    var egg = document.createElement('div');
    egg.classList.add('egg');
    var eggsContainer = document.querySelector('.eggsContainer');
    eggsContainer.appendChild(egg);
    //egg positioning
    egg.style.left = randomEggPosition(6, 494) + 'px';
    egg.style.top = 50 + 'px';
    //egg type picking
    randomEggOneOfFour(0.5, 0.25, 0.1, egg);
    
    //egg movement
    setInterval(function() {
        var eggVelocity = randomEggSpeed(0.05, 0.15);
        if (topOffset >= 0 && topOffset <= 500) {
            topOffset = topOffset + eggVelocity * eggTime;
            console.log(topOffset);
            egg.style.top = topOffset + 'px';
        }
    }, eggTime)
}
eggDropping();
//random eggDropping call, IIFE
(function randomEggDropping(maxTimeInterval) {
    var randomTimeInterval = Math.random() * maxTimeInterval;
    console.log(randomTimeInterval);
    setTimeout(function () {
        eggDropping();
        randomEggDropping(3000);
    }, randomTimeInterval);
}());

//random picking of egg.style.left value from given range - in our case 6-494px
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
        return 1
    } else if (number >= a && number < (a + b)) {
        egg.classList.add('greenEgg');
        return 2
    } else if (number >= (a + b) && number < (a + b + c)) {
        egg.classList.add('redEgg');
        return 3
    } else {
        egg.classList.add('superEgg');
        return 4
    }
}

