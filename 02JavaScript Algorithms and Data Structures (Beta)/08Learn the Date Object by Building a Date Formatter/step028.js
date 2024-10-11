switch (dateOptionsSelectElement.value) {
  case "yyyy-mm-dd":
    currentDateParagraph.textContent = formattedDate
      .split("-")
      .reverse()
      .join("-");
    break;
  case "mm-dd-yyyy-h-mm":
    currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
    break;
}
