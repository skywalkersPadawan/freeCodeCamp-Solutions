function buyWeapon() {
  // if the player has less than 3 of the current weapon index
  if (currentWeaponIndex < 3) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    // If the player already has the best weapon
    text.innerText = "You already have the best weapon!";
  }
}
