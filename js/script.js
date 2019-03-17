function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let scaleArr = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3, 1.4]
let zIndexArrBig = [-2, -4, -6, -8, -10, -12]
let zIndexArrSmall = [-26, -28, -30, -32]
let zIndexArrMIddle = [-18, -20, -22, -24]
let zIndexArrNeither = [-4, -10, -24]

function changeAnim() {
  let a = zIndexArrBig[getRandomArbitrary(0, zIndexArrBig.length -1)]

  $( "#target1" ).css ({
    "transform": "translateY(" + getRandomArbitrary(-300, 600) + "px)" + "translateX(" + getRandomArbitrary(0, 1600) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    "z-index": a,
  })

  $( "#targetA" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 80) + "px)" + "translateX(" + getRandomArbitrary(0, 80) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })


}

function changeA() {
  let b = zIndexArrSmall[getRandomArbitrary(0, zIndexArrSmall.length -1)]
$( "#target2" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 200) + "px)" + "translateX(" + getRandomArbitrary(-300, 300) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    "z-index": b,
  })

  $( "#targetB" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })
}

function changeB() {
  let b = zIndexArrMIddle[getRandomArbitrary(0, zIndexArrMIddle.length -1)]
$( "#target3" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 400) + "px)" + "translateX(" + getRandomArbitrary(100, 300) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    "z-index": b,
  })

  $( "#targetC" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })
}

// function changeC() {
//   let b = zIndexArrNeither[getRandomArbitrary(0, zIndexArrNeither.length -1)]
// $( "#target4" ).css ({
//     "transform": "translateY(" + getRandomArbitrary(-300, 100) + "px)" + "translateX(" + getRandomArbitrary(-100, 100) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
//     "z-index": b,
//   })
//
//   $( "#targetD" ).css ({
//     "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
//   })
// }

function changePositionA() {
  setTimeout(function() {
    $( "#target2" ).css ({
    "right": 33.44 + "%",
    "top": 45.74 + "%",
    })
  }, 500)
}

function changePositionB() {
  setTimeout(function() {
    $( "#target3" ).css ({
    "right": 93.91 + "%",
    "top": 37.22 + "%",
    })
  }, 800)
}

function goChangeAnim() {
  setTimeout(function() {
    changeAnim()
    goChangeAnim()
  }, 700)
}

function goChangeA() {
  setTimeout(function() {
    changeA()
    goChangeA()
  }, 500)
}

function goChangeB() {
  setTimeout(function() {
    changeB()
    goChangeB()
  }, 800)
}

// function goChangeC() {
//   setTimeout(function() {
//     changeC()
//     goChangeC()
//   }, 600)
// }

let firstFrame = anime.timeline({

});

firstFrame
.add({
  targets: ".img3",
  bottom: 0,
  easing: "linear",
  duration: 500,
})

.add({
  targets: ".img2",
  bottom: 0,
  easing: "linear",
  duration: 500,
})

.add({
  targets: ".img7",
  bottom: 0,
  easing: "linear",
  duration: 400,
})

let secondFrame = anime.timeline({
  delay: 500,
});

secondFrame
.add({
  targets: ".img4",
  bottom: 0,
  easing: "linear",
  duration: 400,
})

.add({
  targets: ".img5",
  bottom: 0,
  easing: "linear",
  duration: 250,
})
.add({
  targets: ".img16",
  bottom: 0,
  easing: "linear",
  duration: 300,
})

let thirdFrame = anime.timeline({
});

thirdFrame
.add ({
  targets: ".img1",
  bottom: 0,
  easing: "linear",
  duration: 450,
})

.add ({
  targets: ".img9",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img10",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img11",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img12",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img12",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img13",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img15",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

let fourthFrame = anime.timeline({
  delay: 200,
});

fourthFrame
.add ({
  targets: ".img17",
  bottom: 0,
  easing: "linear",
  duration: 200,
})
.add ({
  targets: ".img18",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img6",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img8",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img14",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

.add ({
  targets: ".img14",
  bottom: 0,
  easing: "linear",
  duration: 200,
})

function logoAnimatio(){
  let logoAnim = anime.timeline({

  })
  logoAnim
  .add({
    targets: ".good",
    opacity: 1,
    duration: 500,
    easing: "linear"
  })
  .add ({
    targets: ".logo",
    opacity: 1,
    duration: 500,
    easing: "linear"
  })
}

function linksAnimation() {
  anime({
    targets: ".first, .second, .third",
    opacity: 1,
  })
}

function all() {
  goChangeB()
  goChangeA()
  // goChangeC()
  changePositionA()
  changePositionB()
  goChangeAnim()
}

setTimeout(function() {
  linksAnimation();
}, 6000)


setTimeout(function() {
  logoAnimatio();
}, 4000)

setTimeout(function() {
  all();
}, 2000)
