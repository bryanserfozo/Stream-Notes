/*
==============================
JavaScript Review Game
==============================
*/

// === JavaScript Overview ===

// 1. Fill in the blanks about JavaScript features, benefits, and tradeoffs.

/*
JavaScript is like the superhero of the web, operating on the ____________ side to make your pages dynamic. It embraces a event-driven paradigm, making it a rockstar for
 building ____________ web applications. Some of its key features include ____________ typing, and support for ____________ programming.

Benefits:
- Like a ____________-level language
- Cross-platform ____________ (think about browsers!)
- Ready for ____________ with Node.js

Tradeoffs compared to languages like Java or Python:
- Follows a _______-threaded execution model
- ____________ support for parallel programming

*/

// === Datatypes ===

// 2. Fill in the blanks about JavaScript datatypes.

/*
JavaScript has six primitive datatypes: ____________, ____________, ____________, ____________, ____________, and ____________. 
Objects are like superheroes with ____________ and ____________.

*/

// === Control Flow ===

// 3. Implement the missing parts of the control flow statements.

function controlFlowExample(number) {
    // Is the number a hero or a villain? Fill in the blank!
    if (__________) {
      return "Heroic!";
    } else {
      return "Villainous!";
    }
  
    // Unleash the powers of 'number' using a switch statement. What could it be?
    switch (__________) {
      case 1:
        return "The Power of One!";
      case 2:
        return "Double Trouble!";
      default:
        return "A Superpower Unknown!";
    }
  
    // Use a for loop to save the day by printing numbers from 1 to 5!
    for (let i = _________; i <= _________; i++) {
      // Calling all heroes, assemble! Print the hero's number!
      console.log("Hero #" + i);
    }
  }
  
  // === Arrays ===
  
  // 4. Implement the missing parts of array manipulation.
  
  function arrayExample() {
    // Create an array with elements 1, 2, and 3. What could these be?
    const myArray = ____________;
  
    // The array needs reinforcements! Add the number 4 to join the squad!
    ____________;
  
    // Oh no! The first member is on another mission. Remove the first element!
    ____________;
  
    // The squad is ready for action! Return the modified array!
    return ____________;
  }
  
  // === Functions ===
  
  // 5. Implement the missing parts of a function.
  
  function greet(name) {
    // Is the hero wearing a name tag? Check if 'name' is provided.
    if (__________) {
      return "Greetings, " + name + "!";
    } else {
      return "Greetings, unknown hero!";
    }
  }
  
  // === Type Coercion ===
  
  // 6. Explain the concept of type coercion in JavaScript.
  
  /*
  Type coercion in JavaScript is like a magical transformation. It automatically converts values during ____________ operations or when comparing values 
  using ____________ or ____________ operators. Mastering this magic is essential to prevent unexpected quirks in your code.
  

  7. Write a function that demonstrates type coercion in JavaScript.
  */

function typeCoercionDemo(value1, value2) {
    // Perform an operation that involves type coercion.
    // Return the result and a message describing the coercion.
    return {
      result: value1 +value2, // perform an operation that involves type coercion
      message: "Type coercion magically transformed values!",
    };
}

  
  // === == vs === ===
  
  // 8. Explain the difference between == and === in JavaScript.
  
  /*
  In the epic battle of == versus ===, the former (loose equality) performs type ____________, allowing values of different types to find common ground. 
  Meanwhile, the latter (strict equality) demands both value and ____________ to be identical, leaving no room for compromise.
   To avoid unexpected twists in your code, it's often wise to choose the path of strict equality.
  
  */

   // 9. Create a function that compares two values using both == and ===.
  
  function compareValues(value1, value2) {
    // Use == to compare values and return the result.
    // const looseEquality = value1 _________ value2;
  
    // Use === to compare values and return the result.
    // const strictEquality = value1 _________ value2;
  
    return {
      looseEqualityResult: looseEquality,
      strictEqualityResult: strictEquality,
    };
  }
  
  // === Truthy/Falsy ===
  
  // 10. Explain the concept of truthy and falsy values in JavaScript.
  
  /*
  In the world of JavaScript, values are like superheroes with a binary identity: either truthy or falsy. 
  Falsy heroes include ____________, ____________, ____________, ____________, ____________, and ____________. 
  All other values, from the mightiest strings to the bravest arrays, are truthy. Knowing this will help you navigate the twists and turns of conditional statements.
  
  */

  // 11. Write a function that checks if a value is truthy or falsy.
  
  function checkTruthyFalsy(value) {
    // Use an if statement to check if 'value' is truthy.
    // Return "Truthy" if true, otherwise return "Falsy".
    if (__________) {
      return "Truthy";
    } else {
      return "Falsy";
    }
  }
  
  // === JSON ===
  
  // 12. Fill in the blanks about JSON.
  
  /*
  JSON, the superhero acronym for ____________. It's the hero of data interchange, transmitting messages between a server and a web application. 
  JSON is the ____________ sidekick, always ready to represent data with its text-based powers. 
  The global duo, JSON.stringify() and JSON.parse(), can convert JavaScript objects to JSON strings and back.
  
  */

  // 13. Write a function that converts a JavaScript object to a JSON string.
  
  function convertObjectToJSON(obj) {
    // Use JSON.stringify() to convert the object to a JSON string.
    // Return the resulting JSON string.
    return ____________;
  }
  
  // 14. Write a function that parses a JSON string back to a JavaScript object.
  
  function parseJSONToObject(jsonString) {
    // Use JSON.parse() to convert the JSON string to a JavaScript object.
    // Return the resulting JavaScript object.
    return ____________;
  }
  


  
  
  
  