switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
}
