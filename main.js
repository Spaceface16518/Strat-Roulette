$(document).ready(function () {
  import Write from "https://gist.github.com/Spaceface16518/f91d67bf0745cead14dc6f81d015e187.js";
  function fetchPython() {
    $.ajax({
      type: "POST",
      url: "./modules/find-strat.py",
      data: {
        param: text
      }
    }).done(function () {
      console.log(line);
    });
  }

  function displayStrat() {
    let strat = fetPython;
    write(strat);
  }
})