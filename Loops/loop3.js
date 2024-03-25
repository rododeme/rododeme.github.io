let i = 500;//declara la variable i y la inicializamos con el valor 500 y se utiliza como contador en un bucle while
const para = document.createElement('p');/*Crear un nuevo elemento parrafo 
utilizando el metodo document.createElement y lo asignamos a la variable constante para*/
 
//Definimos una funcion isPrime que toma un unico argumento num y se utiliza para comprobar si un numero es primo
function isPrime(num) {
    //Iniciamos un bucle que itera desde 2 hasta num-1. La variable j se utiliza como contador de este bucle
    for (let j = 2; j < num; j+=1) {
    
        //Comprobar si el resto del num divido por j es igual a 0 y si lo es entonces num no es numero primo
        if (num % j === 0) {
        return false; //Si el numero no es primo la funcion isPrime devuelve falso
      }
    }

    return true; //Si el numero es primo devolvemos verdadero desde la funcion isPrime
  }
 
 //Iniciamos un bucle while mientras i sea mayor que 1
 while (i > 1) {
//Comprobamos si el numero actual i es primo llamando a la funcion isPrime con i como argumento
    if (isPrime(i)) {
  
      para.textContent += `${i}, `; /*Si el numero es primo, lo añadimos al contenido
       del texto para seguido de una coma y un espacio*/
    }


    i--; //Disminuimos el valor de i en 1
  }

 
  para.textContent += '2';//Añadimos el numero 2 al texto elemento para ya que el numero primo más pequeño

  // Don't edit the code below here!
  const section = document.querySelector('section');// selecciona el primer elemento de seccion en el DOM y lo asigna a la sección constante.
  section.appendChild(para);//Añade el elemnto para al elemento seccion.