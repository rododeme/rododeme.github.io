Cadena3.js
const quote = 'I dO nOT lIke gREen eGgS anD HAM';//declara una variable constante quote e inicializa el string I dO nOT lIke gREen eGgS anD HAM

// Add your code here  
/*Declara la variable fixedQuote y la inicializa una nueva cadena que se crea concatenando varias subcadenas
 de la variable quote. Concatena el primer caracter de quote convertido a mayusculas la subcadena de quote
 que empieza a partir del segundo caracter y llega hasta el final convertida en minusculas
  y la cadena spam and eggs sustituye green eggs and ham*/
const fixedQuote = quote.charAt(0).toUpperCase() + quote.slice(1).toLowerCase().replace('green eggs and ham', 'spam and eggs');
const finalQuote = fixedQuote + '.';/*declara ña variable finalQuote y la inicializa una nueva cadena
que se crea concatenando la cadena fixedQuoted con un caracter punto*/

// Don't edit the code below here!

section.innerHTML = ' ';/*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent = fixedQuote;//establece la propiedad textContent del elemento para1 al valor de fixedQuote
const para2 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para2
para2.textContent = finalQuote; //establece la propiedad textContent del elemento para2 al valor de finalQuote
section.appendChild(para1);//Añade para2 al elemento section.
section.appendChild(para2);//Añade para2 al elemento section.