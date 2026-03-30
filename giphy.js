const searchGifBtn = document.getElementById("searchGifBtn");
const gifType = document.getElementById("gifType");
const noOfGif = document.getElementById("noOfGif");
let displayImages = document.querySelector(".displayImages");
let searchString;
let gifNum;

// Set default values on page load
window.addEventListener("DOMContentLoaded", () => {
    gifType.value = "smile";  // default search term
    noOfGif.value = 10;       // default number of GIFs
    getNumofGif();            // fetch GIFs automatically on page load
});

searchGifBtn.addEventListener("click", getNumofGif);

function getNumofGif() {
    searchString = gifType.value.trim() || "smile"; // fallback to "smile"
    gifNum = parseInt(noOfGif.value) || 10;         // fallback to 10

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4daHcyUX4JjfRxs42eVWkQG1kK3CFIHi&q=${searchString}&limit=${gifNum}&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(giphyData => {
            const gifData = giphyData.data;
            const gifImageData = gifData.map(data => data.images.downsized.url);
            
            displayImages.innerHTML = ""; // clear previous GIFs

            gifImageData.forEach(imgUrl => {
                const img = document.createElement("img");
                img.src = imgUrl;
                img.style.display = "block";
                img.style.margin = "20px";
                displayImages.appendChild(img);
            });
        })
        .catch(err => console.error("Error fetching GIFs:", err));
}