document.getElementById('mostrarCarta').addEventListener('click', function () {
  document.getElementById('carta').classList.remove('oculto');
});

document.getElementById('aceitarContrato').addEventListener('click', function () {
  document.getElementById('carta').classList.add('oculto');
  document.getElementById('mensagemFinal').classList.remove('oculto');
});
