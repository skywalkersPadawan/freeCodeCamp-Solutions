if (input === 0) {
  return "0";
} else if (input === 1) {
  return "1";
} else {
  return decimalToBinary(Math.floor(input / 2)) + (input % 2);
}
