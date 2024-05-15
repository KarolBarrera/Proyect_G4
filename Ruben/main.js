window.onload=function(){
    var form=document.getElementById("form");
    form.onsubmit=function(event){
        event.preventDefault();

        // validar nombre
        var nameinput=document.getElementById("name");
        if(nameinput.ariaValueMax.trim(=="")){
            alert("El nombre no puede estar vacio");
            return false;
        }
        // validar email
        var emailInput=document.getElementById("email");
        var emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
}