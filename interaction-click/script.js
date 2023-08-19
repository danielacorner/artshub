
// first let's grab our shape elements so we can manipulate them
const square = document.querySelector(".square")
const circle = document.querySelector(".circle")
const roundedSquare = document.querySelector(".rounded-square")
const triangle = document.querySelector(".triangle")

const debugPanel = document.querySelector(".debug-panel")

// add an "event listener" that listens to the mouse click event
// when the mouse is clicked...
// the callback function will run
window.addEventListener("click", function (event) {
  // get the click coordinates:
  const x = event.clientX
  console.log("⭐🎈  file: script.js:16  x:", x)
  const y = event.clientY

  // create a copy of the square at the click coordinates:
  const newSquare = square.cloneNode()
  newSquare.style.position = "absolute"
  newSquare.style.top = y + "px"
  newSquare.style.left = x + "px"
  document.body.appendChild(newSquare)

})

// now let's create a function that will animate our shapes
function animationLoop() {

  debugPanel.innerHTML = `

  `

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