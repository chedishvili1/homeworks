async function searchMeal(){
    try{
        const meal = document.getElementById("meal").value;
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        const data = await response.json();
        const Mealimage = data.sprites.font_default;
        const imgElement = document.getElementById("Mealimage")

        imgElement.src = Mealimage;
        imgElement.style.display = "block";
          
    }
    catch(error){
        console.error(error);
    }
}
    
