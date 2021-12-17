function addImgToObj(element) {
  if (element.name === "Solen") {
    element.img_src =
      "https://cdn-icons.flaticon.com/png/512/2493/premium/2493693.png?token=exp=1639677471~hmac=c17a3488ebf7597081fc013e430d44f0";
  } else if (element.name === "Merkurius") {
    element.img_src =
      "https://cdn-icons.flaticon.com/png/512/5551/premium/5551395.png?token=exp=1639595228~hmac=26eac636886f85ecf09c68d7655b6fda";
  } else if (element.name === "Venus") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/3594/3594083.png";
  } else if (element.name === "Jorden") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/814/814513.png";
  } else if (element.name === "Mars") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/3594/3594089.png";
  } else if (element.name === "Jupiter") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/3336/3336008.png";
  } else if (element.name === "Saturnus") {
    element.img_src =
      "https://cdn-icons.flaticon.com/png/512/3013/premium/3013200.png?token=exp=1639595228~hmac=d399b8e5a8e47973cdd295f110254344";
  } else if (element.name === "Uranus") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/2949/2949010.png";
  } else if (element.name === "Neptunus") {
    element.img_src = "https://cdn-icons-png.flaticon.com/512/2590/2590317.png";
  } else if (element.name === "Pluto") {
    element.img_src =
      "https://cdn-icons.flaticon.com/png/512/1422/premium/1422528.png?token=exp=1639676144~hmac=e4926d6c2e75832f287cc45c9067d3b9";
  } else if (element.name === "Stjärnfall") {
    let star = (element.img_src =
      "https://cdn-icons-png.flaticon.com/512/4698/4698817.png");
  }
}

let pluto = {
  id: 9,
  type: "dvärgplanet",
  name: "Pluto",
  latinName: "",
  rotation: "",
  circumference: 7232,
  temp: {
    day: -229,
  },
  distance: 5900000000,
  orbitalPeriod: 248,
  desc: "Ursprungligen antogs Pluto vara ungefär lika stor som jorden och den klassificerades som den nionde planeten från solen. I augusti 2006 blev Pluto omklassificerad till en dvärgplanet. Skälet till detta var insikten att Pluto bara är en av många liknande himlakroppar i Kuiperbältet. Den är också relativt liten. Enligt aktuella värden är Plutos volym bara 0,6 % och dess massa 0,2 % av jordens.",
  moons: ["Charon", "Nix", "Hydra", "Kerberos", "Styx"],
};
let meteorid = {
  id: 10,
  type: "meteorid",
  name: "Stjärnfall",
  kalender:
    "https://illvet.se/universum/solsystemet/meteor/stjarnfall-din-guide-till-arets-vackraste-meteorregn",
  desc: "Meteor, även stjärnfall, (av grekiska meteoros – i luften befintlig) är det ljusstreck som kortvarigt syns på stjärnhimlen när en liten interplanetär kropp, en meteoroid, med mycket hög hastighet faller in i jordatmosfären. Ljusskenet uppstår på cirka 100 km höjd när meteoren förångas på grund av de höga temperaturer som uppstår vid friktionen mot atmosfären. De flesta meteorider når aldrig jordytan, men de som ändå når jordytan kallas meteoriter. Under en mörk och molnfri natt ser man normalt 2–10 meteorer i timmen.",
  latinName: "",
  moons: [""],
};

//Funktion som adderar eller tar bort klasser för att toggla
function toggleDisplay(element, event) {
  if (event === true) {
    element.classList.add("hide");
  } else {
    element.classList.remove("hide");
  }
}

export { pluto, meteorid, addImgToObj, toggleDisplay };
