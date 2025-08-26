class Vehicle {
  run() {
    console.log("Vehicle Is Running");
    return "Vehicle Is Running";
  }
}

class Car {
  run() {
    console.log("Car Is Running");
    return "Car Is Running";
  }
}

class Truck {
  run() {
    console.log("Truck Is Running");
    return "Truck Is Running";
  }
}

let v = new Vehicle();
console.log("Vehicle: ", v.run());

let v1 = new Car();
console.log("Car: ", v1.run());

let v2 = new Truck();
console.log("Truck: ", v2.run());

class Animal {
  speak() {
    console.log("Animal Speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog Barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat Meows");
  }
}

function makeSound(animal) {
  animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog);
makeSound(cat);
