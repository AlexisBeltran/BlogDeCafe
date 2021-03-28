//Variables

const Nombre = document.querySelector('#nombre');
const Email = document.querySelector('#email');
const Mesaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.boton--primario');
const Formulario = document.querySelector('.formulario');
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const EmailExpresion = /^[a-zA-Zñ&._-Ñ0-9]+@+[A-ZÑ&a-zñ&]+\.[A-Za-z0-9.]+$/; 
const EmailFormulario = document.querySelector('.campo-email');
//Eventos

Nombre.addEventListener('input', LeerTexto); 
Email.addEventListener('input', LeerTexto);
Mesaje.addEventListener('input', LeerTexto);
Formulario.addEventListener('submit', EnviarFormulario);

//Funciones 

function EnviarFormulario(e){
    e.preventDefault();
    //Validar Formulario

    const {nombre, email, mensaje } = datos;
    if(nombre === '' || mensaje === '' || datos === ''){
        mostrarError('Todos los campos son obligatorios');
        return; //Corta la ejecución del codigo
    }
    if(!EmailExpresion.test(email)){
        const ErrorEmail = document.createElement('p');
        ErrorEmail.textContent = "Correo electronico no valido";
        ErrorEmail.classList.add('error-email');
        EmailFormulario.appendChild(ErrorEmail);
        setTimeout(() =>{
            ErrorEmail.remove();
        },3000);
    }
    else{
        mostrarNotificacion('Se ha enviado correctamente');
        LimpiarFormulario();
    }
}

function LeerTexto(e){
    datos[e.target.id] = e.target.value;
}
function mostrarError(mensaje){
    const Error = document.createElement('p');
    Error.textContent = mensaje;
    Error.classList.add('error');
    Formulario.appendChild(Error);
    //Desaparezca después de 3 segundos
    setTimeout(() =>{
        Error.remove();
    },3000);
}

function mostrarNotificacion(mensaje){
    const Notificacion = document.createElement('p');
    Notificacion.textContent = mensaje;
    Notificacion.classList.add('notificacion');
    Formulario.appendChild(Notificacion);
    //Desaparezca después de 3 segundos
    setTimeout(() =>{
        Notificacion.remove();
    },3000);
}
function LimpiarFormulario(){
    Formulario.reset();
}