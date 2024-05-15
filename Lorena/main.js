window.onload=function(){
    var form=document.getElementById("form");
    form.onsubmit=function(event){
        event.preventDefault();

        // validar nombre
        var nameinput=document.getElementById("name");
        if(nameinput.value.trim() === ""){
            alert("El nombre no puede estar vacio");
            return false;
        }
        // validar email
        var emailInput=document.getElementById("email");
        var emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(emailInput.value.trim())){
            alert("El correo electronico ingresado no es valido");
            return false;
        }
        // validar contraseña
        var passwordInput = document.getElementById("password");
        if(passwordInput.value.trim().length < 8){
            alert("La contraseña ingresada debe tener al menos 8 caracteres");
            return false;
        } 
        // Si todas las validaciones pasas, muestra el mensaje de éxito y resetea el formulario
        alert("El formulario se ha enviado exitosamente");
        return false;
    }
}