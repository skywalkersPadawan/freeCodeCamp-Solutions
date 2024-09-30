function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
  text.innerText +=
    " You attack it with your " + weapons[currentWeaponIndex].name + ".";
  health -= monsters[fighting].level;
  monsterHealth -=
    weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
}
