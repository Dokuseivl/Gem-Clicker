function autoGenerate() {
  gems += assistants;
  updateUI();
}

setInterval(autoGenerate, 1000);