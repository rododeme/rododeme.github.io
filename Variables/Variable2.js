Variable2.js 
// Add your code here

let myName = 'Paul' //declara una variable myName y la inicializa con la cadena Paul
myName='Rodolfo';// Reasigna el valor de myName a la cadena Rodolfo

section.innerHTML = ' ';/* Selecciona el elemento section y establece su propiedad innerHTML 
a una cadena vacia, borrando cualquier contenido existente*/
const para = document.createElement('p');//Crear un nuevo elemento p y guardaro en la variable para.
para.textContent = myName; //Establece la propiedad textContent de para al valor de myName que es la cadena Rodolfo
section.appendChild(para); //Añade para al elemento seccion.