playerCards.innerHTML += arr.map(
  ({ name, position, number, isCaptain, nickname }) => {
    return `<div class="player-card"></div>`;
  }
);
