function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (!hasPlayerWonTheRound) {
    computerScore++;
  } else {
    return `It's a tie! Both chose ${userOption}`;
  }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
