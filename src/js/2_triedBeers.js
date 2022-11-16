"use strict";
// function paintTried(ev){
//     const eachArticle = ev.currentTarget.firstChild;
//     eachArticle.classList.toggle("allBeersList__article--selected");
// }

function getTried(ev){
    const eachArticle = ev.currentTarget.firstChild;
    eachArticle.classList.toggle("allBeersList__article--selected");

    if (eachArticle.classList.contains("allBeersList__article--selected")) {
    const isTried = allBeers.find(eachObject => eachObject.id === parseInt(eachArticle.id));

    paintData(isTried, triedList,"allBeersList__article--selected");

    }
}

function handleClickTried(ev){
    getTried(ev);
}

function getClick(){
    for (let i = 0; i < allListLi.length; i++) {
        allListLi[i].addEventListener('click', handleClickTried);
    }
}
