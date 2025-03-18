const  movie = document.getElementById("movie-title-display")
const  year = document.getElementById("movie-year")
const  rated = document.getElementById("movie-rated")
const  released = document.getElementById("movie-released")
const  runtime = document.getElementById("movie-runtime")
const  genre = document.getElementById("movie-genre")
const  generateBtn= document.getElementById("generate-btn")



generateBtn.addEventListener("click", () => {
    getUserInfo();
})
async function getUserInfo() {
    const response = await fetch(`http://img.omdbapi.com/?apikey=[8daf5c4]&`);
        const result = await response.json();
        console.log(result);
        setUserInfo(result);
}

function setUserInfo(result){
    movie.textContent = result.results[0].title;
    year.textContent = result.results[0].year;
}
