window.onload = function() {
    var form = document.getElementById("product-form");
    var messageDiv = document.getElementById("message");
    form.onsubmit = function(event) {
        event.preventDefault();

        // Validar nombre del producto
        var nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            showMessage("Por favor ingrese el nombre del producto.");
            return false;
        }

        // Validar ID del producto (solo números)
        var idInput = document.getElementById("id");
        if (idInput.value.trim() === "" || isNaN(idInput.value.trim())) {
            showMessage("Por favor ingrese un ID válido para el producto (solo números).");
            return false;
        }

        // Validar tamaño o característica del producto
        var sizeInput = document.getElementById("size");
        if (sizeInput.value.trim() === "") {
            showMessage("Por favor ingrese el tamaño o característica del producto.");
            return false;
        }

        // Validar precio del producto
        var priceInput = document.getElementById("price");
        if (!/^\d+(\.\d{3}|\.\d{2}|\.\d{1})?$/.test(priceInput.value.trim())) {
            showMessage("Por favor ingrese un precio válido para el producto (0.000 o 00.000 o 000.000).");
            return false;
        }

        // Validar cantidad del producto
        var quantityInput = document.getElementById("quantity");
        if (quantityInput.value.trim() === "" || parseInt(quantityInput.value) <= 0) {
            showMessage("Por favor ingrese una cantidad válida para el producto.");
            return false;
        }

        // Si todos los campos son válidos, mostrar mensaje de éxito y limpiar formulario
        showMessage("Producto registrado correctamente: \n\nNombre: " + nameInput.value + "\nID: " + idInput.value + "\nTamaño o Característica: " + sizeInput.value + "\nPrecio: $" + priceInput.value + "\nCantidad: " + quantityInput.value);
        form.reset();
        return true;
    }

    function showMessage(message) {
        messageDiv.innerText = message;
        messageDiv.style.display = "block";
        setTimeout(function() {
            messageDiv.style.display = "none";
        }, 200000); // Ocultar el mensaje después de 3 segundos
    }
}
