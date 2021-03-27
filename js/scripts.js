//
//Variables
//
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
const Nombre = document.querySelector('#nombre');
const Email = document.querySelector('#email');
const Mesaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('.boton--primario');
const Formulario = document.querySelector('.formulario');

//
//Eventos
//
Nombre.addEventListener('input', LeerTexto); 
Email.addEventListener('input', LeerTexto);
Mesaje.addEventListener('input', LeerTexto);
Formulario.addEventListener('submit', EnviarFormulario);
//
//Funciones 
//

function EnviarFormulario(e){
    e.preventDefault();

    //Validar Formulario

    const {nombre, email, mensaje } = datos;
    if(nombre === '' || email === '' || datos === ''){
        mostrarError('Todos los campos son obligatorios');
        return; //Corta la ejecución del codigo
    }
}
function LeerTexto(e){
    datos[e.target.id] = e.target.value;
}
function mostrarError(mensaje){
    const Error = document.createElement('P');
    Error.textContent = mensaje;
    Error.classList.add('error');
    Formulario.appendChild(Error);
}