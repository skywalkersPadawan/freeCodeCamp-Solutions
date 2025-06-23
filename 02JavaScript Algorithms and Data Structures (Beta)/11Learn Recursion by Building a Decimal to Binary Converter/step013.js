if (
  !numberInput.value ||
  isNaN(parseInt(numberInput.value)) ||
  parseInt(numberInput.value) < 0
) {
  alert("Please provide a decimal number greater than or equal to 0");
}
