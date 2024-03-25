const canvas = document.querySelector('canvas');//Seleccionamos el primer elemento canvas del DOM y lo asignamos a la variable constante canvas
const ctx = canvas.getContext('2d');//Obtener el contexto renderizado 2D del elemento canvas y lo asignammos a la variable constante ctx

//Definir la funcion drawCircle con parametros x,y y tamaño
function drawCircle(x, y, size) {
  ctx.fillStyle = 'white'; //Establecemos el estilo de relleno del contexto ctx a blanco
  ctx.fillRect(0, 0, canvas.width, canvas.height); //Dibujar un rectangulo blanco que cubre todo el lienzo.

  ctx.beginPath();//iniciar una nueva ruta para dibujar
  ctx.fillStyle = 'black'; //Establecemos el estilo de relleno del contexto ctx a negro
  ctx.arc(x, y, size, 0, 2 * Math.PI); //Dibujamos un circulo negro con las coordenadas de x,y y tamaño especificadas
  ctx.fill(); //Rellenar el circulo con el estilo de relleno actual.
}

let x = 50;// Declarar la variable x e inicializar con el valor 50
let y = 50;// Declarar la variable y e inicializar con el valor 50
const size = 30;// Declarar la variable constante size e inicializar con el valor 30

drawCircle(x, y, size); //llamamos a la funcion drawcircle con los valores actuales de x, y y tamaño

//Definimos un objeto llamado direccciones que mapea claves a matrices de numeros.
const directions = {
  a: [-1, 0],// Presiona tecla a se mueve el circulo a la izquierda el circulo y zero unidades arriba
  w: [0, -1],//Presiona tecla w se mueve el circulo zero unidades a la izquierda y una unidad arriba
  d: [1, 0],//Presiona tecla d se mueve el circulo una unidad a la derecha y zero unidades arriba
  s: [0, 1], //Preiona tecla s se mueve el circulo zero unidades a la izquiersa y una unidad abajo
};

//Añadir un addEventListener para el evento keydown, cuando se pulse la tecla se ejecutara la funcion de felcha del receptor de eventos
document.addEventListener('keydown', (event) => {
 //Comprobamos si el objeto directions tiene una propiedad para la tecla pulsada
    if (directions[event.key]) {
    x += directions[event.key][0];/*Actualizamos la variable x añadiendo el primer 
    numero del array de numeros que corresponde a la tecla pulsada*/
    y += directions[event.key][1];/*Actualizamos la variable y añadiendo el segundo 
    numero del array de numeros que corresponde a la tecla pulsada*/

    drawCircle(x, y, size);//llamar funcion drawCircle con los valores actualizados de x,y y tamaño
  }
});
//Añadimos un addEventListener para el evento keyup, cuando se suelte una tecla se ejecutara la funcion de flecha del escuchardor de eventos
document.addEventListener('keyup', () => {
  drawCircle(x, y, size); //lLamamos a la funcion dibujar circulo con los valores actuales de x y y tamaño
});