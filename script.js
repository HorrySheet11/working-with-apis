const img = document.querySelector("img");
const search = document.querySelector("#search-input");
let searchValue;
const replaceSearch = (input) =>{
	searchValue = input.replaceAll(" ", "-");
}

const fetchGIF = (search = "the_owl_house") =>
	fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=p5ENc6JElwzTQ1MZ3uPmBUsI9ZlraLpM&s=${search}`,
	)
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((response) => {
			img.src = response.data.images.original.url;
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});

fetchGIF();
search.addEventListener("input",()=> {replaceSearch(search.value)});
document.querySelector(".newGIF").addEventListener("click",() => fetchGIF(searchValue));