const taskObj = {
  id: `${removeSpecialChars(titleInput.value)
    .toLowerCase()
    .split(" ")
    .join("-")}-${Date.now()}`,
  title: removeSpecialChars(titleInput.value),
  date: dateInput.value,
  description: removeSpecialChars(descriptionInput.value),
};
