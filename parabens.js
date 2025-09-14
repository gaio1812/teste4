const container = document.getElementById('balloon-container');
const colors = ['#ff5a93','#ffeb3b','#8bc34a','#03a9f4','#ff9800'];
const totalBalloons = 100; // quantos balões quer gerar

for (let i = 0; i < totalBalloons; i++) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // definir posição horizontal e variáveis de animação
  const left = Math.random() * 100;           // 0% a 100%
  const duration = 8 + Math.random() * 6 + 's';  // 8s a 14s
  const delay = Math.random() * 4 + 's';      // 0s a 4s
  const color = colors[Math.floor(Math.random() * colors.length)];

  balloon.style.setProperty('--color', color);
  balloon.style.setProperty('--duration', duration);
  balloon.style.setProperty('--delay', delay);
  balloon.style.left = left + '%';

  container.appendChild(balloon);
}
