
const balloonsContainer = document.querySelector('.balloons');
for (let i = 0; i < 15; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.animationDuration = (5 + Math.random() * 5) + "s";
  balloonsContainer.appendChild(balloon);
}
