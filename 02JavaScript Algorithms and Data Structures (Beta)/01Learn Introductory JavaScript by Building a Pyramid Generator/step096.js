let done = 0;

while (rows.length < count) {
  done++;
  rows.push(padRow(rows.length + 1, count));
}
