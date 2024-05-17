window.onload = function() {
    var form = document.getElementById("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        var nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            alert("El nombre no puede estar vacío.");
            return false;
        }

        var emailInput = document.getElementById("email");
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Ingrese un correo electrónico válido.");
            return false;
        }

        var passwordInput = document.getElementById("password");
        if (passwordInput.value.trim() === "") {
            alert("La contraseña no puede estar vacía.");
            return false;
        }

        alert("Formulario enviado correctamente.");
        form.reset();
        return false;
    };
};