Cadena4.js 
const theorem = 'Pythagorean theorem';//declara una variable constante theorem y la inicializa la cadena Pythagorean theorem

const a = 5;//delclara una variable constante a y la inicializa el numero 5
const b = 8; //delclara una variable constante b y la inicializa el numero 8
const c = Math.sqrt(a*a + b*b);//declara la variable constante c y la inicializa la raiz cuadrada de la suma del cuadrado de a y b.

//declara la variable myString y la inicialza una cadena que contiene los valores de las variables theorem,a,b y c interpolados en la cadena usando literales de plantilla.
const myString = `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${c}.`;



// Don't edit the code below here!

section.innerHTML = ' ';/*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent = myString;//establece la propiedad textContent del elemento para1 al valor de myString

section.appendChild(para1);//Añade para1 al elemento section.
    