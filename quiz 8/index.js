const API_KEY = "1b40634a79db4734baf203617210410";

const button = document.querySelector('button');
const input = document.querySelector('input');
const CountryDataDiv = document.querySelector('.country-info');

let enteredCountry =getcountryData()

button.addEventListener('click', (e) => {
    enteredCity = input.value;
    input.value = '';
    getcountryData();
  })

  async function getCountryData() {
    const url = https://restcountries.com/v3.1/name/json?key=${API_KEY}&q=${enteredCountry}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        let country = json.location.country;
        let city = json.location.name;
        let temp = json.current.temp_c;
        let humidity = json.current.humidity;
        let condition = json.current.condition.text;
        let imageUrl = json.current.condition.icon;
        CountryDataDiv.innerHTML = `
        <h3>Country: ${country}, ${city}</h3>
        <img src=${imageUrl} alt="">
        <p>Humidity: ${humidity}%</p>
        <p>Condition: ${condition}</p>
        `
      } catch (error) {
        console.error(error.message);
      }
    }