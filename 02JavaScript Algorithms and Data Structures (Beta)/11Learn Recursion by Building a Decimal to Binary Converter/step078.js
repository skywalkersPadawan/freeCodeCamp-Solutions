const inputInt = parseInt(numberInput.value);

if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
  alert("Please provide a decimal number greater than or equal to 0");
  return;
}

if (inputInt === 5) {
  showAnimation();
  return;
}

result.textContent = decimalToBinary(inputInt);
numberInput.value = "";

// replace all the instances of the numberInput.value with intInput
