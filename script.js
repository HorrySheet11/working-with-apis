const img = document.querySelector("img");

const fetchGIF =()=>(fetch(
	"https://api.giphy.com/v1/gifs/translate?api_key=p5ENc6JElwzTQ1MZ3uPmBUsI9ZlraLpM&s=the_owl_house",
)
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		img.src = response.data.images.original.url;
	}));
fetchGIF();
setInterval(fetchGIF, 5000);

document.querySelector("button").addEventListener("click", fetchGIF);
