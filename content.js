/** Listen to user pressing a button in the keyboard */
document.addEventListener("keyup", (event) => {
  event.preventDefault();

  /* If it's m, we want to mute/unmute */
  if (event.key === "m") {
    document.querySelector(".volume-slider-stop-sign").click();
  }

  /* If it's f, we want to toggle fullscreen */
  if (event.key === "f") {
    document.querySelector(".tve-player-controls-bar-fullscreen-max").click();
  }

  return false;
});
