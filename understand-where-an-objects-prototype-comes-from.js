//
Use isPrototypeOf to check the prototype of beagle.


function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
let isPrototype = Dog.prototype.isPrototypeOf(beagle);