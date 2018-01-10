  import write from "./modules/write.js";


$.ajax({
  type: "POST",
  url: "./modules/find-strat.py",
  data: {
    param: text
  function displayStrat() {
    let strat = fetPython;
    write(strat);
  }
}).done(function (o) {
  console.log(line);
});