var right = document.querySelector('.pearRight')
var middle = document.querySelector('.pearMiddle');
var left = document.querySelector('.pearLeft');
// var screenOffset = window.scrollY;

// window.addEventListener('scroll', function () {
//     var rightOffset = screenOffset * 0.2;
//     var middleOffset = screenOffset * 0.3;
//     var leftOffset = screenOffset * 0.4;
//     right.style.right = '+' + (0 + rightOffset) + 'px';//0
//     middle.style.right = '+' + (-25 + middleOffset) + 'px';//-25
//     left.style.right = '+' + (150 + leftOffset) + 'px';//150
// })

window.addEventListener('resize', function(){
    var currentScreenWidth = window.innerWidth;
    if (currentScreenWidth < 992) {
        console.log(true);
        console.log(currentScreenWidth);
        var rightOffset = (currentScreenWidth - 992) * 0.2;
        var middleOffset = (currentScreenWidth - 992) * 0.75;
        var leftOffset = (currentScreenWidth - 992) * 0.7;
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