function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let scaleArr = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3, 1.4]
let zIndexArrBig = [-2, -4, -6, -8, -10, -12]
let zIndexArrSmall = [-26, -28, -30, -32]
let zIndexArrMIddle = [-18, -20, -22, -24]
let zIndexArrNeither = [-4, -10, -24]

let firstTimer = 0
let secondTimer = 0
let thirdTimer = 0



function changeA () {
  let a = zIndexArrBig[getRandomArbitrary(0, zIndexArrBig.length -1)]

  $( "#target1" ).css ({
    "top": getRandomArbitrary(10, 40) + "%",
    "left": getRandomArbitrary(10, 60) + "%",
    "z-index": a,
  })

  $( "#targetA" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 80) + "px)" + "translateX(" + getRandomArbitrary(0, 80) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })


}

function changeB() {
  let a = zIndexArrSmall[getRandomArbitrary(0, zIndexArrSmall.length -1)]
$( "#target2" ).css ({
    "top": getRandomArbitrary(40, 70) + "%",
    "left": getRandomArbitrary(50, 70) + "%",
    "z-index": a,
  })

  $( "#targetB" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })
}

function changeC() {
  let a = zIndexArrMIddle[getRandomArbitrary(0, zIndexArrMIddle.length -1)]
$( "#target3" ).css ({
  "top": getRandomArbitrary(20, 60) + "%",
  "left": getRandomArbitrary(-10, 20) + "%",
    "z-index": a,
  })

  $( "#targetC" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })
}

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

function goChangeA() {
  let firstTimer = setInterval(changeA, 600)
  setTimeout(function () {
    clearInterval(firstTimer)
}, 3400)
}

function goChangeB() {
  let secondTimer = setInterval(changeB, 600)
  setTimeout(function () {
    clearInterval(secondTimer)
}, 3400)
}

function goChangeC() {
  let thirdTimer = setInterval(changeC, 800)
  setTimeout(function () {
    clearInterval(thirdTimer)
}, 3400)
}



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



function mainAnimation() {
  goChangeC()
  goChangeB()
  changePositionA()
  changePositionB()
  goChangeA()
}

function giantAnimation() {

  $( "#giant-glaz" ).css ({
    "top": 100 + "px",
    "transition-duration": 2 + "s",
  })

  $( "#giant-zrachok" ).css ({
    "transform": "translateY(" + 150 + "px)" + "translateX(" + 150 + "px)",
    "transition-duration": 0.1 + "s",
  })
}

function giantZrachokAnimation() {
  $( "#giant-zrachok" ).css ({
    "transform": "translateY(" + 120 + "px)" + "translateX(" + 250 + "px)",
    "transition-duration": 0.7 + "s",
  })

  // setTimeout(function() {
  //   $( "#giant-zrachok" ).css ({
  //     "transform": "translateY(" + 120 + "px)" + "translateX(" + 130 + "px)",
  //     "transition-duration": 0.4 + "s",
  //   }, 2000)
  // })
}



function cityFalls() {
  anime({
    targets: '.img1',
    height: 500,
    duration: 3000,
    delay: 200,
  })
  anime({
    targets: '.img2',
    height: 227,
    duration: 3000,
    delay: 600,
  })
  anime({
    targets: '.img3',
    height: 360,
    duration: 3000,
    delay: 400,
  })
  anime({
    targets: '.img4',
    height: 367,
    duration: 3000,
    delay: 300,
  })
  anime({
    targets: '.img5',
    height: 520,
    duration: 2500,
    delay: 100,
  })
  anime({
    targets: '.img6',
    height: 412,
    duration: 2500,
    delay: 100,
  })
  anime({
    targets: '.img7',
    height: 282,
    duration: 2500,
    delay: 300,
  })
  anime({
    targets: '.img8',
    height: 210,
    duration: 2500,
    delay: 300,
  })
  anime({
    targets: '.img9',
    height: 148,
    duration: 2500,
    delay: 500,
  })
  anime({
    targets: '.img10',
    height: 181,
    duration: 2500,
    delay: 250,
  })
  anime({
    targets: '.img11',
    height: 246,
    duration: 2500,
    delay: 350,
  })
  anime({
    targets: '.img12',
    height: 356,
    duration: 2500,
    delay: 180,
  })
  anime({
    targets: '.img13',
    height: 399,
    duration: 2500,
    delay: 400,
  })
  anime({
    targets: '.img14',
    height: 261,
    duration: 2500,
    delay: 150,
  })
  anime({
    targets: '.img15',
    height: 104,
    duration: 2500,
    delay: 350,
  })
  anime({
    targets: '.img16',
    height: 216,
    duration: 2500,
    delay: 400,
  })
  anime({
    targets: '.img17',
    height: 244,
    duration: 2500,
    delay: 300,
  })
  anime({
    targets: '.img18',
    height: 141,
    duration: 2500,
    delay: 12,
  })
}

function runAway() {

  setTimeout(function() {
    $( "#target1" ).css ({
      "top": 20 + "%",
      "left": 80 + "%",
      "transition-duration": 1 + "s",
    })

  }, 300)


  $( "#target2" ).css ({
    "top": 10 + "%",
    "left": 80 + "%",
    "transition-duration": 2 + "s",

  })

  $( "#target3" ).css ({
    "top": 18 + "%",
    "left": 72 + "%",
    "transition-duration": 2 + "s",
  })

    // $( "#targetA" ).css ({
    //   "transform": "translateY(" + 50 + "px)" + "translateX(" + 50 + "px)",
    //   "transition-duration": 0.4 + "s",
    // })

    setTimeout(function() {
      $( "#targetA" ).css ({
        "transform": "translateY(" + 50 + "px)" + "translateX(" + 15 + "px)",
        "transition-duration": 0.4 + "s",
      })
    }, 600)

    setTimeout(function() {
      $( "#targetB" ).css ({
        "transform": "translateY(" + 20 + "px)" + "translateX(" + 5 + "px)",
        "transition-duration": 0.4 + "s",
      })
    }, 600)

    setTimeout(function() {
      $( "#targetC" ).css ({
        "transform": "translateY(" + 20 + "px)" + "translateX(" + 5 + "px)",
        "transition-duration": 0.4 + "s",
      })
    }, 600)

}
  setTimeout(function() {
  mainAnimation();
}, 1800)

setTimeout(function() {
  giantAnimation()
}, 4600)

setTimeout(function() {
    cityFalls()
}, 5200)

setTimeout(function() {
  runAway()
}, 5200)

setTimeout(function() {
  giantZrachokAnimation()
}, 6200)
