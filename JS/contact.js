function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
}