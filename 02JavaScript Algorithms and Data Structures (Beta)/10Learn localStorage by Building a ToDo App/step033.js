userData?.songs.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  } else {
    return 0;
  }
});
return userData?.songs; // this will be the return for the function
// const sortSongs = () => {}; this contains the userData?.songs callback
