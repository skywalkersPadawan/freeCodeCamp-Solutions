if (userData?.currentSong === null) {
  playSong(userData?.songs[0].id);
} else {
  playSong(userData?.currentSong.id);
}
