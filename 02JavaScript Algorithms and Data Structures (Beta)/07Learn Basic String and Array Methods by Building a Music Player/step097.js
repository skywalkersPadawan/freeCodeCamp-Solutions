audio.addEventListener("ended", () => {
  const currentSongIndex = getCurrentSongIndex();
  const nextSongExists = currentSongIndex < userData.songs.length - 1;
  if (nextSongExists) {
    playNextSong();
  }
});
