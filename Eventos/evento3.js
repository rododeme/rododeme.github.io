//Selecciona el elemento con la clase button-bar del DOM y lo almacena en la variable constante buttonBar
const buttonBar = document.querySelector('.button-bar');

// Add your code here
//Añade un addEventListener para el evento click en el elemento buttonBar.
buttonBar.addEventListener('click', (event) => {
  /*Comprueba si el elemento pulsado (event.target) es un elemento boton 
  y el metodo matches comprueba si un elemento cpincide con un selector dado*/
    if (event.target.matches('button')) {
        const color = event.target.dataset.color;//obtiene el valor de atributo data color del elemento boton pulsado y lo almacena en la variable color.
        buttonBar.style.backgroundColor = event.target.dataset.color;//Establece el color de fondo del elmento buttonbar al valor de color.
  }
});