if (userData?.songs.length === 0) {
  const resetButton = document.createElement("button");
  const resetText = document.createTextNode("Reset Playlist");
  resetButton.id = "reset";
  resetButton.ariaLabel = "Reset playlist";
  resetButton.appendChild(resetText);
  playlistSongs.appendChild(resetButton);
}
