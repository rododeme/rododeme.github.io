//Seleccionar el primer elemento del DOM con la clase off y lo asignamos a la variable constante btn
const btn = document.querySelector('.off');

      let isOn = false; //Declaramos una variable isON y la inicializamos con el valor false y se usa para rastrear el estado actual de la maquina
//Añadimos un addEventListener de evento click al elemento btn, cuando se pulse el boton se ejcutara la funcion de flecha dentro del receptor de eventos
      btn.addEventListener('click', () => {
       //Comprobamos si la variables isOn es verdadera
        if (isOn) {
          btn.textContent = 'Machine is On'; // Si la maquina esta encendida cambiamos el contenido del texto del elemento boton a Machine is ON
          isOn = false;//Ponemos la variable isON a false indicando que la maquina se apago
        } 
        //Si la maquina no esta encendida ejecutamos el siguiente bloque de codigo.
        else {
          btn.textContent = 'Machine is Off'; //Cambiamos el contenido de texto del elemento btn a la maquina esta apagada
          isOn = true;//Ponemos la variables is ON a true indicando que la maquina se encendio.
        }
      });