
window.addEventListener("load", function () {
    let form = document.querySelector('form.formulario');

    form.addEventListener("submit", function (e) {


        let errores = []//array de errores que se llenará
        console.log(errores)

        let campoNombre = document.querySelector('input.name');

        if (campoNombre.value == "") {
            //  alert('El campo nombre tiene que estar completo');
            errores.push('El campo nombre tiene que estar completo')
        }
        else if (campoNombre.value.length < 3) {
            errores.push('El campo debe terner al menos 3 caracteres')
        }

        let campoApellido = document.querySelector('input.lastName');

        if (campoApellido.value == "") {
            errores.push('El campo apellido tiene que estar completo');
        }

        let campoMail = document.querySelector('input.mail');

        if (campoMail.value == "") {
            errores.push('El campo e-mail tiene que estar completo');
        }
        let campoCity = document.querySelector('input.city');

        if (campoCity.value == "") {
            errores.push('El campo ciudad tiene que estar completo');
        }

        let campoState = document.querySelector('select.state');
        if (campoState.value == "") {
            errores.push('El campo Estado tiene que estar completo');
        }
        let campoZip = document.querySelector('input.zip');
        if (campoZip.value == "") {
            errores.push('El campo código postal tiene que estar completo');
        }
        if (errores.length > 0) {
            e.preventDefault();
            let ulErrores = document.querySelector('div.errores ul')
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    })



})

