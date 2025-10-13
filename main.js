let gems = 0;

function mineGem() {
  gems++;
  updateUI();
}

function updateUI() {
  document.getElementById("count").textContent = gems;
}

document.getElementById("mine").onclick = mineGem;