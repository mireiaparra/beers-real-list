"use strict";
const allList = document.querySelector(".js-allBeersList");
let allListLi = allList.children;
const searchBtn = document.querySelector(".js-searchBtn");
const searchInput = document.querySelector(".js-searchInput");

const triedList = document.querySelector(".js-triedBeersList");


let allBeers = [];
let triedBeers = [];