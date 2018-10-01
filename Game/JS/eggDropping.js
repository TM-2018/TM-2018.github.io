function eggDropping() {
var egg = document.createElement('div');
egg.classList.add('egg');
var eggsContainer = document.querySelector('.eggsContainer');
eggsContainer.appendChild(egg);
egg.style.left = randomEggPosition(6,494) + 'px';
}

(function randomEggDropping(maxTimeInterval) {
    var randomTimeInterval = Math.random() * maxTimeInterval;
    console.log(randomTimeInterval);
    setTimeout(function() {
            eggDropping();
            randomEggDropping(5000);  
    }, randomTimeInterval);
}());

//losowanie egg.style.left - wartości całkowite z przedziału min-max tj. 6-494px
function randomEggPosition(min,max) {
return Math.floor(Math.random() *(max - min + 1) + min)
}



// //four types with different probabilities
// function randomEggColor() {

// }

// function randomEggSpeed() {

// }