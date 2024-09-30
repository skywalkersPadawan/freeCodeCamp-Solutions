function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeaponIndex = 0;
  inventory = ["stick"];
  goldText.innerText = gold;
  xpText.innerText = xp;
  healthText.innerText = health;
  goTown();
}
