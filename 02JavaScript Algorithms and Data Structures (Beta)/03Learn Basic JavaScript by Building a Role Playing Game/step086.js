function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    text.innerText = "You now have a new weapon.";
  }
}
