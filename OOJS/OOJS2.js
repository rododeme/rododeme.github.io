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
  //Define una nueva clase denominada Square  que hereda de la clase Shape
  class Square extends Shape {
    //Define el metodo constructor de la clase Square usando el argumento de sideLenght
    constructor(sideLength) {
     /*Llama al super constructor con los 3 argumentos 'square' para la propiedad name, 4 para
     la propiedad sides y sideLenght para la propiedad sideLenght */
        super('square', 4, sideLength);
      this.name = 'square';//inicializa la propiedad name del objeto Square con la cadena 'square'
      this.sides = 4;//Inicializa la propiedad sides del objeto Square con el entero 4
    }
  //Define el metodo denominado calcArea en la clase Square
    calcArea() {
     //calcula el area del cuadrado elevando al cuadrado la propiedad sideLenght y declarar la variable constante area
        const area = this.sideLength ** 2;
        //Registra un mensaje de la consola indicando el nombre de la forma y su area
      console.log(`The area of the ${this.name} is ${area}`);
    }
  }
  //Crea un nuevo objeto Square con un valor de 5 la propiedad sideLenght
  const square = new Square(5);
  //Llama el metodo calcPerimeter del objeto Square
  square.calcPerimeter();
  //Llama el metodo calcArea del objeto Square
  square.calcArea();