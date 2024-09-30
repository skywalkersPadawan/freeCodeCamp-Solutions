function update(location) {
  button1.innerText = location["button text"];
  button2.innerText = "Go to cave";
  button3.innerText = "Fight dragon";
  button1.onclick = goStore;
  button2.onclick = goCave;
  button3.onclick = fightDragon;
  text.innerText =
    'You are in the town square. You see a sign that says "Store".';
}
