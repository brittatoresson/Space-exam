//Import från module
import { toggleDisplay } from "./module.js";
//Hämta data från local storage, gör om från sträng till JSON-obj
let planet = window.localStorage.getItem("planet");
planet = JSON.parse(planet);

//Varibler
let planetInfo = document.getElementById("display-planet-info");
let moonDisplay = document.getElementById("planet-moon");
let planetLatin = document.getElementById("planet-latin");
let planetName = document.getElementById("planet-name");
let planetDesc = document.getElementById("planet-desc");
let btnBack = document.getElementById("btnBack");
let page = 1;
let perPage = 3;
let btnNext;
let totalPages;

//Funktion som uppdaterar UI
function updateUI(item) {
  //Skapa article och appenda till planetInfo-article
  let planetArticle = document.createElement("ul");
  planetInfo.appendChild(planetArticle);
  planetInfo.setAttribute("id", "planetInfo");
  //Skap img och appenda till planetInfo-article
  let planetImg = document.createElement("img");
  planetInfo.appendChild(planetImg);
  planetImg.setAttribute("id", "planetImgInfo");
  planetImg.setAttribute("src", item.img_src);
  //Uppdatera UI med informatiom om vald himlakropp
  planetName.innerHTML = ` <h1>${item.name}</h1>`;
  planetDesc.innerHTML = ` ${item.desc}`;
  planetArticle.innerHTML = `
<li><h3>Himlakropp</h3>${item.type}</li>
<li><h3>Distans från solen </h3> ${item.distance} km</li>
<li> <h3>Orbit</h3> ${item.orbitalPeriod} dagar </li>
<li><h3> Ett jorddygn är </h3> ${item.rotation} dygn på ${item.name}</li>`;
  nextMoon(planet);
  //Om sökning = stjärnfall -> toggla övrig info om planeter
  if (item.name === "Stjärnfall") {
    toggleDisplay(planetArticle, true);
  }
  //Toggla namn på latin vid mouseenter/mouseleave
  let planetImgInfo = document.getElementById("planetImgInfo");
  planetImgInfo.addEventListener("mouseenter", function () {
    planetLatin.innerHTML = `<i>${item.latinName}</i>`;
  });
  planetImgInfo.addEventListener("mouseleave", function () {
    planetLatin.innerHTML = "";
  });
}

//Paginering av månarna
function nextMoon(planet) {
  //Rensa UI
  moonDisplay.innerHTML = "";
  //Variabler
  let moon;
  let moonArray = planet.moons;
  let arrayLength = planet.moons.length;
  let moonListOne = [];
  totalPages = Math.ceil(arrayLength / perPage);
  // Om planet inte har några månar eller om totalt antal sidor = 1, ta bort knapp
  if (totalPages === 1) {
    btnNext.remove();
  }
  if (arrayLength === 0) {
    btnNext.remove();
  }
  // Loopa igenom månarray
  for (moon of moonArray) {
    //Ta ut 4 första elementen från moon-array och pusha in i ny lista (lsitOne). Orginalarrayen blir koratre, samma procedur upprpas tills arrayLengt = 0.
    moonListOne.push(moonArray.splice(0, 4));
    //Uppdatera UI med månar
    if (moon) {
      moonDisplay.innerHTML = `Månar: ${moonListOne}`;
      break;
    }
  }
}

//Eventlyssnare som tar en tillbaka till searchPage
btnBack.addEventListener("click", function () {
  location.href = "index.html";
});
//Eventlyssnare för paginering av månar
btnNext = document.createElement("button");
planetInfo.appendChild(btnNext);
btnNext.innerText = "Visa fler";
btnNext.addEventListener("click", function () {
  page = page + 1;
  updateUI(planet);
});
updateUI(planet);
