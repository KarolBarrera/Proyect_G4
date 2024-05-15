window.onload = function() {
    var form = document.getElementById("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        // Validar nombre del producto
        var nameInput = document.getElementById("Nombre produc");
        if (nameInput.value.trim() === "") {
            alert("El nombre del producto no puede estar vacío");
            return false;
        }

        // Validar precio del producto
        var priceInput = document.getElementById("precio producto");
        var priceValue = parseFloat(priceInput.value);
        if (isNaN(priceValue) || priceValue <= 0) {
            alert("Ingrese un precio válido para el producto");
            return false;
        }

        // Validar cantidad de productos
        var quantityInput = document.getElementById("Cant producto");
        var quantityValue = parseInt(quantityInput.value);
        if (isNaN(quantityValue) || quantityValue <= 0) {
            alert("Ingrese una cantidad válida de productos");
            return false;
        }

        // Si todas las validaciones pasan, muestra el mensaje de éxito y resetea el formulario
        alert("El formulario se ha enviado exitosamente");
        form.reset();
        return false;
    }
}
