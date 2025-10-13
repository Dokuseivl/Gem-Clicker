let assistants = 0;

function buyAssistant() {
  if (gems >= 10) {
    gems -= 10;
    assistants++;
    updateUI();
  }
}