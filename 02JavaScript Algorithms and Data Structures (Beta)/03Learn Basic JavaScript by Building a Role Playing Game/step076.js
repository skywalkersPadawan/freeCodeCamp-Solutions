function buyHealth() {
  gold -= 10;
  health += 10;
  goldText.innerText = gold;
  healthText.innerText = health;
}
