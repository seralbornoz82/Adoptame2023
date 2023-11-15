//Validacion de checkbox(bases y condiciones)
const form = document.querySelector('form');
form.addEventListener('submit',e =>{
  const cb=document.querySelectorAll('label input:checked');
  if(cb.length==0){
    alert("No aceptaste las bases y condiciones")
    e.preventDefault();
  }
})

//Validacion Formulario de registro
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var name = document.getElementById('name').value;
  if(name.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }

  var username = document.getElementById('username').value;
  if(username.length == 0) {
    alert('No has escrito nada en el nombre usuario');
    return;
  }

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en el email');
    return;
  }

  var password = document.getElementById('password').value;
  if (password.length < 6) {
    alert('La clave no es válida');
    return;
  }
  
  this.submit();

  alert("Formulario enviado correctamente.");
  return true;

  
}
// validacion contacto
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarContacto); 
});

function validarContacto(evento) {
  evento.preventDefault();
  var name = document.getElementById('name').value;
  if(name.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }

  var apellido = document.getElementById('apellido').value;
  if(apellido.length == 0) {
    alert('No has escrito nada en apellido');
    return;
  }

  var email = document.getElementById('email').value;
  if(email.length == 0) {
    alert('No has escrito nada en el email');
    return;
  }

  var telefono = document.getElementById('telefono').value;
  if (telefono.length < 10) {
    alert('El telefono no es válida');
    return;
  }
  var message= document.getElementById('message').value;
  if (message.length < 10) {
    alert('El mensaje no es válida');
    return;
  }
  this.submit();

  alert("Formulario enviado correctamente.");
  return true;

  
}
