let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
let result = document.getElementById("result"); // Assuming you have an HTML element with this ID to display the results

let funFacts = [
    "Did you know that the world's smallest country is Vatican City, which is only 0.44 square kilometers in size?",
    "The world's largest country by land area is Russia, which covers over 17 million square kilometers.",
    "The world's most populous country is China, with over 1.4 billion people.",
    "The world's driest desert is the Atacama Desert in Chile, which receives less than 1 millimeter of rain per year.",
    "The world's highest mountain is Mount Everest, which is 8,848 meters tall."
  ];


searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value; // Get the country name from the input field
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL).then((response) => response.json()).then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));

        let flagpic = data[0].flags.svg; // Extract the flag URL from the response

        let funfact = funFacts[Math.floor(Math.random()*funFacts.length)];
        result.innerHTML = `
            <img src="${flagpic}" class="flag-img">
            <div class="wrapper">
            <h2>${data[0].name.common}<h2>
            </div>
            <div class="wrapper">
                    <h4>Capital: ${data[0].capital[0]}</h4>
                    <h4>Continent: ${data[0].continents[0]}</h4>
                    <h4>Currencies: ${Object.keys(data[0].currencies)[0]}</h4>
                    <h4>Language(s): ${Object.values(data[0].languages).toString().split(",").join(", ")}</h4>
                    
            </div>
            <p class="funFact">${ funfact}</p>
        `;
        countryInp.value = "";
    });
});