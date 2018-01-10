const Write = {};
Write.write = function(text) {
  $("#result").text(text);
  console.log("\"" + text + "\" " + "was written on the page");
}
Write.testConnection = function() {
  console.log("Connection confirmed: " + )
}