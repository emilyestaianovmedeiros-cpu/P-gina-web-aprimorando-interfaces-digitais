const botao = document.getElementById("modoBtn");

botao.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botao.textContent = " Modo Claro";
    } else {
        botao.textContent = "Modo Escuro";
    }
});