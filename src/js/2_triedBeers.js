"use strict";

function getTried(ev){
    const eachArticle = ev.currentTarget.firstChild;
    eachArticle.classList.add("allBeersList__article--selectedAll");

    const isTried = allBeers.find(eachObject => eachObject.id === parseInt(eachArticle.id));
    const isTriedIndex = triedBeers.findIndex(eachObject => eachObject.id === parseInt(eachArticle.id));

    if(isTriedIndex === -1) {
        triedBeers.push(isTried);
    } else {
        triedBeers.splice(isTriedIndex, 1);
        eachArticle.classList.remove("allBeersList__article--selectedAll");
    }
    setLS();
}

function paintTried(){
    triedList.innerHTML = "";
    for (const eachTriedBeer of triedBeers) {
    paintData(eachTriedBeer, triedList,"allBeersList__article--selected");
 }
 askRate();
}

function handleClickTried(ev){
    getTried(ev);
    paintTried();
}

function getClick(){
    for (let i = 0; i < allListLi.length; i++) {
        allListLi[i].addEventListener('click', handleClickTried);
    }
}
