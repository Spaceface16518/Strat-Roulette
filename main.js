import {
  write,
  testConnection
} from "./modules/Write.js";
import {
  generateRandNum,
  testConnection
} from "./modules/RandNum.js";
const fetch = require("./modules/Fetch.js");
const highestID = require("./modules/HighestID.js")

$(document).ready(function () {
  function fetchStrat() {
    let cap = highestID.getHighestID();
    let id = generateRandNum(1, cap);
    let strat = fetch.fetchStrat(id)
  }

  function displayStrat(strat) {
    console.log("Displaying strat: " + strat);
    write(strat)
  }

})