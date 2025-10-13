function saveGame() {
  localStorage.setItem("gems", gems);
  localStorage.setItem("assistants", assistants);
  localStorage.setItem("crystals", crystals);
}

function loadGame() {
  gems = parseInt(localStorage.getItem("gems")) || 0;
  assistants = parseInt(localStorage.getItem("assistants")) || 0;
  crystals = parseInt(localStorage.getItem("crystals")) || 0;
  updateUI();
}

window.onload = loadGame;
setInterval(saveGame, 5000);