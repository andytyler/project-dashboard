var coverArea = document.getElementById('coverArea')
var totalCoverBoxes = 100
var imageNumber = 0
var startDelay = 5
var rateOfDecay = 2

// var XMLHttpRequest = require('XMLHttpRequest')

var images = []
const url = document.getElementById('entry-text-box')
const urltext = url.value
var data = JSON.stringify({ url: urltext })

async function getList () {
  const response = await fetch('https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/list/', {})
  const json = await response.json()
  images = await json.catchphrases
  const url = document.getElementById('exit-text-box')
  url.innerText = JSON.stringify(images)
}

async function XHRPost() {
  const url = document.getElementById('entry-text-box')
  const urltext = url.value
  var data = JSON.stringify({ url: urltext })
  
  const response = await fetch('https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/add/', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data)
  })
  const json = await response.json()
  const url = document.getElementById('exit-text-box')
  url.innerText = JSON.stringify(json)
}
