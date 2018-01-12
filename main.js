$(document).ready(function () {
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

  function fetchPython() {
    $.ajax({
      type: "POST",
      url: "./modules/find-strat.py",
      data: {
        param: text
      }
    }).done(function (result) {
      console.log(line);
    });
  }

  function displayStrat() {
    let strat = fetchPython();
    write(strat);
  }
})