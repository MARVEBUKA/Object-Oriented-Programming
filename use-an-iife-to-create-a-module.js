//Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.




let funModule = (function() {
  // Define isCuteMixin function
  let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };

  // Define singMixin function
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };

  // Return an object containing the mixins
  return {
    isCuteMixin: isCuteMixin,
    singMixin: singMixin
  };
})();

// Usage example:
let duck = {}; // Create an object

// Use funModule to add mixins to the duck object
funModule.isCuteMixin(duck);
funModule.singMixin(duck);

// Test the added mixins
console.log(duck.isCute()); // Output: true
duck.sing(); // Output: "Singing to an awesome tune"
