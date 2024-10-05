function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

/* outside the function add the console.log call to see the results of the cleanInputString function */

/* to pass this challenge remove both the console.log statements */
