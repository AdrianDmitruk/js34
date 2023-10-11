// Задание 1

// Необходимо создать интерфейс “IPerson” и реализующий его класс 
// "Person" с полями "name" и "age" типа string и number соответственно. 
// Добавьте метод "greet", который будет выводить приветствие с именем и 
// возрастом персоны.

interface IPerson {
    name: string;
    age: number;
    greet(): void;
  }
  
  class Person implements IPerson {
    constructor(public name: string, public age: number) {}
  
    greet(): void {
      console.log(`Меня зовут ${this.name}, мне ${this.age} лет.`);
    }
  }
  

  const person1 = new Person("Адриан", 26);
  person1.greet(); 

// Задание 2

// Необходимо создать интерфейс "Shape" с методом "calculateArea" 
// и "calculatePerimeter". Создать классы "Circle" и "Rectangle", реализующие 
// интерфейс "Shape". Добавьте свойства, необходимые для расчета площади и 
// периметра, и реализовать соответствующие методы для каждого класса.

interface Shape {
    calculateArea(): number;
    calculatePerimeter(): number;
  }
  
  class Circle implements Shape {
    constructor(private radius: number) {}
  
    calculateArea(): number {
      return Math.PI * this.radius ** 2;
    }
  
    calculatePerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
  
    calculateArea(): number {
      return this.width * this.height;
    }
  
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  const circle = new Circle(5);
  console.log("Площадь круга:", circle.calculateArea());
  console.log("Периметр круга:", circle.calculatePerimeter());
  
  const rectangle = new Rectangle(4, 6);
  console.log("Площадь прямоугольника:", rectangle.calculateArea());
  console.log("Периметр прямоугольника:", rectangle.calculatePerimeter());

// Задание 3

// Создайте объединенный тип данных "Pet", который может быть либо объектом 
// "Dog" со свойствами "name" и "breed", либо объектом "Cat" со свойствами 
// "name" и "color". Создайте функцию "printPetInfo", которая будет принимать 
// объект типа "Pet" и выводить информацию о животном в консоль.

type Dog = {
    name: string;
    breed: string;
  };
  
  type Cat = {
    name: string;
    color: string;
  };
  
  type Pet = Dog | Cat;
  
  function printPetInfo(pet: Pet): void {
    if ('breed' in pet) {
      console.log(`Это собака ${pet.name}, порода ${pet.breed}.`);
    } else {
      console.log(`Это кот ${pet.name}, цвет ${pet.color}.`);
    }
  }
  
  const dog: Pet = {
    name: "Ракета",
    breed: "Лабрадор"
  };
  
  const cat: Pet = {
    name: "JS",
    color: "Красный"
  };
  
  printPetInfo(dog); 
  printPetInfo(cat); 
