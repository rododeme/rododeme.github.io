Cadena1.js 
// Add your code here

const quoteStart = 'Don\'t judge each day by the harvest you reap ';/*declara la varible quoteStart e inicializa
 con la cadena Dont judge each day by the harvest you reap*/
const quoteEnd = 'but by the seeds that you plant.';/*declara la variable quoteEnd e inicializa con la 
cadena but by the seeds that you plant*/

const finalQuote = quoteStart.concat(quoteEnd);/*declara la variable finalQuote e inicializa con el
resultado de concatenar quoteStart y quoteEnd mediante el metodo concar*/

// Don't edit the code below here!

section.innerHTML = ' '; /*selecciona el elemento seccion y establece su propiedad innerHTML a una cadena vacía 
borrando cualquier contenido existente*/
const para1 = document.createElement('p'); //Crea un nuevo elemento p y guardarlo en la varablie para1
para1.textContent = finalQuote; //establece la propiedad de textContent del elemento para1 al valor finalQuote

section.appendChild(para1); //Añade para1 al elemento section.
