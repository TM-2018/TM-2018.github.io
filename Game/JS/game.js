var basket = document.querySelector('.basket');
var isLeftArrowPressed = false;
var isRightArrowPressed = false;
var leftOffset = 225;
var basketTime = 10;
var basketVelocity = 0;

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
        basketVelocity = 0.1;
        leftOffset = leftOffset - basketVelocity * basketTime;
        basket.style.left = leftOffset + 'px'
    }
    if (isRightArrowPressed && leftOffset <= 449) {
        basketVelocity = 0.1;
        leftOffset = leftOffset + basketVelocity * basketTime;
        basket.style.left = leftOffset + 'px'
    } else {
        velocity = 0;
    }
    console.log(basket.style.left);
}, basketTime)


