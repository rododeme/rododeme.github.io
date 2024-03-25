//Crear un array de String que contiene nombres denominado como variable constante names
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');//Crea un nuevo elemento parrafo(p) en la variable para

// Add your code here

//Crea a la funcion random que toma dos argumentos, min y max y devuelve un entero aleatorio entre min y max
function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;/*Calcula un numero aleatorio 
         entre min y max. La funcion Math.random() genera un numero aleatorio en coma flotante
         entre 0 y 1. Después el rango se amplia hasta el rango deseado utilizando +min y -min
         para desplazar el rango de izquierda a derecha y +1 para ampliar el rango. El resultado 
         se redondea al entero más cercano utilizando Math.floor*/
      }
//Crea la funcion chooseName el cual toma un argumento nombres y devuelve un nombre aleatorio de la matriz
      function chooseName(names) {
        const index = random(0, names.length - 1);/*Crea una variable llamda indice y le asigna un numero 
        entero aleatorio entre 0 y names.lenght-1 al utilizar la funcion aleatoria*/
        return names[index];//Devuelve un nombre aleatorio de la matriz names accediendo al elemento matriz en el indice generado por la función aleatoria
      }   
const chosenName = chooseName(names); /*Llama a la funcion chooseName con la matriz de nombres como argumento 
y asigna el valor devuelto (un nombre aleatorio) a la varoable chosenName*/
para.textContent = chosenName;/*Establece el contenido de texto del elemento p 
en el valor de la variable chosenName(un nombre aleatorio de la matriz names)*/


// Don't edit the code below here!

section.innerHTML = ' '; //Elimina cualquier contenido existente dentro del elemento section

section.appendChild(para);//Añade el elemento para al elemento section.
    