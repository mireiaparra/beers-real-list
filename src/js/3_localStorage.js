"use strict";
const triedBeersLS = JSON.parse(localStorage.getItem("triedBeers"));

function setLS(){
localStorage.setItem("triedBeers", JSON.stringify(triedBeers));
}

// function removeLS(){
//     localStorage.removeItem("triedBeers", JSON.stringify(triedBeers));
// }

function paintLS(){
    if(triedBeersLS !== null && triedBeersLS.length > 0) {
    triedBeers = triedBeersLS;
    triedList.innerHTML = "";
    for (const eachBeerLS of triedBeersLS) {
    paintData(eachBeerLS, triedList,"allBeersList__article--selected");
}
    }
    styleWhenLS();
    askRate();
}

function styleWhenLS(){
    const allBeersLi = allList.childNodes;

    for (const eachLi of allBeersLi) {
    const eachArticle = eachLi.firstChild;

    const beerInLS = triedBeers.find((eachBeer) => eachBeer.id === parseInt(eachArticle.id));
   if (beerInLS !== undefined) {
    eachArticle.classList.add("allBeersList__article--selectedAll");
   }
} 
}

paintLS();