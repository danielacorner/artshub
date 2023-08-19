
// first let's grab our shape elements so we can manipulate them
const square = document.querySelector(".square")
const circle = document.querySelector(".circle")
const roundedSquare = document.querySelector(".rounded-square")
const triangle = document.querySelector(".triangle")

// now let's create a function that will animate our shapes
function animationLoop() {
  // let's create a variable that will be used to animate our shapes
  // we will use the Date.now() method to get the current date and time
  // we will then divide it by 1000 to get the seconds
  const seconds = Date.now() / 1000
  // we will then use the modulo operator (%) to get the remainder of the division
  // we will then use the remaining degrees to rotate our shapes
  const speed = 10
  const degrees = (seconds * speed) % 360

  const goesTo100 = 100 * (seconds % 1)

  // rotate the square
  square.style.transform = `rotate(${degrees}deg)`

  // scale the circle
  circle.style.transform = `scale(${seconds % 1})`

  // rotate the rounded square faster
  roundedSquare.style.transform = `rotate(${degrees * 8}deg)`

  // translate the circle
  triangle.style.transform = `translateX(${goesTo100}px)`

  // you can use the AI to write your code:
  // try writing a comment like this in english, then you can ask an AI to help you write the JavaScript code
  // https://labs.perplexity.ai/ (fastest)
  // https://huggingface.co/chat/
  // https://www.llama2.ai/

}

// now let's create a function that will start the animation loop
function startTheLoop() {
  setInterval(function () {
    animationLoop()
  }, 1)
}

// let's run startTheLoop() function!
startTheLoop()