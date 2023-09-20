window.addEventListener("load", inicio);

function inicio(){
  document.querySelector("#btnContacto").addEventListener("click", enviarCorreo);
}

function enviarCorreo(){
    const sendEmail = document.getElementById('emailA');
    let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;
    let email = document.querySelector("#txtEmail").value;
    let mensaje = document.querySelector("#txtMensaje").value;

    function validacionDeDatos(nombre, apellido, email, mensaje){
      let esValido = false;
      if(nombre.length > 0 && apellido.length > 0 && email.length > 0 && mensaje.length > 0){
        if(email.includes('@gmail.com') || email.includes('@outlook.com') || email.includes('@yahoo.com') || email.includes('@outlook.es')){
          esValido = true;
        }else{
          alert("Mail incorrecto, por favor verifique sus datos. Gracias.");
        }
      }else{
        alert("Falta uno o más campos!");
      }
      return esValido;
    };

    if(validacionDeDatos(nombre, apellido, email, mensaje)){
      sendEmail.setAttribute(
        'href',
        `mailTo:Nicolas.abreuromero@outlook.es?subject=${nombre + " " + apellido}&body=${mensaje}`
      );
      sendEmail.click();
      alert('Formulario enviado correctamente!');
      location.reload();
    };
}