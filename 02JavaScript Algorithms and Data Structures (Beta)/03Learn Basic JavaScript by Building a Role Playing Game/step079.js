function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    // if the player does not have enough money
    text.innerText = "You do not have enough gold to buy health.";
  }
}
