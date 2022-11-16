"use strict";
function getDataServer(url) {
    fetch(url)
    .then ((response) => response.json())
    .then((data) => {
        allBeers = data;
        allList.innerHTML = "";
        for (const eachBeer of allBeers) {  
            paintData(eachBeer, allList, "allBeersList__article");
        }
        getClick();
    })
}

function paintData(whichData, whichList, whichClass) {
    const eachLi = document.createElement("li");
    const article = document.createElement("article");
    article.classList.add(whichClass);
    article.setAttribute("id", `${whichData.id}`)

    const beerImgEl = document.createElement("img");

    if(`${whichData.image_url}` !== "null") {
        beerImgEl.src = `${whichData.image_url}`;
    } else {
        beerImgEl.src = "https://images.punkapi.com/v2/keg.png"
    }
   
    beerImgEl.alt = `${whichData.name}`;
    beerImgEl.style.height = "80px";
    article.appendChild(beerImgEl);

    const beerNameEl = document.createElement("h2");
    const beerNameText = document.createTextNode(`${whichData.name}`);
    beerNameEl.classList.add("beers__name");
    beerNameEl.appendChild(beerNameText);
    article.appendChild(beerNameEl);

    const beerTagEl = document.createElement("p");
    const beerTagText = document.createTextNode(`${whichData.tagline}`);
    beerTagEl.classList.add("beers__tagline");
    beerTagEl.appendChild(beerTagText);
    article.appendChild(beerTagEl);

    eachLi.appendChild(article);
    whichList.appendChild(eachLi);
}
getDataServer("https://api.punkapi.com/v2/beers");