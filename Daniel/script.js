document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registerForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const password = document.getElementById('userPassword').value.trim();

        if (fullname === "") {
            alert("El nombre no puede estar vacío.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        if (password === "") {
            alert("La contraseña no puede estar vacía.");
            return;
        }

        alert("Formulario enviado con éxito.");
        form.reset();
    });
});
