//Use Object.create to make two instances of Animal named duck and beagle.


function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Create an instance of Animal named duck using Object.create
let duck = Object.create(Animal.prototype);

// Create an instance of Animal named beagle using Object.create
let beagle = Object.create(Animal.prototype);

// Optionally, you can set additional properties for duck and beagle
duck.name = "Duck";
beagle.name = "Beagle";
