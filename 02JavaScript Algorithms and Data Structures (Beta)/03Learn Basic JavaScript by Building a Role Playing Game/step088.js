function buyWeapon() {
  if (gold >= 30) {
    gold -= 30;
    currentWeaponIndex++;
    goldText.innerText = gold;
    let newWeapon = weapons[currentWeaponIndex];
    text.innerText = "You now have a new weapon.";
  }
}
