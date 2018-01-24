import {
  write,
  testConnection,
  clear
} from "./modules/Write.js";
import {
  generateRandNum,
  testConnection
} from "./modules/RandNum.js";
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
