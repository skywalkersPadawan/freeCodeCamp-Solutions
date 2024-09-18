while (done !== count) {
  done++;
  rows.push(padRow(done, count));
  if (done === count) {
    continueLoop = false;
  }
}
