Variable1.js 

// Add your code here
let myName='Jose';// Declara una variable constante myName y la inicializa con la cadena 'Chris'
let myAge=36;//Declara una variable constante myAge e inicializa con el numero 42
// Don't edit the code below here!

section.innerHTML = ' '; /*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent =myName; //Establece la propiedad textContent de para1 al valor myName que es la cadena Chris
const para2 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para2
para2.textContent = myAge; //Establece la propiedad textContent de para2 al valor myAge que es numero 42
section.appendChild(para1);//Añade para1 al elemento section.
section.appendChild(para2);//Añade para2 al elemento section.