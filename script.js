const form = document.getElementById('imc-form');
const resultado = document.getElementById('resultado');
const imcNumero = document.getElementById('imc-numero');
const imcClasificacion = document.getElementById('imc-clasificacion');
const imcMensaje = document.getElementById('imc-mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value) / 100; // de cm a metros

  if (!peso || !altura || peso <= 0 || altura <= 0) return;

  const imc = (peso / (altura * altura)).toFixed(1);
  imcNumero.textContent = imc;

  let estado = '';
  let color = '';
  let mensaje = '';

  if (imc < 18.5) {
    estado = 'Bajo peso';
    color = '#60a5fa';
    mensaje = 'Tu peso está por debajo de lo recomendado.';
  } else if (imc < 24.9) {
    estado = 'Peso normal';
    color = '#4ade80';
    mensaje = '¡Excelente! Tienes un peso saludable.';
  } else if (imc < 29.9) {
    estado = 'Sobrepeso';
    color = '#facc15';
    mensaje = 'Estás ligeramente por encima del peso ideal.';
  } else {
    estado = 'Obesidad';
    color = '#f87171';
    mensaje = 'Se recomienda consultar con un profesional de salud.';
  }

  imcClasificacion.textContent = estado;
  imcClasificacion.style.color = color;
  imcNumero.style.color = color;
  imcMensaje.textContent = mensaje;

  resultado.classList.remove('oculto');
});
