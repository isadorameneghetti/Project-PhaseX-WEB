function salvarNome() {
    var nome = document.getElementById('nome').value;

    sessionStorage.setItem('nomeUsuario', nome);

    window.location.href = 'Sections - HTML/forms.html';
}