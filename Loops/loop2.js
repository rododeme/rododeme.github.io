const name = 'Mustafa'; //declara una variable constante nombre y asigna la cadena Mustafa
const para = document.createElement('p');//Crea un nuevo elemento de parrafo (p) y lo asigna a la variable constante para

/*Declara una variable constante phonebook y le asigna un array de objetos 
donde cada objeto representa una persona y su numero telefonico*/
const phonebook = [
  { name : 'Chris', number : '1549' },
  { name : 'Li Kang', number : '9634' },
  { name : 'Anne', number : '9065' },
  { name : 'Francesca', number : '3001' },
  { name : 'Mustafa', number : '6888' },
  { name : 'Tina', number : '4312' },
  { name : 'Bert', number : '7780' },
  { name : 'Jada', number : '2282' },
]


//Inicia un bucle for-of que itera sobre cada entrada de la matriz de la agenda telefonica.
for (const entry of phonebook) {
//Comprueba de que si la propiedad name del objeto de entrada actual es igual a la variable constante name
    if (entry.name === name) {

        /*Establece el contenido de texto del elemento para 
        que en una cadena incluya las propiedas de nombre y numero del objeto actual*/
      para.textContent = `${name}'s number is ${entry.number}`;

      break; //Sale del bucle for-of en cuanto se encuentre una entrada que coincida.
    }
  }
// Don't edit the code below here!
const section = document.querySelector('section'); // selecciona el primer elemento de seccion en el DOM y lo asigna a la sección constante.
section.appendChild(para);//Añade el elemnto para al elemento seccion.

