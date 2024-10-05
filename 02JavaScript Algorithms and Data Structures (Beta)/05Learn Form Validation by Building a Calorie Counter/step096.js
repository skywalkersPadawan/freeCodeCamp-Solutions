function clearForm() {
  const inputContainers = Array.from(
    document.querySelectorAll(".input-container")
  );
  for (let container of inputContainers) {
    container.innerHTML = "";
  }
  budgetNumberInput.value = "";
  output.innerText = "";
  output.classList.add("hide");
}
