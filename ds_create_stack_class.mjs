/*

In the last section, we talked about what a stack is and how we can use an array to represent a stack. In this section, we will be creating our own stack class. Although you can use arrays to create stacks, sometimes it is best to limit the amount of control we have with our stacks. Apart from the push and pop method, stacks have other useful methods. Let's add a peek, isEmpty, and clear method to our stack class.

Write a push method that pushes an element to the top of the stack, a pop method that removes and returns the element on the top of the stack, a peek method that looks at the top element in the stack, an isEmpty method that checks if the stack is empty, and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection.

*/

// ----------------Free Code Camp---------------------

/* function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
} */

// ----------------Answer Code------------------------

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line
  this.push = function(element) {
    this.collection.push(element);
  };
  this.pop = function(element) {
    this.collection.pop(element);
    return element;
  };
  this.peek = function() {
    var peek = this.collection[this.collection.length-1];
    return peek;
  };
  this.isEmpty = function() {
    if (this.collection == null) {
      return true;
    }
    else {
      return false;
    };
  };
  this.clear = function() {
    for (let element in this.collection) {
      delete this.collection[element];
    };
  };
  // Only change code above this line
}
