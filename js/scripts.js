// Business Logic

// forEach loop

// const array = [0,1,2,3,4,5];
// let doubledArray = [];
// array.forEach(function(element) {
//   doubledArray.push(element * 2);
//  });

//for loop
  
// const array = [0,1,2,3,4,5];
//   let doubledArray = [];
//   for (let index = 0; index < array.length -1; index +=1) {
//     doubledArray.push(array[index] * 2);
//   }
  


  // User Interface Logic
  function handleCalculation(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;

    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
  
    document.getElementById("output").innerText =result;
    
  }
    // the code to get and process form values will go here!
  
  
  window.addEventListener("load", function() {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
  });