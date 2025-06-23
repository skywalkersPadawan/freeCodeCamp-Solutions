while (input > 0) {
  const quotient = Math.floor(input / 2);
  input = quotient;
  const remainder = input % 2;
  inputs.push(input);
  quotients.push(quotient);
  remainders.push(remainder);
}
