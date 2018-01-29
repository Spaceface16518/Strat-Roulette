import { write, testConnection, clear } from "../assets/modules/Write.js";
import { generateRandNum, testConnection } from "../assets/modules/RandNum.js";
const fetch = require("./modules/Fetch.js");
const highestID = require("./modules/HighestID.js")


function fetchStrat() {
  let highestID = highestID.getHighestID();
  let id = generateRandNum(1, highestID);
  let strat = fetch.fetchStrat(id)
}

function displayStrat(strat) {
  console.log("Displaying strat: " + strat);
  write(strat)
}

function clearStrat() {
  clear()
}

$(document).ready(function(){
  $("#chooseButton").click(function(){
    console.log("Choose button clicked")
    let strat = fetchStrat();
    displayStrat(strat);
  });
  $("#resetButton").click(function(){
    console.log("reset button clicked");
    clearStrat();
  });
})

console.log("Init")
