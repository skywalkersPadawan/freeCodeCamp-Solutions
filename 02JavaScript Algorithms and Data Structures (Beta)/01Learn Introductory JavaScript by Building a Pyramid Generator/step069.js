function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(rowNumber) +
    " ".repeat(rowCount - rowNumber)
  );
}
