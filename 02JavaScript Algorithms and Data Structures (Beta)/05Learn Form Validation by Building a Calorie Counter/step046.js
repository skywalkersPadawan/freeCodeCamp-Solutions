function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
  // add this label element to pass this challenge
  const HTMLString = `
  <label>Entry ${entryNumber} Name</label> 
  `;
}
