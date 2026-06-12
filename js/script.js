// ===== FRASES =====
const frases = [
  "Tu valía no está en tus calificaciones. Estás bien tal como eres.",
  "Los días difíciles también terminan. Y tú los superas.",
  "No tienes que tenerlo todo resuelto para merecer apoyo.",
  "Cada paso pequeño cuenta. No subestimes tus avances.",
  "Pedir ayuda no es debilidad, es saber que no estás solo/a.",
  "Tu historia no está escrita todavía. Tienes tiempo para todo.",
  "Es válido sentirse abrumado/a. Y también es válido buscar calma.",
  "Eres más fuerte de lo que crees, más valioso/a de lo que imaginas.",
  "El fracaso no te define. La forma en que te levantas, sí.",
  "Cuidar tu mente es tan importante como cuidar tu cuerpo.",
  "No compares tu capítulo 1 con el capítulo 20 de otra persona.",
  "Tienes todo el derecho de estar bien y de construir una vida que te guste.",
];

let phraseIdx = Math.floor(Math.random() * frases.length);
function newPhrase() {
  phraseIdx = (phraseIdx + 1) % frases.length;
  document.getElementById('daily-phrase').textContent = frases[phraseIdx];
}
document.getElementById('daily-phrase').textContent = frases[phraseIdx];
document.getElementById('hero-phrase').textContent = frases[(phraseIdx + 3) % frases.length];

// ===== NAV HAMBURGER =====
document.getElementById('hbg').addEventListener('click', function() {
  document.getElementById('mob-menu').classList.toggle('open');
});
function closeMob() { document.getElementById('mob-menu').classList.remove('open'); }

// ===== TESTS =====
const scores = {};
function selOpt(btn) {
  const g = btn.dataset.g, q = btn.dataset.q;
  btn.closest('.test-options').querySelectorAll('.test-opt').forEach(b => {
    if (b.dataset.g === g && b.dataset.q === q) b.classList.remove('sel');
  });
  btn.classList.add('sel');
  if (!scores[g]) scores[g] = {};
  scores[g][q] = parseInt(btn.dataset.v);
}

function calcTest(group, max) {
  if (!scores[group]) { alert('Por favor responde todas las preguntas.'); return; }
  const s = scores[group];
  const total = Object.values(s).reduce((a,b) => a+b, 0);
  const pct = total / max;
  const el = document.getElementById('res-' + group);
  let title, msg;
  if (pct >= .75) {
    title = '🌟 ¡Muy bien!';
    msg = group === 'ae'
      ? 'Muestras señales de una autoestima saludable. Sigue cultivando la confianza en ti mismo/a y recuerda celebrar tus logros.'
      : 'Tienes buenas herramientas para manejar el estrés. Sigue practicándolas y compártelas con quienes las necesiten.';
  } else if (pct >= .45) {
    title = '🌱 En proceso';
    msg = group === 'ae'
      ? 'Tu autoestima tiene momentos altos y bajos, lo cual es completamente normal. Los ejercicios de esta página pueden ayudarte a fortalecerla.'
      : 'Tienes algunas estrategias, pero podrías beneficiarte de explorar más técnicas de manejo del estrés. Practica la respiración y la planificación.';
  } else {
    title = '💜 Mereces apoyo';
    msg = group === 'ae'
      ? 'Parece que estás pasando por un momento difícil con tu autoestima. Considera hablar con un orientador o persona de confianza. No estás solo/a.'
      : 'Tu nivel de estrés parece alto. Te recomendamos hablar con un adulto de confianza o un orientador escolar. Buscar ayuda es lo más valioso que puedes hacer.';
  }
  el.style.display = 'block';
  el.innerHTML = `<h4>${title}</h4><p>${msg}</p>`;
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ===== ENCUESTAS =====
const votes = { enc1: [0,0,0,0], enc2: [0,0,0,0], enc3: [0,0,0,0] };
const voted = {};
function vote(encId, btn, label, idx) {
  if (voted[encId]) return;
  voted[encId] = true;
  votes[encId][idx]++;
  const total = votes[encId].reduce((a,b)=>a+b,0);
  const container = document.getElementById(encId);
  container.querySelectorAll('.enc-opt').forEach((b,i) => {
    b.classList.remove('voted');
    const pct = Math.round((votes[encId][i]/total)*100);
    b.querySelector('.enc-pct').textContent = pct + '%';
  });
  btn.classList.add('voted');
}

// ===== BUZÓN =====
function enviarBuzon() {
  const tema = document.getElementById('bz-tema').value;
  const msg = document.getElementById('bz-msg').value.trim();
  if (!tema) { alert('Por favor selecciona un tema.'); return; }
  if (msg.length < 10) { alert('Por favor escribe al menos 10 caracteres.'); return; }
  document.getElementById('buzon-form').style.display = 'none';
  document.getElementById('buzon-ok').style.display = 'block';
}
function resetBuzon() {
  document.getElementById('bz-tema').value = '';
  document.getElementById('bz-msg').value = '';
  document.querySelectorAll('input[name="estado"]').forEach(r => r.checked = false);
  document.getElementById('buzon-form').style.display = 'block';
  document.getElementById('buzon-ok').style.display = 'none';
}

// ===== FADE IN OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
