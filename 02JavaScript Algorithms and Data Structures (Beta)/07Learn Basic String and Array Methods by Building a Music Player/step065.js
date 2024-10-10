playlistSongElements.forEach((songEl) => {
  songEl.removeAttribute("aria-current");
  if (songToHighlight) {
    songToHighlight.setAttribute("aria-current", "true");
  }
});
