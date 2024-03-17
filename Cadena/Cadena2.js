Cadena2.js  
//declara la variable constante quote e inicializa la cadena I do not like green eggs and ham. I do not like them, Sam-I-AM
const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham'; //declara la variable constante substring e inicializa la cadena green eggs and ham

// Add your code here 
const quoteLength = quote.length;// declara la variable quoteLenght e inicializa con la longitud de quote
const index = quote.indexOf(substring);//declara la variable index y la inicializa con el indice de la primera aparición de substring en la cadena quote

/*declara la variable revisedQuote y la inicializa una nueva cadena la cual se crea concatenando varias subcadenas de la cadena quote
  la subcandena desde el prinicipio de quote hasta el indice de subsrtring I dont like
  la subcandena de quote que empieza en el indice de subtring y tiene la misma longitud que substring la cadena
   y la subcadena de quote empieza después del final de la subcadena.   */
const revisedQuote = quote.slice(0, index) + 'I don\'t like ' + quote.slice(index, index + substring.length) + '.' + quote.slice(index + substring.length);

// Don't edit the code below here!

section.innerHTML = ' ';/*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent = `The quote is ${ quoteLength } characters long.`; /*establece la propiedad
textContent del elemento para1 a la cadena The quote is quoteLenght characters long
donde quoteLenght es el valor de la variable quoteLenght*/
const para2 = document.createElement('p');//Crea un nuevo elemento p y guardarlo en la varablie para2
para2.textContent = revisedQuote; //establece la propiedad textContent del elemento para2 al valor de revisedQuote

section.appendChild(para1);//Añade para1 al elemento section.
section.appendChild(para2); //Añade para2 al elemento section.
