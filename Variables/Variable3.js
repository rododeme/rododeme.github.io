Variable3.js 
// Add your code here

let myName = 'Default';//declara una variable myName y la inicialia con la cadena default
myName = 'Chris';// se reasigna el valor de myName a la cadena Chris

let myAge = 42;//declara una variable myAge y se inicializa con el valor 42

// Don't edit the code below here!

section.innerHTML = ' ';/* Selecciona el elemento section y establece su propiedad innerHTML 
a una cadena vacia, borrando cualquier contenido existente*/
const para1 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para1
const para2 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para2
para1.textContent = myName; //Establece la propiedad textContent de para1 al valor de myName que es la cadena Chris
para2.textContent = `In 20 years, I will be ${myAge + 20}`; /* Establece la propiedad textContent de para 2 
a la cadena In 20 years I will be, concatenada con el valor myAge+20.Oberva que el literal de la plantilla se
utiliza para insertar el valor de myAge en la cadena.*/
section.appendChild(para1);//Añade para1 al elemento section.
section.appendChild(para2);//Añade para2 al elemeno section.