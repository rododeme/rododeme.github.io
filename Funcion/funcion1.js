//Crear un array de String que contiene nombres denominado como variable constante names
const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p'); //Crea un nuevo elemento parrafo(p) en la variable para

//Crea la funcion chooseName que sera usada para seleccionar al azar un nombre del array
function chooseName() {
  //Genera un indice aleatorio para seleccionar un nombre de la matriz
    const randomIndex = Math.floor(Math.random() * names.length); 
  para.textContent = names[randomIndex];//Establece el contenido de texto para con el nombre seleccionado aleatoriamente
}

chooseName();//Llama a la función chooseName para seleccionar el nombre al azar y mostrarlo.

section.innerHTML = ''; //Elimina cualquier contenido existente dentro del elemento section

section.appendChild(para);//Añade el elemento para al elemento section.