//Validacion de checkbox(bases y condiciones)
const form = document.querySelector('form');
form.addEventListener('submit',e =>{
  const cb=document.querySelectorAll('label input:checked');
  if(cb.length==0){
    alert("No aceptaste las bases y condiciones")
    e.preventDefault();
  }
})

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();


  var name = document.getElementById('name').value;
  if(name.length == 0 || name == null || /^\s+$/.test(name) ) {
    alert('No has escrito nada en el nombre');
    return;
  }

  var username = document.getElementById('username').value;
  if(username.length == 0 || username == null || /^\s+$/.test(username)) {
    alert('No has escrito nada en el nombre usuario');
    return;
  }

  var email = document.getElementById('email').value;
  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido=expReg.test(email);
  if(esValido==false) {
    alert('El email es invalido de contener nombre+@+email.com');
    return;
  }

  var password = document.getElementById('password').value;
  if (password.length < 6 || /^\s+$/.test(password)) {
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
  if(name.length == 0 || name == null || /^\s+$/.test(name)) {
    alert('No has escrito nada en el nombre');
    return;
  }

  var apellido = document.getElementById('apellido').value;
  if(apellido==null|| apellido.length==0) {
    alert('Apellido invalido');
    return;
  }

  var email = document.getElementById('email').value;
  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var esValido=expReg.test(email);
  if(esValido==false) {
    alert('El email es invalido de contener nombre+@+email.com');
    return;
  }

  var telefono = document.getElementById('telefono').value;
  if (telefono.length < 10 || isNaN(telefono)) {
    alert('El telefono no es válida');
    return;
  }
  var message= document.getElementById('message').value;
  if (message.length < 10 || /^\s+$/.test(message)) {
    alert('El mensaje no es válida');
    return;
  }
  this.submit();

  alert("Formulario enviado correctamente.");
  return true;

  
}
