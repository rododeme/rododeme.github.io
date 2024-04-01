
//define una nueva clase denominada Shape
class Shape {

    name;// define la propiedad name en la clase Shape
    sides;//define la propiedad sides en la clase Shape
    sideLength;//define la propiedad sideLenght en la clase Shape
   //define el metodo constructor de la clase Shape el cual toma los argumetos name, sides y sideLenght
    constructor(name, sides, sideLength) {
      this.name = name;//Inicializa la propiedad name del objeto Shape con el argumento name pasado al constructor
      this.sides = sides;//Inicializa la propiedad sides del objeto Shape con el argumento sides pasado al constructor
      this.sideLength = sideLength;//Inicializa la propiedad sideLenght del objeto Shape con el argumento sideLenght pasado al constructor
    }  
   //define un nuevo metodo denominado calcPerimeter en la clase Shape
    calcPerimeter() {
      /*Declara la variable constante perimeter y 
      calcula el perimetro de la forma multiplicando la propiedad sides por la propiedad sideLenght*/
        const perimeter = this.sides * this.sideLength;
      //Registra un mensaje de la consola indicando el nombre de la forma y su permitro.
        console.log(`The perimeter of the ${this.name} is ${perimeter}`);
    }
  }
  //Crea un nuevo objeto Shape llamado Square con 4 lados y un valor de 5 sideLenght
  const square = new Shape('square', 4, 5);
  //Crea un nuevo objeto Shape llamado triangle con 3 lados y un valor de 3 sideLenght
  const triangle = new Shape('triangle', 3, 3);
  //Llama al metodo calcPermiter en el objeto triangulo
  triangle.calcPerimeter();