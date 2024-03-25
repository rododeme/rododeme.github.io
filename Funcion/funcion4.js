//Crear un array de String que contiene nombres denominado como variable constante names
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');//Crea un nuevo elemento parrafo(p) en la variable para

//define una funcion de flecha isShort. Toma un argumento name y devuelve verdadero si la longitud del nombre es menor de 5 caracteres
const isShort = (name) => name.length < 5;

/*Llama el metodo de filtado de la matriz de names, pasando la funcion isShort 
como argumento. El metodo filter devuelve un nuevo array que contienen todos los elementos que pasan 
la prueba por la funcion proporcionada. La prueba es si el nombre tiene menos de 5 caracteres*/
const shortNames = names.filter(isShort);
para.textContent = shortNames.join(', '); /*Establece la propiedad textContent del elemento para en
una cadena, la cual se crea llamdo el metodo join en la Matriz shortNames, con el separador establecido
en una coma seguida de un espacio. El metodo join concatena todos los elementos del array en una cadena y la devuelve*/

section.innerHTML = ' ';//Elimina cualquier contenido existente dentro del elemento section

section.appendChild(para);//Añade el elemento para al elemento section.