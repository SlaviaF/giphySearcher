//fetch data
//connect button with eent listener
//assign img and gif
//create img and append it the document

const searchGifBtn = document.getElementById("searchGifBtn")
const gifType = document.getElementById("gifType")
const noOfGif = document.getElementById("noOfGif")
let displayImages = document.querySelector(".displayImages")
let searchString;
let gifNum;
searchGifBtn.addEventListener("click", getNumofGif)
function getNumofGif() {

    searchString = gifType.value.trim();
    gifNum = noOfGif.value;
    if (gifNum) {
        gifNum = noOfGif.value;
    } else {
        gifNum = 25;
    }


    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4daHcyUX4JjfRxs42eVWkQG1kK3CFIHi&q=${searchString}&limit=${gifNum}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(giphyData => {
            const gifData = giphyData.data
            console.log(gifData)
            const gifImageData = gifData.map((data) => data.images.downsized.url)
            console.log(gifImageData);
            displayImages.innerHTML = "";
            gifImageData.forEach(imgUrl => {
                const img = document.createElement("img")
                img.src = imgUrl

                displayImages.appendChild(img)
                img.style.display = "block"
                img.style.margin = "20px"

            })

        })

}
