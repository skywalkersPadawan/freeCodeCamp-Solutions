playerCards.innerHTML += arr.map(
  ({ name, position, number, isCaptain, nickname }) => {
    return `
      <div class="player-card">
        <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `;
  }
);
