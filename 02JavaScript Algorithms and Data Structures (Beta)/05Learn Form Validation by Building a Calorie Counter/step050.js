function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry # Name</label>
    <input
    type="text"
    placeholder="Name"
    id="${entryDropdown.value}-${entryNumber}-name"
    />
    <label for="${entryDropdown.value}-${entryNumber}-calories">
        Entry ${entryNumber} Calories
    </label>
    <input
    type="number"
    min="0"
    placeholder="Calories"
    id="${entryDropdown.value}-${entryNumber}-calories"
    />`;
}
