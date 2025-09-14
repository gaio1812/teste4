// Ajuste a data para o aniversário desejado (YYYY-MM-DDT00:00:00)
const launchDate = new Date('2025-11-14T16:10:00');

function updateCountdown() {
  const now = new Date();
  const diff = launchDate - now;
  if (diff <= 0) {
    clearInterval(timerInterval);
    window.location.href = 'parabens.html';
    return;
    
  }
  const days    = String(Math.floor(diff / (1000*60*60*24))).padStart(2, '0');
  const hours   = String(Math.floor((diff/(1000*60*60))%24)).padStart(2, '0');
  const minutes = String(Math.floor((diff/(1000*60))%60)).padStart(2, '0');
  const seconds = String(Math.floor((diff/1000)%60)).padStart(2, '0');

  document.getElementById('days').textContent    = days;
  document.getElementById('hours').textContent   = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();


// Confetti simples
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width  = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const confettis = [];
const colors = ['#ff4081','#ffeb3b','#8bc34a','#03a9f4'];

function createConfetti() {
  confettis.push({
    x: Math.random()*canvas.width,
    y: 0,
    r: Math.random()*6+4,
    d: Math.random()*canvas.height,
    color: colors[Math.floor(Math.random()*colors.length)],
    tilt: Math.random()*10-10
  });
}

function drawConfetti() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confettis.forEach((c, i) => {
    ctx.beginPath();
    ctx.lineWidth = c.r;
    ctx.strokeStyle = c.color;
    ctx.moveTo(c.x + c.tilt + c.r/2, c.y);
    ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r/2);
    ctx.stroke();
    c.y += Math.cos(c.d) + 1 + c.r/2;
    c.x += Math.sin(c.d);
    if (c.y > canvas.height) confettis.splice(i,1);
  });
  if (confettis.length < 150) createConfetti();
  requestAnimationFrame(drawConfetti);
}

drawConfetti();
