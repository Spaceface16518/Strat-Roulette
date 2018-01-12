generateRandNum = (min, max) => {
  let randomNumber = Math.round((max - min) * Math.random() + min);
  return randomNumber;
}

testConnection = () => {
  console.log("Connection confirmed: RandNum")
}


export {
  generateRandNum,
  testConnection
};