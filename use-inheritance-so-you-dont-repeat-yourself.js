/*The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.*/





function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Cat(name) {
  this.name = name;
}

// Set Cat's prototype to an instance of Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Bear(name) {
  this.name = name;
}

// Set Bear's prototype to an instance of Animal
Bear.prototype = Object.create(Animal.prototype);
Bear.prototype.constructor = Bear;
