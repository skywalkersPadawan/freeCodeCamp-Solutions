function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  const breakfastNumberInputs = document.querySelectorAll(
    '#breakfast input[type="number"]'
  );
  const lunchNumberInputs = document.querySelectorAll(
    '#lunch input[type="number"]'
  );
  const snacksNumberInputs = document.querySelectorAll(
    '#snacks input[type="number"]'
  );
  const dinnerNumberInputs = document.querySelectorAll(
    '#dinner input[type="number"]'
  );
  const exerciseNumberInputs = document.querySelectorAll(
    '#exercise input[type="number"]'
  );
  const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
}