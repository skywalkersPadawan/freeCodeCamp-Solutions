let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(done, count));
}
