var basket = document.querySelector('.basket');
var isLeftArrowPressed = false;
var isRightArrowPressed = false;
var leftOffset = 225;
var basketTime = 10;
var basketVelocity = 0.1;

window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowLeft') {
        isLeftArrowPressed = true;
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'ArrowLeft') {
        isLeftArrowPressed = false;
    }
})
window.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowRight') {
        isRightArrowPressed = true;
    }
})
window.addEventListener('keyup', function () {
    if (event.code === 'ArrowRight') {
        isRightArrowPressed = false;
    }
})

setInterval(function () {
    if (isLeftArrowPressed && leftOffset >= 1) {
        velocity = basketVelocity;
        leftOffset = leftOffset - basketVelocity * basketTime;
        basket.style.left = leftOffset + 'px'
    }
    //right move includes limiting condition for wider basket - limitation from the right
    if (isRightArrowPressed && leftOffset <= 449 && (leftOffset + basket.getBoundingClientRect().width) < 500) {
        velocity = basketVelocity;
        leftOffset = leftOffset + basketVelocity * basketTime;
        basket.style.left = leftOffset + 'px'
    } else {
        velocity = 0;
    }
    eggCatching(basket);
    eggLosing();
}, basketTime)


