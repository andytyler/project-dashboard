var coverArea = document.getElementById('coverArea')
var totalCoverBoxes = 100
var imageNumber = 0
var startDelay = 5
var rateOfDecay = 2

// var XMLHttpRequest = require('XMLHttpRequest')

var images = []
const url = document.getElementById('entry-text-box')
const urltext = url.innerText

function XHRPost () {
  var xhttp = new XMLHttpRequest()
  var apiUrl = 'https://ibnibvvcs7.execute-api.eu-west-1.amazonaws.com/Prod/add'

  xhttp.open('POST', apiUrl, true)
  xhttp.setRequestHeader('Content-type', 'application/json')
  xhttp.send('urltext')
}
