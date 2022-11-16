function askRate() {
    const triedArticlesNL = document.querySelectorAll(".allBeersList__article--selected");
    const triedArticles = Array.prototype.slice.call(triedArticlesNL);

    
    for (const eachArticle of triedArticles) {
   
        const eachFiltered = triedBeers.find((eachBeer) => eachBeer.id === parseInt(eachArticle.id));

        if(eachFiltered.rate !== undefined && eachFiltered.rate !== null) {
            const rateTextEl = document.createElement("p");
            const rateText = document.createTextNode(eachFiltered.rate);
            rateTextEl.appendChild(rateText);
            eachArticle.appendChild(rateTextEl);
        } else {
            console.log(eachFiltered.rate);
            const rateInputEl = document.createElement("input");
            rateInputEl.type = "text";
            rateInputEl.classList.add("js-rateInput");
            const rateBtnEl = document.createElement("button");
            const rateBtnText = document.createTextNode("Rate");
            rateBtnEl.appendChild(rateBtnText);
            rateBtnEl.classList.add("js-rateBtn");
            eachArticle.appendChild(rateInputEl);
            eachArticle.appendChild(rateBtnEl);
      

        rateBtnEl.addEventListener('click',() =>{
            const rateValue = rateInputEl.value;
            rateInputEl.classList.add("hidden");
            rateBtnEl.classList.add("hidden");
            const rateTextEl = document.createElement("p");
            const rateText = document.createTextNode(rateValue);
            rateTextEl.appendChild(rateText);
            eachArticle.appendChild(rateTextEl);

            eachFiltered.rate = rateValue;
            setLS();
        }); 
    }
}
}

// function getRate() {

// }

// function handleClickRate(ev) {
//     ev.preventDefault();

// }

