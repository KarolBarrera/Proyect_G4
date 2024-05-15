window.onload = function () {
    var form = document.getElementById("form");
    form.onsubmit = function (event) {
        event.preventDefault();

        var idInput = document.getElementById("id");
        if (idInput.value.trim() === "") {
            alert("El ID no puede estar vacío");
            return false;
        }

        var nameInput = document.getElementById("name");
        if (nameInput.value.trim() === "") {
            alert("El nombre no puede estar vacío");
            return false;
        }



        var precioInput = document.getElementById("precio");
        if (precioInput.value.trim() === "") {
            alert("El precio no puede estar vacío");
            return false;
        }

        var stockInput = document.getElementById("stock");
        if (stockInput.value.trim() === "") {
            alert("El stock no puede estar vacío");
            return false;
        }

        alert("Formulario enviado correctamente");
        form.reset();
        return true;

        
    };
  
};