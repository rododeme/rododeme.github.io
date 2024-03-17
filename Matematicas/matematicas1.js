matematicas1.js


let finalResult;//declara una variable llamada resultado final y contendra el resultado del calculo

let evenOddResult;/* declara una variable llamada evenOddResult, tendra el valor 0 si el resultado final es par
y el valor 1 si es impar*/

// Add your code here

let num1 = 12; //inicializa la variable num1 con el valor 12
let num2 = 10;//inicializa la variable num1 con el valor 10
let num3 = 24;//inicializa la variable num1 con el valor 24
let num4 = 16;//inicializa la variable num1 con el valor 16


let sum = num1 + num2; //calcula la suma de num1 y num2 almacenando el resultado en la variable suma.


let difference = num3 - num4; //calcula la diferencia de num3 y num4 almacenando el resultado en la variable resta.


 finalResult = sum * difference; //multiplica las variables sum y difference y almacena el resultado en la variable finalResult


 evenOddResult;
if (finalResult % 2 === 0) { //esta operacion comprueba si el resultado final de finalResilt es par o impar. Si es par evenOddResult es 0 y 1 si es impar
  evenOddResult = 0;       
} else {
  evenOddResult = 1;
}

// Don't edit the code below here!

section.innerHTML = ' '; /*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para1
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`; /* Crea una 
variable finalResultCheck. Si el resultado es igual a 48 se establece en Yes, well done por lo contrario
se establece no es con el valor de finalResult*/
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;/* Establece el contenido de texto de para1
 en Is the final result 48 seguido del valor de finalResultCheck*/
const para2 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para2
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
//Crea una variable evenOddResultCheck y si es igual a cero se establece The final result is even sino se establece the final resuly is odd.Hrm
para2.textContent = evenOddResultCheck; //establece el contenido de texto de para2 al avlor evenOddResultcheck.

section.appendChild(para1);//Añade para1 al elemento section.
section.appendChild(para2);//Añade para2 al elemento section.
