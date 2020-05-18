var images = []
const exitTextBox = document.getElementById('exit-text-box')
const url = document.getElementById('entry-text-box')
// const urltext = url.value
// var data = JSON.stringify({ url: urltext })
getList()

async function getList () {
  const response = await fetch('https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/list/', {})
  const json = await response.json()
  images = await json.catchphrases.Items
  
  const display = document.getElementById('display')
  display.innerHTML = ''
  
  images.forEach((item) => {
    var deleteButton = document.createElement('button') // Create a <button> element
    deleteButton.id = item.id
    deleteButton.onclick = XHRDelete
    deleteButton.classList += "badge badge-danger badge-pill"
    deleteButton.innerText = "Delete" // Insert text

    var URLitem = document.createElement('li') // Create a <button> element
    URLitem.classList += "list-group-item d-flex justify-content-between align-items-center"
    URLitem.innerHTML = item.url // Insert text
    
    display.appendChild(URLitem)
    URLitem.appendChild(deleteButton)


    // <span class="badge badge-danger badge-pill" onclick="XHRDelete()">Delete</span>
  })
}


// $('#submit-button').on('click', function(event) {
//   event.preventDefault(); // To prevent following the link (optional)
//   XHRPost()
// });

async function XHRPost () {
  var http = new XMLHttpRequest()
  var url = 'https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/add/'
  const box = document.getElementById('entry-text-box')
  var data = JSON.stringify({ url: box.value })
  console.log(data);
  http.open('POST', url, true)
  event.preventDefault()
  // Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/json')
  http.send(data)
  box.value = ""

  http.onreadystatechange = function () { // Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText)
      getList()
    }
  }
}

async function XHRDelete () {
  console.log('IN THE DELETE FUNC');
  const key = this.id
  
  var http = new XMLHttpRequest()
  var url = 'https://mhs6nqd42a.execute-api.eu-west-1.amazonaws.com/Prod/delete/'

  // const box = document.getElementById('entry-text-box')
  var data = JSON.stringify({ id: key })
  http.open('POST', url, true)

  // Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/json')
  http.send(data)

  http.onreadystatechange = function () { // Call a function when the state changes.
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText)
      getList()
    }
  }
}
