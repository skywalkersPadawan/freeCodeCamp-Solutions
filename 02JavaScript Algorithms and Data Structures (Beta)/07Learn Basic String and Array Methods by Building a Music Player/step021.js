// import { html } from "../../../utils.js";
import { html } from "../utils";

// add the html code inside the function tagged template literal to pass this challenge
const songsHTML = array.map((song) => {
  return html(`
<li
  id="song-${song.id}"
  class="playlist-song"
></li>
<button class="playlist-song-info">
  <span class="playlist-song-title">${song.title}</span>
</button>
  `);
});
