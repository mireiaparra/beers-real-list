"use strict";
function searchBeer() {
  const inputValue = searchInput.value.toLowerCase();

  getDataServer(`https://api.punkapi.com/v2/beers?beer_name=${inputValue}`);
}

searchBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  searchBeer();
});
