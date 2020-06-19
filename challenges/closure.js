// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The variable internal is nested inside of the myFunctional. This means it cannot be accessed outside of the function, but can be used by anything else withing the contents of the myFunctional. Since nestedFunction is inside myFunctional, it can reach outside into the larger functional scope, and use this variable without any problems. In general, things are able to reach out into the wider levels of scope, but not down into the narrower ones.

/* Task 2: Counter */



/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
