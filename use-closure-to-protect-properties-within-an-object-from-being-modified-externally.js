/*Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15*/




function Bird() {
  let weight = 15; // Declare weight as a private variable

  // Define getWeight method to access the private variable
  this.getWeight = function() {
    return weight; // Return the value of weight
  };
}

// Create an instance of Bird
let bird = new Bird();

// Test the getWeight method to access the private variable
console.log(bird.getWeight()); // Output: 15
