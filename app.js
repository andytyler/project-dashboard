var coverArea = document.getElementById('coverArea')
var totalCoverBoxes = 100
var imageNumber = 0
var startDelay = 5
var rateOfDecay = 2

var images = []
const img = document.getElementById('catchphraseImage')

async function setUpPage () {
  const response = await fetch('https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/list/', {})
  const json = await response.json()
  images = await json.catchphrases
}

function changeImage () {
  img.setAttribute('src', images[imageNumber])
  imageNumber++
  if (imageNumber >= images.length) {
    imageNumber = 0
  }
  console.log('changeImage() called')
}

setUpPage()
setInterval(changeImage, 10000)
