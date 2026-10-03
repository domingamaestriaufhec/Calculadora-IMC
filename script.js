/**
 * LÓGICA DE PROGRAMACIÓN - CALCULADORA DE IMC
 * ============================================
 * 1. Selección de elementos del DOM
 * 2. Manejo del evento de formulario (submit)
 * 3. Normalización matemática y cálculo del IMC
 * 4. Clasificación según estándares de la OMS
 * 5. Actualización dinámica de la interfaz
 */

// 1. Elementos del DOM
const form = document.getElementById('imc-form');
const resultado = document.getElementById('resultado');
const imcNumero = document.getElementById('imc-numero');
const imcClasificacion = document.getElementById('imc-clasificacion');
const imcMensaje = document.getElementById('imc-mensaje');

// 2. Event Listener para procesar el cálculo
form.addEventListener('submit', (e) => {
  // Evitar recarga de página por defecto
  e.preventDefault();

  // Obtener y convertir valores numéricos
  const peso = parseFloat(document.getElementById('peso').value);
  const alturaCm = parseFloat(document.getElementById('altura').value);

  // Validación de seguridad
  if (!peso || !alturaCm || peso <= 0 || alturaCm <= 0) return;

  // 3. Conversión de altura a metros y fórmula del IMC: peso / altura²
  const alturaM = alturaCm / 100;
  const imc = (peso / (alturaM * alturaM)).toFixed(1);

  // 4. Algoritmo de clasificación OMS y feedback visual
  let estado = '';
  let color = '';
  let mensaje = '';

  if (imc < 18.5) {
    estado = 'Bajo peso';
    color = '#60a5fa'; // Azul
    mensaje = 'Tu peso está por debajo del rango recomendado.';
  } else if (imc < 24.9) {
    estado = 'Peso normal';
    color = '#4ade80'; // Verde
    mensaje = '¡Excelente! Tu peso se encuentra en un rango saludable.';
  } else if (imc < 29.9) {
    estado = 'Sobrepeso';
    color = '#facc15'; // Amarillo
    mensaje = 'Tu IMC indica sobrepeso moderado.';
  } else {
    estado = 'Obesidad';
    color = '#f87171'; // Rojo
    mensaje = 'Tu IMC se encuentra en rango de obesidad. Consulta a un especialista.';
  }

  // 5. Renderizado reactivo en el DOM
  imcNumero.textContent = imc;
  imcNumero.style.color = color;
  imcClasificacion.textContent = estado;
  imcClasificacion.style.color = color;
  imcMensaje.textContent = mensaje;

  // Mostrar la tarjeta de resultados
  resultado.classList.remove('oculto');
});
