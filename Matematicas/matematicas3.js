matematicas3.js 
// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;//declara la variable constante eleWeight e inicializa con un valor 1000
const mouseWeight = 2;//declara la variable constante mouseWeight e inicializa con 2

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2; //declara la variable constante ostrichHeight e inicializa con un valor 2
const duckHeight = 0.3; // declara la variable constante duckHeight e inicializa con un valor 3

// Statement 3: The two passwords match
const pwd1 = 'stromboli'; //declara la variable constante pwd1 e inicializa con la cadena stromboli
const pwd2 = 'stROmBoLi'; //declara la variable constante pwd2 e inicializa con la cadena stROmBoLi

// Add your code here
const weightComparison=eleWeight>mouseWeight; /* declara la variable constante weightComparison e inicializa con el 
resultado de la comparacion eleWeight>mouseWeight*/
const heightComparison= ostrichHeight>duckHeight;/* declara la variable constante heightComparison e inicializa con el 
resultado de la comparacion ostrichHeight>duckHeight*/

const pwdMatch= pwd1===pwd2;// declara la constante pwdMathc y se inicializa con el resultado de comparacion de pwd1===pwd2

// Don't edit the code below here!

section.innerHTML = ' ';/*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para1
const para2 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para2
const para3 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para3

/* Declara la variable weightTest y la inicializa la cadena True-elephants wight less than mice!? 
si weightComparison es verdadero y la cadena False-of course an elephan is heavier than a mouse si es weightComparison es falso */
const weightTest = weightComparison ? 'True — elephants weigh less than mice!?' : 'False — of course an elephant is heavier than a mouse!';
/* Declara la variable heightTest y la inicializa la cadena True-an ostrich is ineed taller than a duck! 
si heightComparison es verdadero y la cadena False-apparently a duck is taller than an ostrich si es heightComparison es falso */
const heightTest = heightComparison ? 'True — an ostrich is indeed taller than a duck!' : 'False — apparently a duck is taller than an ostrich!?';

/* Declara la variable pwdTest y la inicializa la cadena True-the passwords macth 
si pwdMacth es verdadero y la cadena False-the passwords not macth;please check them si es pwdMacth es falso */
const pwdTest = pwdMatch ? 'True — the passwords match.' : 'False — the passwords do not match; please check them';

para1.textContent = weightTest;//establece la propiedad textContent del elemento para1 al valor de weightTest
section.appendChild(para1);//Añade para1 al elemento section.
para2.textContent = heightTest;//establece la propiedad textContent del elemento para2 al valor de heightTest
section.appendChild(para2);//Añade para2 al elemento section.
para3.textContent = pwdTest; //establece la propiedad textContent del elemento para3 al valor de pwdTest
section.appendChild(para3); //Añade para3 al elemento section.
    
