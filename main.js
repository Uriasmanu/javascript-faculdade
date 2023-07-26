const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    

    const input = document.getElementById('email');
    const mensagem = document.getElementById('mensagemErro');

    const validacao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = validacao.test(input.value);

  if (!isEmailValid) {
    event.preventDefault();
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";

  }
})