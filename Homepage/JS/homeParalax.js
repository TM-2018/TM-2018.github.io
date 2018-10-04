var right = document.querySelector('.pearRight')
var middle = document.querySelector('.pearMiddle');
var left = document.querySelector('.pearLeft');

window.addEventListener('scroll', function () {
    var screenOffset = window.scrollY;
    var topRightOffset = screenOffset * 0.3;
    var topMiddleOffset = screenOffset * 0.4;
    var topLeftOffset = screenOffset * 0.5;
    right.style.top = (0 + topRightOffset) + 'px';//0
    middle.style.top = (25 + topMiddleOffset) + 'px';//25
    left.style.top = (50 + topLeftOffset) + 'px';//50
})

window.addEventListener('resize', function(){
    var currentScreenWidth = window.innerWidth;
    if (currentScreenWidth < 992) {
        var rightOffset = (currentScreenWidth - 992) * 0.4;
        var middleOffset = (currentScreenWidth - 992) * 0.85;
        var leftOffset = (currentScreenWidth - 992) * 0.8;
        right.style.right = rightOffset + 'px';//0
        middle.style.right = (-25 + middleOffset) + 'px';//-25
        left.style.right = (150 + leftOffset) + 'px';//150
    } else {
        right.style.right = 0 + 'px';//0
        middle.style.right = -25 + 'px';//-25
        left.style.right = 150 + 'px';//150
    }
  });

//   // Small devices (landscape phones, 576px and up)
// @media (min-width: 576px) { ... }

// // Medium devices (tablets, 768px and up)
// @media (min-width: 768px) { ... }

// // Large devices (desktops, 992px and up)
// @media (min-width: 992px) { ... }

// // Extra large devices (large desktops, 1200px and up)
// @media (min-width: 1200px) { ... }