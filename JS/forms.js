var nomeArmazenado = sessionStorage.getItem('nomeUsuario');

if (nomeArmazenado) {
    document.getElementById('mensagem').textContent = 'Olá, ' + nomeArmazenado + '!';
} else {
    document.getElementById('mensagem').textContent = 'Nome não encontrado.';
}

function voltar() {
    window.location.href = "../index.html";
}