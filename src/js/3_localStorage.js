"use strict";
const triedBeersLS = JSON.parse(localStorage.getItem("triedBeers"));

function setLS(){
localStorage.setItem("triedBeers", JSON.stringify(triedBeers));
}

function paintLS(){
    triedList.innerHTML = "";
    for (const eachBeerLS of triedBeersLS) {
    paintData(eachBeerLS, triedList,"allBeersList__article--selected");
    }
}

paintLS();