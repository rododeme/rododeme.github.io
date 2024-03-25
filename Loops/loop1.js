

//declara un arreglo de Strings llamado myArray el cual consiste de 5 elementos
const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    
const list = document.createElement('ul');//Crea un nuevo ul elemento utilizando el metodo createElement en el objeto del documento y lo asigna a la lista de constantes.

 //Inicia un bucle for que iterara mientras la variable i sea menor que la longitud de la matriz myArray  
for (let i = 0; i < myArray.length; i += 1) {   
   
    const listItem = document.createElement('li');// Crea un nuevo li elemento y lo asigna a la constante listItem
  
    listItem.textContent = myArray[i]/*Establece la propiedad textContent del elemento listItem en el 
    elemento correspondiente de la matriz myArray(en funcion del valor i actual)*/

list.appendChild(listItem); } //Anañade el elemto listItem al elemento list


    const section = document.querySelector('section');// selecciona el primer elemento de seccion en el DOM y lo asigna a la sección constante.
    section.appendChild(list);//añade el elemento de lista al elemento sección.
