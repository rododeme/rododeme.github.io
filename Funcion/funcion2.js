//Selecciona el primer elemento canvas de la pagina y lo asigna con la variable constante canvas
const canvas = document.querySelector('canvas');
      const ctx = canvas.getContext('2d');//Obtiene el contexto de renderizado 2D del elemento canvas y lo asigna a la varible ctx

      const x = 50;//Crea la variable x y asigna un valor de 50
      const y = 60;//Crea la variable y y asigna un valor de 60
      const width = 100;//Crea la variable width y asigna un valor de 100
      const height = 75;//Crea la variable height y asigna un valor de 75
      const color = 'blue';//Crea la variable color y le asigna el valor blue

      //Crea la funcion drawRectangle y acepta los parametros de x,y,width,height y color
      function drawRectangle(x, y, width, height, color) {
        ctx.fillStyle = color;//Establece el color de estilo de relleno del rectangulo al parametro de color pasado a la funcion drawRectangle
        ctx.fillRect(x, y, width, height); //Dibuja un rectangulo en el lienza utilizando los parametros de la funcion.
      }

      // Borra el lienzo, borrando cualquier dibujo anterior
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // LLama a la funcion drawRectangle con las variables x,y,width,height y color como argumentos al dibujar el lienzo del rectangulo usando estos valores.
      drawRectangle(x, y, width, height, color);
    