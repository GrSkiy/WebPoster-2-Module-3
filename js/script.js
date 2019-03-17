
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let scaleArr = [0.7, 0.8, 0.9, 1.1, 1.2, 1.3, 1.4]
let zIndexArrBig = [-2, -4, -6, -8, -10, -12]
let zIndexArrSmall = [-26, -28, -30, -32]

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

function change() {
  let b = zIndexArrSmall[getRandomArbitrary(0, zIndexArrSmall.length -1)]
$( "#target2" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 200) + "px)" + "translateX(" + getRandomArbitrary(-300, 300) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
    "z-index": b,
  })

  $( "#targetB" ).css ({
    "transform": "translateY(" + getRandomArbitrary(0, 25) + "px)" + "translateX(" + getRandomArbitrary(0, 25) + "px)" + "scale(" + scaleArr[getRandomArbitrary(0, scaleArr.length - 1)] + ")",
  })
}

function changePosition() {
  $( "#target2" ).css ({
  "right": 33.44 + "%",
  "top": 45.74 + "%",
  })
}

function goChangeAnim() {
  setTimeout(function() {
    changeAnim()
    goChangeAnim()
  }, 700)
}

function goChange() {
  setTimeout(function() {
    change()
    goChange()
  }, 500)
}

function all() {
  goChange()
  changePosition()
  goChangeAnim()
}

$( "#target1" ).click(function() {
  all();
});
