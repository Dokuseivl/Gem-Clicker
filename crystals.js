let crystals = 0;

function mineCrystal() {
  if (gems >= 100) {
    gems -= 100;
    crystals++;
    updateUI();
  }
}