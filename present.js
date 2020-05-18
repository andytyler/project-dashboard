var images = []
var img = document.getElementById('catchphraseImage')
var imageNumber = 0
updateList()

setInterval(changeImage, 1000)


async function updateList () {
  const response = await fetch('https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/list/', {})
  const json = await response.json()
  images = await json.catchphrases.Items
}


function changeImage() {
	console.log('change image called')
  let imageUrl = images[imageNumber].url
	img.setAttribute('src', imageUrl )
  imageNumber++
  if (imageNumber > images.length -1) { imageNumber = 0}
}

function escape(event) {
  console.log('in escaped fucntion');
  console.log('KEY IS:', event);
  console.log('WINDOW KEY IS:', window.event);
    if (event.key === "e" || event.keyCode === 27) {
      window.location.replace('/')
    }
}

document.addEventListener('keydown', escape)