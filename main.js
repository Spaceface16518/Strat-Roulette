$(document).ready(function () {
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