// IIFE is Immediately Invoked Function Expression 


// For encapsulation, immediate execution and avoid polluting the global scope 

// 1. Avoid Global Scope Pollution
(function () {
    let secret = "IIFE Secret";
    console.log(secret); // Accessible inside
  })();
  console.log(secret); // ❌ Error: secret is not defined


// 2. Immediately Execute Code 
(function () {
    console.log("App initialized");
  })();
  

// 3. Useful in Asynchronous Operations

(async function () {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json());
    console.log(data);
  })();
  
// 4. Avoid Variable Clashes in Loops
for (var i = 1; i <= 3; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, j * 1000);
    })(i);
  }

// 5. Creating Private Variables

const counter = (function () {
    let count = 0;
    return {
      increment: function () { count++; console.log(count); },
      decrement: function () { count--; console.log(count); }
    };
  })();
  
  counter.increment(); // 1
  counter.increment(); // 2
  counter.decrement(); // 1
  
  