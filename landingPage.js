//Variabler
let background = document.getElementById("main-section-landingPage");
//Funktion som skickar använderen till sök-sidan
function goToSearch() {
  setTimeout((location.href = "index.html"), 1000);
}
//eventlyssnare med timer
background.addEventListener("click", function () {
  background.style.backgroundImage =
    "url('https://images.unsplash.com/photo-1459624470348-67edb45d81b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')";
  console.log("click");
  setTimeout(goToSearch, 1000);
});
