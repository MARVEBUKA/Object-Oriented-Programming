/*Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.*/




function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
numLegs: 4,

  // Define the eat method on the prototype
  eat: function() {
    return this.name + " is eating";
  },

  // Define the describe method on the prototype
  describe: function() {
    return "My name is " + this.name + " and I have " + this.numLegs + " legs";
  }
}