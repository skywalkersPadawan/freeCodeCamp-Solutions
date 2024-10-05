function cleanInputString(str) {
  console.log("original string: ", str);
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
