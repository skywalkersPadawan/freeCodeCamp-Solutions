closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;
});
