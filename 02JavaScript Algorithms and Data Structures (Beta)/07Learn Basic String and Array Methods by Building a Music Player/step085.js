if (userData?.currentSong?.id === id) {
  userData.currentSong = null;
  userData.songCurrentTime = 0;
  pauseSong();
  setPlayerDisplay();
}
