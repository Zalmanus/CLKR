document.addEventListener('DOMContentLoaded', function() {
    const scoreDisplay = document.getElementById('score');
    const clickerButton = document.getElementById('clicker');
    let score = 0;
  
    clickerButton.addEventListener('click', function() {
      score++;
      scoreDisplay.textContent = score;
    });
  });