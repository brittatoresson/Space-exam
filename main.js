//import från module
import { pluto, meteorid, addImgToObj, toggleDisplay } from "./module.js";
//Variabler
let galaxySearchInput = document.getElementById("galaxy-search-input");
let body = document.querySelector("body");
let header = document.getElementById("search-header");
let galaxySearch = document.getElementById("galaxy-search");
let star = document.getElementById("star");
let displayGalaxySearch = document.getElementById("display-galaxy-search");
let planetArticle;
let found = false;

// Konstanter
const APIKey = "solaris-NKsTcw3OPrMQPoSz";

//Eventlyssnare för enter
galaxySearchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    //Kalla på funktionen getData
    getData();
  }
});
//Funktion som hämtar data och kontrollerar för fel
async function getData() {
  //Kodblock som testas för fel vid hämtning av data
  try {
    let response = await fetch(
      "https://fathomless-shelf-54969.herokuapp.com/bodies",
      {
        method: "GET",
        headers: { "x-zocom": APIKey },
      }
    );
    console.log(response);
    //Om response inte är ok (finns i response-objektet). Throw genererar anpassat fel-svar
    if (!response.ok) {
      throw response;
    }
    let data = await response.json();
    let inputValue = galaxySearchInput.value;
    searchGalaxy(data, inputValue);
    return await data;
    //Vid fel i Try => HANTERAR ERROR OCH VISAR PÅ DISPLAY
  } catch (error) {
    alert(`Error: ${error.status} ${error.statusText} `);
    console.error(error);
  }
}
//Sökfunktionen
function searchGalaxy(data, inputValue) {
  //Rensa UI vid varje sökning
  galaxySearch.innerHTML = "";
  displayGalaxySearch.innerText = "";
  galaxySearchInput.value = "";
  //Addera nytt objekt till arrayen data.bodies
  data.bodies.push(pluto);
  data.bodies.push(meteorid);
  //Toggla header när sökresultat visas
  toggleDisplay(header, true);
  //Loopa igenom data för att hämta objekt för varje planet
  for (let i = 0; i < data.bodies.length; i++) {
    let element = data.bodies[i];
    //addera IMG till objektet
    addImgToObj(element);
    //Kontrollera om sökordet = namn/latinname/typ
    if (
      element.name.toLowerCase() === inputValue.toLowerCase() ||
      element.latinName.toLowerCase() === inputValue.toLowerCase() ||
      element.type.toLowerCase() === inputValue.toLowerCase()
    ) {
      found = true;
      updateUI(element, inputValue);
    }
    // Loopa igenom element.moons och jämför input med moon-arrayen
    for (let i = 0; i < element.moons.length; i++) {
      let moons = element.moons[i];
      //Ta bort flera "titan"-månar från saturnus-arrayen
      if (inputValue.toLowerCase() === "Titan".toLowerCase()) {
        element.moons.splice(0, 2);
        element.moons.splice(3, 1);
      }
      // Om input = månnamn
      if (moons.toLowerCase() == inputValue.toLowerCase()) {
        displayGalaxySearch.innerText = ` ${inputValue} är en av ${element.name} månar`;
        displayGalaxySearch.style.backgroundColor = "rgba(108, 66, 134, 0.527)";
        displayGalaxySearch.style.padding = "1rem";
        found = true;
        updateUI(element, inputValue);
      }
    }
  }
  //Om sökordet inte är = namn/latinname/typ
  if (found === false) {
    displayGalaxySearch.innerHTML = `Sorry, kan inte hitta <b>${inputValue}</b> i Vintergatan, testa en annan galax?`;
    displayGalaxySearch.style.backgroundColor = "rgba(108, 66, 134, 0.527)";
    displayGalaxySearch.style.padding = "1rem";
  }
}

function updateUI(item, input) {
  //Skap article och appenda till galaxySearch-article
  planetArticle = document.createElement("article");
  galaxySearch.appendChild(planetArticle);
  planetArticle.setAttribute("id", "planetArticle");
  //Skap img och appenda till galaxySearch-article
  let planetImg = document.createElement("img");
  planetArticle.appendChild(planetImg);
  planetImg.setAttribute("id", "planetImg");
  planetImg.setAttribute("src", item.img_src);
  //Uppdatera UI med namn och img
  if (input) {
    planetArticle.innerHTML = ` <h2>${item.name}</h2>  <img src=${item.img_src}> `;
  }
  //Kallar på funktionen goToInfoPage
  goToInfoPage(item);
}
//Funktion med eventlyssnare, gör om data till en sträng, skickar till ny location
function goToInfoPage(item) {
  planetArticle.addEventListener("click", function () {
    window.localStorage.setItem("planet", JSON.stringify(item));
    location.href = "infoPage.html";
  });
}
//FUNGERAR EJ, WHYY?
star.addEventListener("click", function () {
  goToInfoPage(item);
  console.log("hhej");
});
