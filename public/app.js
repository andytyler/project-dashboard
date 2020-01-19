var coverArea = document.getElementById('coverArea')
var totalCoverBoxes = 100
var imageNumber = 1
var startDelay = 5
var rateOfDecay = 2

var images = []
let img = document.getElementById('catchphraseImage')


async function setUpPage() {
	const response = await fetch('https://ibnibvvcs7.execute-api.eu-west-1.amazonaws.com/Prod/hello/', {})
	const json = await response.json()
	images = await json.catchphrases

	img.setAttribute('src', images[0])
}

images = {
	catchphrases: [
	"https://www.rd.com/wp-content/uploads/2017/10/this-is-why-there-are-13-in-a-baker-s-dozen_179437478_stevemart-1024x683.jpg",
	"https://media.photoblog.com/photos5/96736-1237849384-5-l.jpg",
	"https://www.heinzmarketing.com/wp-content/uploads/2017/08/A-watched-pot-never-boils.jpg",
	"https://www.iaexperiment.com/wp-content/uploads/2016/08/Foot-in-the-door-02.png",
	"https://100-pics.net/images/answers/en/whatphrase/whatphrase_32729_168456.gif",
	"https://americancultureconsultants.com/wp-content/uploads/2017/08/bird-hand-cartoon-1080x675.jpg",
	"https://13degreez.files.wordpress.com/2012/12/rock-and-a-hard-place-resized-600.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-I9aLHTLOMuHF9ZNd08K8wTRDNDTy969ktAx8s4deh26bCHMSA",
	"https://cdn2.vectorstock.com/i/1000x1000/33/46/saying-raining-cats-and-dogs-cartoon-vector-16803346.jpg",
	"https://i.imgur.com/uGjyeQT.jpg",
	"http://idiomic.com/wp-content/uploads/2016/12/idiomic_pickle_600.jpg",
	"https://f4.bcbits.com/img/a3782539710_10.jpg",
	"https://keystoneelderlaw.com/wp-content/uploads/2018/03/nest-egg.jpg"
	]
}


function changeImage() {
	img.setAttribute('src', images[imageNumber])
	imageNumber++
	console.log('change image called')
}


// setUpPage()
setInterval(changeImage, 1000)