/*genera un numero aleatorio entre 1 al 100 ambos inclusive usando la función
Math.random() para generar un numero aleatorio en coma flotante entre 0 inclusive y 1 exclusive
luego lo multiplicara por 100 y lo redondea al entero más cercano utilizando Math.floor y finalmente añade 1 
al resultado */
let randomNumber = Math.floor(Math.random() * 100) + 1;
/*Selecciona el elemento HTML con la clase guesses utilizando el metodo querySelector y lo asigna a la 
variable contante guesses */
const guesses = document.querySelector('.guesses'); 
/*Selecciona el elemento HTML con la clase lastResult utilizando el metodo querySelector y lo asigna a la 
variable contante lastResult */
const lastResult = document.querySelector('.lastResult');
/*Selecciona el elemento HTML con la clase lowOrHi utilizando el metodo querySelector y lo asigna a la 
variable contante lowOrHi */
const lowOrHi = document.querySelector('.lowOrHi'); 
/*Selecciona el elemento HTML con la clase guessSubmit utilizando el metodo querySelector y lo asigna a la 
variable contante guessSubmit */
const guessSubmit = document.querySelector('.guessSubmit'); 
/*Selecciona el elemento HTML con la clase guessField utilizando el metodo querySelector y lo asigna a la 
variable contante guessField */
const guessField = document.querySelector('.guessField');
let guessCount = 1;//declara la variable guessCount y la inicializa con un valor de 1
let resetButton;//declara la variable resetButton sin inicializar

//Define la función checkGuess() que es llamada cuando el usuario envía su conjetura
function checkGuess() {
  const userGuess = Number(guessField.value);/*Obtiene el valor de entrada de guessField, lo convierte
  en un numero usando la función Number y lo asigna a la constante userGuess */
  if (guessCount === 1) {  /* Esta linea comprueba si se trata de la primera suposición, y si es así 
  actualiza el elemento guesses con el texto Previous guesses: */
    guesses.textContent = 'Previous guesses: ';
  }

  guesses.textContent += userGuess + ' ';//Añade la suposición del usario al elmento guesses seguida de un espacio

  /*Comprueba si la userGuess concide con el numero aleatorio */
  if (userGuess === randomNumber) {/*Si es así establece el el texto del elemento lastResult
  a Congratulations! You got it right!*/
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green'; //cambia su color de fondo a verde
    lowOrHi.textContent = ''; //borra el elemento lowOrHi
    setGameOver(); // y llama a la función setGame Over
  } else if (guessCount === 10) { //Comrpueba si es el decimo intento
    lastResult.textContent = '!!!GAME OVER!!!'; //Si es así se establece el texto del elemento !!!GAME OVER!!!
    lowOrHi.textContent = ''; // borra el elemento lowOrHi
    setGameOver(); //llama a la función setGameOver
  } else { /*Este bloque se ejecuta cuando la suposición del usuario no coincide con el numero aleatorio
    y no es la deima suposición*/
    lastResult.textContent = '¡Wrong!';// Establece el texto del elemento lastResult a ERROR
    lastResult.style.backgroundColor = 'red';//cambia el color de fondo a rojo
    
    // si la suposición de usuario es menor al numero al azar

    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!' ; //establece que el texto del elemto loworHi a 'Last guess was too low!'
    } else if(userGuess > randomNumber) { // si la suposición del usuario es mayor al numero al azar
      lowOrHi.textContent = 'Last guess was too high!'; //establece que el texto del elemto loworHi a 'Last guess was too high!'
    }
  }

  guessCount++; //Incrementa la variable guessCount en 1
  guessField.value = ''; //Borra el valor del elemento de entrada guessField
  guessField.focus(); //Establece el foco del elemento de entrada guessField
}

//Establece un evento click al boton guessSubmit que llama la función checkGuess
guessSubmit.addEventListener('click', checkGuess);

/*define la función setGameOver que es llamada cuando el usuario adivina el numero correcto o alcanza 
el numero maximo de aciertos*/
function setGameOver() {
  guessField.disabled = true; //desactiva el elemento de entrada guessField
  guessSubmit.disabled = true;//desactiva el boton guessSubmit
  resetButton = document.createElement('button'); //Crea un nuevo elemento boton y lo asigna a la variable resetButton
  resetButton.textContent = 'Empieza una nueva partida';/* Establece el contenido del texto del elemento
resetButton en Empieza una nueva partida*/
  document.body.appendChild(resetButton); //Añade el elemento resetButton al cuerpo del documento
  resetButton.addEventListener('click', resetGame);/* Añade un receptor de eventos click al elemento 
  resetButton que llama a la función resetGame*/
}

//deine la función resetGame que es llamada cuando el usuario pulsa el boton reset
function resetGame() {
  guessCount = 1;//Esta linea reinicia la variable guessCount a 1
  const resetParas = document.querySelectorAll('.resultParas p'); /* Esta linea selecciona todos los elementos
  p dentro del elemento con la clase resultParas y lo asigna a la variable constante resetParas */
  for (const resetPara of resetParas) { //Este bucle itera sobre cada elemento resetPara
    resetPara.textContent = '';//Borra su contenido de texto de la variable resetPara
  }

  resetButton.parentNode.removeChild(resetButton); //Esta linea elimina el elemento resetButton del DOM
  guessField.disabled = false; //Esta linea habilita el elemento de entrada GuessField
  guessSubmit.disabled = false; // Activa el boton guessSubmit
  guessField.value = ''; //Borra el elemento de entrada GuessField
  guessField.focus(); //Establece el foco en el elemento de entrada GuessField
  lastResult.style.backgroundColor = 'white'; //Establece el color de fondo del elemento lastResult a blanco
  randomNumber = Math.floor(Math.random() * 100) + 1; /*Genera un nuevo numero aleatorio entre 1 y 100
  ambos inclusive y es asignado a la variable randomNumber*/
}