let nombre = document.getElementById("name");
let lastName = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let nacionalidad = document.getElementById("nacionalidad");
let date = document.getElementById("date");
let checkBox = document.getElementById("checkbox");

let errorName = document.getElementById("error-name");
let errorLastName = document.getElementById("error-last-name");
let errorEmail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");
let errorNacionalidad = document.getElementById("error-nacionalidad");
let errorDate = document.getElementById("error-date");
let errorCheckBox = document.getElementById("error-checkBox");

let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    

    let mensajeError = {
        name: [],
        lastName: [],
        email: [],
        password: [],
        nacionalidad: [],
        date: [],
        checkBox: []
    };

     // Validaciones
    if (nombre.value === null || nombre.value.trim() === "") {
        mensajeError.name.push("Ingresa tu Nombre");
    }
    if (lastName.value === null || lastName.value.trim() === "") {
        mensajeError.lastName.push("Ingresa tu Apellido");
    }
    if (email.value === null || email.value.trim() === "") {
        mensajeError.email.push("Ingresa tu Email");
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        mensajeError.email.push("Ingresa un correo válido");
    }
    if (password.value === null || password.value === "") {
        mensajeError.password.push("Ingresa tu contraseña");
    } else if (password.value.length < 6) {
        mensajeError.password.push("La contraseña debe tener al menos 6 caracteres");
    }
    if (nacionalidad.value === null || nacionalidad.value === "") {
        mensajeError.nacionalidad.push("Seleccione su Nacionalidad");
    }
    if (date.value === null || date.value === "") {
        mensajeError.date.push("Ingresa su fecha de nacimiento");
    }
    if (!checkBox.checked) {
        mensajeError.checkBox.push("Acepta los términos");
    }

    // Mostrar errores
    errorName.innerHTML = mensajeError.name.join(", ");
    errorLastName.innerHTML = mensajeError.lastName.join(", ");
    errorEmail.innerHTML = mensajeError.email.join(", ");
    errorPassword.innerHTML = mensajeError.password.join(", ");
    errorNacionalidad.innerHTML = mensajeError.nacionalidad.join(", ");
    errorDate.innerHTML = mensajeError.date.join(", ");
    errorCheckBox.innerHTML = mensajeError.checkBox.join(", ");

    // Verificar si hay errores
    if (mensajeError.name.length > 0 || mensajeError.lastName.length > 0 || mensajeError.email.length > 0 || mensajeError.password.length > 0 || mensajeError.nacionalidad.length > 0 || mensajeError.date.length > 0 || mensajeError.checkBox.length > 0) {
        event.preventDefault(); // Previene el envío del form
    } 
});
    
