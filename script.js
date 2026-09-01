// Pega o botão de trocar tema
const botaoTema = document.getElementById('botao-tema');

// Verifica se o botão existe pra não dar erro
if (botaoTema) {
  // Ação ao clicar no botão
  botaoTema.addEventListener('click', () => {
    // Adiciona / remove a classe tema-escuro do <body>
    document.body.classList.toggle('tema-escuro');
  });