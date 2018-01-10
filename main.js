

$.ajax({
  type: "POST",
  url: "./modules/find-strat.py",
  data: {
    param: text
  }
}).done(function (o) {
  console.log(line);
});