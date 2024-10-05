function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// test the function to pass this challenge
console.log(isInvalidInput("1e3"));
