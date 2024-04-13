/*Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print Woof! to the console*/





function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() { }

// Set Dog's prototype to inherit from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);

// Set Dog's prototype constructor to Dog
Dog.prototype.constructor = Dog;

// Add a bark method to Dog's prototype
Dog.prototype.bark = function() {
  console.log("Woof!");
};

let beagle = new Dog();

// Test the eat and bark methods of beagle
beagle.eat(); // Output: "nom nom nom"
beagle.bark(); // Output: "Woof!"
