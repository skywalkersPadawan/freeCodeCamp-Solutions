playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
  }
});
