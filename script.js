// Seleciona o formulário pelo ID
const form = document.getElementById("form-contato");

// Aguarda o envio do formulário
form.addEventListener("submit", function(event) {

    // Impede o envio padrão (não recarrega a página)
    event.preventDefault();

    // Pegamos os valores digitados nos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // ======== VALIDAÇÕES ========

    // Nome vazio
    if (nome === "") {
        alert("Por favor, preencha o campo nome.");
        return;
    }

    // Email vazio
    if (email === "") {
        alert("Por favor, preencha o campo e-mail.");
        return;
    }

    // Email inválido
    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Mensagem vazia
    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    // ======== SE TUDO ESTIVER OK ========
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    form.reset();
});
