document.addEventListener('DOMContentLoaded', (event) => {
  const calcularBtn = document.getElementById('calcularBtn');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');
  const resultadoIMC = document.getElementById('resultadoIMC');
  const closeBtn = document.getElementById('closeBtn');
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const errorMessage = document.getElementById('errorMessage');

  function validateInput(event) {
    const input = event.target;
    if (isNaN(input.value) || input.value === '') {
      errorMessage.classList.remove('hide');
    } else {
      errorMessage.classList.add('hide');
    }
  }

  calcularBtn.addEventListener('click', () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura)) {
      alert('Por favor, insira valores válidos para peso e altura.');
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    resultadoIMC.textContent = `Seu IMC é de ${imc}`;
    modal.classList.remove('hide');
    overlay.classList.remove('hide');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    overlay.classList.add('hide');
  });

  pesoInput.addEventListener('input', validateInput);
     
alturaInput.addEventListener('input', validateInput);
});
  