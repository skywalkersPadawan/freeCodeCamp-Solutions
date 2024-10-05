function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
