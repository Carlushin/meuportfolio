const form = document.getElementById("form-contato");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "") {
        alert("Por favor, preencha o campo nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, preencha o campo e-mail.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (mensagem === "") {
        alert("Por favor, escreva uma mensagem.");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();
});

