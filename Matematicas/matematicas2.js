matematicas2.js  

// Final result should be 4633.33
// Add/update your code here

let result = 7 + 13 / 9 + 7; //se calcula la suma de 7+3 dividido por la suma de 9+7
let result2 = 100 / 2 * 6; // calcula la disvision de 100 entre la multiplicacion de 6*2
let finalResult=(result*result2).toFixed(2); // se crea la variable finalResult que multiplica las variables result*result2 y luego los redondea el resultado a 2 decimales
let finalNumber=Number(finalResult); // Se crea la variable finalNumber y convierte la cadena de finalResult en un número


// Don't edit the code below here!

section.innerHTML = ' '; /*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent = `Your finalResult is ${ finalResult }`; /*establece el contenido de texto de para1
en Your final result is seguido del valor finalResult*/
const para2 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para2

/*Comprueba si finalNumber es un numero, si lo es se establece finalNumber is a nimber type.Well done y si no
es un numero establede Ooops! finalnumber is not a number*/
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;

para2.textContent = finalNumberCheck;// Establece el contenido de texto de para2 al valor finalNumberCheck

section.appendChild(para1); //Añade para1 al elemento section.
section.appendChild(para2);  //Añade para2 al elemento section.
