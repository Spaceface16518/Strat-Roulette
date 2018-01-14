write = (text) => {
  $(".write-WriteTo").text(text);
  console.log("Write: " + "\"" + text + "\" " + "was written on the page");
}
testConnection = () => {
  console.log("Connection confirmed: Write")
}
clear = () => {
  let html = $(".write-WriteTo").html()
  $(".write-WriteTo").text("");
  console.log("Write: " + "Cleared " + html)
}
export {
  write,
  testConnection,
  clear
}