const img = document.querySelector("img");
const search = document.querySelector("#search-input");
let searchValue;
const replaceSearch = (input) => {
	searchValue = input.replaceAll(" ", "-");
};

const fetchGIF = async (search = "the_owl_house") => {
	try {
		const response = await fetch(
			`https://api.giphy.com/v1/gifs/translate?api_key=p5ENc6JElwzTQ1MZ3uPmBUsI9ZlraLpM&s=${search}`,
		);
		const data = await response.json();
		console.log(data.data.images.original.url);
		if (data.data.images.original.url.slice(-15) === img.src.slice(-15)){
			fetchGIF(searchValue);
		}else{
			img.src = data.data.images.original.url;
		}
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

fetchGIF();
search.addEventListener("input", () => {
	replaceSearch(search.value);
});
document
	.querySelector(".newGIF")
	.addEventListener("click", () => fetchGIF(searchValue));
