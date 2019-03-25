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

function firstTextJump() {
  let textTimelineFirst = anime.timeline ({

  })

  textTimelineFirst
  .add ({
    targets: ".hi-first",
    bottom: "50%",
  })

  .add ({
    delay: 1000,
    targets: ".hi-first",
    bottom: "120%",

  })

  let textTimelineSecond = anime.timeline ({

  })

  textTimelineSecond
  .add ({
    delay: 2000,
    targets: ".hi-second",
    bottom: "50%",
  })

  .add ({
    delay: 1000,
    targets: ".hi-second",
    bottom: "120%",
  })

  let textTimelineThird= anime.timeline ({

  })

  textTimelineThird
  .add ({
    delay: 4000,
    duration: 1500,
    duration:"2000",
    targets: ".layer-red",
    bottom: "200%"
  })
}

function secondTextJump() {

  let textTimelineFirst = anime.timeline ({

  })

  textTimelineFirst

  .add ({
    delay: 6500,
    targets: ".layer-white-first",
    bottom: "0%",
    duration: 1000,
    easing: "linear"
  })

  .add ({
    targets: ".hi-third",
    bottom: "50%",
  })
  .add ({
    delay: 1000,
    targets: ".hi-third",
    bottom: "130%",
  })
  .add ({
    delay: 2000,
    targets: ".layer-white-first",
    bottom: "200%",
    duration: 2000,
    easing: "linear"
  })

  let textTimelineSecond = anime.timeline ({

  })

  textTimelineSecond

  .add ({
    delay: 10000,
    targets: ".hi-fourth",
    bottom: "40%",
  })
  .add ({
    delay: 1500,
    targets: ".hi-fourth",
    bottom: "150%",
    duration: 1500,
  })

}

function firstSmallEyesAnimation() {
  let firstEyeTimeline = anime.timeline ({
    delay: 300,
  })

  firstEyeTimeline
  .add ({
    targets: ".first-eye",
    left: "70%",
    top: "20%",
  })
  .add ({
    targets: ".first-eye",
    left: "50%",
    top: "30%",
  })
  .add ({
    targets: ".first-eye",
    left: "30%",
    top: "50%",
  })
  .add ({
    targets: ".first-eye",
    left: "10%",
    top: "30%",
  })
  .add ({
    targets: ".first-eye",
    left: "-20%",
    top: "20%",
    duration: 1000,
  })

  let secondEyeTimeline = anime.timeline ({
    delay: 300,
  })

  secondEyeTimeline
  .add ({
    delay: 500,
    targets: ".second-eye",
    left: "55%",
    top: "20%",
  })
  .add ({
    targets: ".second-eye",
    left: "40%",
    top: "30%",
  })
  .add ({
    targets: ".second-eye",
    left: "10%",
    top: "60%",
  })
  .add ({
    targets: ".second-eye",
    left: "-20%",
    top: "30%",
    duration: 1000,
  })


  let thirdEyeTimeline = anime.timeline ({
    delay: 300,
  })

  thirdEyeTimeline
  .add ({
    targets: ".third-eye",
    left: "62%",
    top: "54%",
  })
  .add ({
    targets: ".third-eye",
    left: "62%",
    top: "70%",
  })
  .add ({
    targets: ".third-eye",
    left: "45%",
    top: "30%",
  })

  .add ({
    targets: ".third-eye",
    left: "-20%",
    top: "40%",
    duration: 1000,
  })


  function changeA () {
    let a = zIndexArrBig[getRandomArbitrary(0, zIndexArrBig.length -1)]
    $( "#target1" ).css ({
      "z-index": a,
    })

    $( "#targetA" ).css ({
      "transform": "translateY(" + getRandomArbitrary(0, 80) + "px)" + "translateX(" + getRandomArbitrary(0, 80) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    })


  }

  function changeB() {
    let a = zIndexArrSmall[getRandomArbitrary(0, zIndexArrSmall.length -1)]

    $( "#target2" ).css ({
      "z-index": a,
    })

    $( "#targetB" ).css ({
      "transform": "translateY(" + getRandomArbitrary(0, 50) + "px)" + "translateX(" + getRandomArbitrary(0, 50) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    })
  }

  function changeC() {
    let a = zIndexArrMIddle[getRandomArbitrary(0, zIndexArrMIddle.length -1)]

    $( "#target3" ).css ({
      "z-index": a,
    })

    $( "#targetC" ).css ({
      "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    })
  }

  let firstTimer = setInterval(changeA, 1000)
  setTimeout(function () {
    clearInterval(firstTimer)
  }, 3400)

  let secondTimer = setInterval(changeB, 800)
  setTimeout(function () {
    clearInterval(secondTimer)
  }, 3400)

  let thirdTimer = setInterval(changeC, 600)
  setTimeout(function () {
    clearInterval(thirdTimer)
  }, 3400)
}

function thirdTextJump() {
  let textTimelineFirst = anime.timeline ({

  })

  textTimelineFirst

  .add ({
    delay: 6500,
    targets: ".layer-white-second",
    bottom: "0%",
    duration: 1000,
    easing: "linear"
  })

  .add ({
    targets: ".hi-fifth",
    bottom: "50%",
  })
  .add ({
    delay: 1000,
    targets: ".hi-third",
    bottom: "130%",
  })
  .add ({
    delay: 2000,
    targets: ".layer-white-first",
    bottom: "200%",
    duration: 2000,
    easing: "linear"
  })
}

function firstCItyApereance() {
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
}



firstTextJump()
secondTextJump()
setTimeout(function() {
  firstCItyApereance()
}, 4000)
setTimeout(function() {
  firstSmallEyesAnimation()
}, 13000)
setTimeout(function() {
  thirdTextJump()
}, 16000)



function thirdPart() {

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
    "transform": "translateY(" + getRandomArbitrary(0, 50) + "px)" + "translateX(" + getRandomArbitrary(0, 50) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
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

function giantGlazAnimationOne() {

  anime({
    delay: 500,
    targets: ".giant-glaz",
    top: "10%",
  })

  $( "#giant-zrachok" ).css ({
    "transform": "translateY(" + 150 + "px)" + "translateX(" + 150 + "px)",
    "transition-duration": 0.1 + "s",
  })
}

function giantGlazAnimationTwo() {

  $( "#giant-glaz" ).css ({
    "transition-duration": "initial",
  })

  let glazTimelineOne = anime.timeline ({

  })

  glazTimelineOne
  .add({
    targets: ".giant-glaz",
    scale: 1.3,
    easing: 'easeOutElastic(1, 0.2)',
    duration: 700,
  })

  .add({
    targets: ".giant-zrachok",
    scaleY: 0.01,
    translateX: 0,
    duration: 300,
  })

  .add({
    delay: 200,
    targets: ".giant-zrachok",
    scaleY: 1,
    duration: 300,
  })

  .add({
    targets: ".giant-zrachok",
    scaleY: {
      value: 0.01,
      duration: 300,
    },
    translateX: {
      value: 350,
      duration: 500,
    }
  })

  .add({
    targets: ".giant-zrachok",
    scaleY: 1,
    duration: 300,
  })

  .add({
    targets: ".giant-zrachok",
    translateX: {
      value: 100,
      duration: 500,
    },
  })

  .add({
    targets: ".giant-zrachok",
    scaleY: 0.01,
    duration: 300,
  })

  .add({
    targets: ".giant-zrachok",
    scaleY: 1,
    translateY: {
      value: 250,
      duration: 500,
    },
    duration: 300,
  })

  .add({
    targets: ".giant-zrachok",
    scale: 0,
    delay: 200,
    duration: 500,
  })


  let glazTimelineTwo = anime.timeline ({
  })

  glazTimelineTwo
  .add({
    targets: ".giant-glaz",
    left: "30%",
    duration: 1400,
  })

  let eyeTimeline = anime.timeline ({
    easing: "linear"
  })

  eyeTimeline
  .add({
    targets: ".first-eye",
    left: {
      value: "120%",
      duration: 300,
    },
  })

  .add({
    targets: ".second-eye",
    left: {
      value: "120%",
      duration: 300,
    },
  })

  .add({
    targets: ".third-eye",
    left: {
      value: "120%",
      duration: 300,
    },
  })

  // .add({
  //   targets: ".first-eye",
  //   scale: {
  //     value: 1.3,
  //     duration: 300,
  //   },
  //   easing: 'easeOutElastic(1, 0.2)',
  // })
}

function giantGlazAnimationThree() {
  let glazTimelineOne = anime.timeline({

  })

  glazTimelineOne

  .add ({
    targets:".giant-glaz",
    width: {
      value: "100%",
    },
    borderRadius: {
      value: ["50%", "0%"],
    },
    left: {
      value: "0%",
    },
  })


}

function giantZrachokAnimation() {

  anime({
    targets: ".giant-zrachok",
    translateX: 250,
    translateY: 120,
  })

  // setTimeout(function() {
  //   $( "#giant-zrachok" ).css ({
  //     "transform": "translateY(" + 120 + "px)" + "translateX(" + 130 + "px)",
  //     "transition-duration": 0.4 + "s",
  //   }, 2000)
  // })
}



function cityFallsOne() {
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
    delay: 120,
  })
}

function cityFallsTwo() {
  anime({
    targets: '.img1',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 200,
  })
  anime({
    targets: '.img2',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 600,
  })
  anime({
    targets: '.img3',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 400,
  })
  anime({
    targets: '.img4',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 300,
  })
  anime({
    targets: '.img5',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 100,
  })
  anime({
    targets: '.img6',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 100,
  })
  anime({
    targets: '.img7',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 300,
  })
  anime({
    targets: '.img8',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 300,
  })
  anime({
    targets: '.img9',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 500,
  })
  anime({
    targets: '.img10',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 250,
  })
  anime({
    targets: '.img11',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 350,
  })
  anime({
    targets: '.img12',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 180,
  })
  anime({
    targets: '.img13',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 400,
  })
  anime({
    targets: '.img14',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 150,
  })
  anime({
    targets: '.img15',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 350,
  })
  anime({
    targets: '.img16',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 400,
  })
  anime({
    targets: '.img17',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 300,
  })
  anime({
    targets: '.img18',
    height: 0,
    easing: "linear",
    duration: 300,
    delay: 12,
  })
}

function runAway() {

  anime({
    targets: ".first-eye",
    top: "20%",
    left: "80%",
    delay: 300,
  })

  $( "#target1" ).css ({
    "transition-duration": "initial",
  })

  anime({
    targets: ".second-eye",
    top: "3%",
    left: "80%",
    delay: 200,
  })

  $( "#target2" ).css ({
    "transition-duration": "initial",
  })

  anime({
    targets: ".third-eye",
    top: "18%",
    left: "72%",
  })

  $( "#target3" ).css ({
    "transition-duration": "initial",
  })

    setTimeout(function() {
      $( "#targetA" ).css ({
        "transform": "translateY(" + 50 + "px)" + "translateX(" + 15 + "px)",
        "transition-duration": 0.4 + "s",
      })
    }, 600)

    setTimeout(function() {
      $( "#targetB" ).css ({
        "transform": "translateY(" + 30 + "px)" + "translateX(" + 5 + "px)",
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
  giantGlazAnimationOne()
}, 4600)

setTimeout(function() {
    cityFallsOne()
}, 5200)

setTimeout(function() {
  runAway()
}, 5200)

setTimeout(function() {
  giantZrachokAnimation()
}, 6200)

setTimeout(function() {
  giantGlazAnimationTwo()
}, 7000)

setTimeout(function() {
  giantGlazAnimationThree()
}, 11000)

setTimeout(function() {
    cityFallsTwo()
}, 11000)

}
