function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

/* outside the function add the console.log call to see the results of the cleanInputString function */
console.log(cleanInputString("+-99"));
