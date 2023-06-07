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
  
// for loop

// let total = 0;
// const summands = [1,2,3,4,5];
// for (let index = 0; index < summands.length; index +=1) {
//     total += summands[index];
//     }

// using a loop to sum numbers

// const array = [0,1,2,3,4,5];
// let sum = 0;
// let oldSum;
// let newSum;
// array.forEach(function(numberToAdd) {
//     oldSum = sum;
//     sum = oldSum + numberToAdd;
//     newSum = sum;
// });

function countTo(targetNumber, multiple) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (let i =1; i <= targetNumber; i++) {
        if (i % multiple === 0) {
            console.log(i);
        }
    }
}

const targetNumber = a;
const multiple = b;

countTo(targetNumber, multiple);

  // User Interface Logic
  function handleCalculation(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").value;

 
  
    document.getElementById("output").innerText =result;
    
  }
    // the code to get and process form values will go here!
  
  
  window.addEventListener("load", function() {
    const form = document.getElementById("calculator");
    form.addEventListener("submit", handleCalculation);
  });

  