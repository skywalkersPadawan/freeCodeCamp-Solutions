playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
  }
});
