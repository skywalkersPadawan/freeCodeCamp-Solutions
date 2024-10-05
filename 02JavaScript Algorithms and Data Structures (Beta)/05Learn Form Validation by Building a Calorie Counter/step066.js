for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow());
}
function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    /* just add this line below to pass this challenge */
    calories += Number(currVal);
  }
  // add return calories here to pass this challenge
  return calories;
}
