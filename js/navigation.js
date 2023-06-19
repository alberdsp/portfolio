

// función para validar el formulario de contacto

function validarFormulario() {
    var nombre = document.forms["contactForm"]["nombre"].value;
    var apellidos = document.forms["contactForm"]["apellidos"].value;
    var empresa = document.forms["contactForm"]["empresa"].value;
    var telefono = document.forms["contactForm"]["movil"].value;
    var email = document.forms["contactForm"]["email"].value;



    if (nombre == "") {
        swal("Por favor, ingresa tu nombre");

        return false;
    }
    if (apellidos == "") {
        swal("Por favor, ingresa tus apellidos");

        return false;
    }
    if (empresa == "") {
        swal("Por favor, ingresa el nombre de tu empresa");

        return false;
    }

    if (telefono == "") {
        swal("Por favor, ingresa tu número de teléfono");

        return false;
    }

    if (!validarTelefono(telefono)) {

        swal("inserta un número de teléfono válido");
        return false;
    }
    if (email == "") {
        swal("Por favor, ingresa tu dirección de correo electrónico");

        return false;
    }

    if (!validarEmail(email)) {

        swal("Por favor, ingresa una dirección de correo electrónico válida");

        return false;



    }



    // función para validar el teléfono introducido

    function validarTelefono(telefono) {
        // eliminamos caracteres no validos
        telefono = telefono.replace(/\D/g, '');

        // checkeamos que tiene nueve numeros
        if (telefono.length !== 9) {

            console.log(telefono);
            return false;
        } else {
            return true;

        }


    }

    function validarEmail(email) {
        // validamos que contiene una @ y un . 
        var patron = /@.+?\./;

        // testeamos que el patrón funciona
        return patron.test(email);
    }



}

