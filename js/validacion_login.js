let email = document.getElementById("correo");
let password = document.getElementById("contraseña");
let errorEmail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");


let form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {

    let mensajeErrorEmail = [];
    let mensajeErrorPassword = [];

    if (email.value === null || email.value.trim() === "") {
        mensajeErrorEmail.push("Ingresa tu Email");
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        mensajeErrorEmail.push("Ingresa un correo válido");
    }
    if (password.value === null || password.value === "") {
        mensajeErrorPassword.push("Ingresa tu contraseña");
    }

    errorEmail.innerHTML = mensajeErrorEmail.join(", ");
    errorPassword.innerHTML = mensajeErrorPassword.join(", ");

    if (mensajeErrorEmail.length > 0 || mensajeErrorPassword.length > 0) {
        event.preventDefault(); // Previene el envío del form
    }
});
        