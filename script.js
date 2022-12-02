/*Project must contain:
    add function- COMPLETED
    subtract function- COMPLETED
    divide function- COMPLETED
    multiply function- COMPLETED
*/
/*Notes/ideas:
    Can we store variables in an object, and read that variable later?
    Change object variables depending on if a class exists on HTML?
*/
const numButt   = document.querySelectorAll(".number");
const opButt    = document.querySelectorAll(".operator");
const clearButt = document.querySelector(".allClear");
const totalButt = document.querySelector(".tally");
const deButt    = document.querySelector(".decimal");
const output    = document.querySelector(".output");
const backButt    = document.querySelector(".backspace");

/*DEFAULT Display Output*/
output.textContent = 0

/** Number Calculation Function**/
function calculate(array, operator) {
    if(operator === "+"){
    	return array.reduce((total, current) => total + current);
    }else if(operator === "-"){
        return array.reduce((total, current) => total - current);
    }else if(operator === "*"){
        return array.reduce((total, current) => total * current);
    }else if(operator === "/"){
        return array.reduce((total, current) => total / current);
    }
};

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return calculate([num1, num2], operator);
        case "-":
            return calculate([num1, num2], operator);
        case "*":
            return calculate([num1, num2], operator);
        case "/":
            return calculate([num1, num2], operator);
    }
};

/** Button Operations **/
numButt.forEach ((number) => {
    number.onclick = () => {
        if(output.textContent === "0"){
           output.textContent = ""; 
        }
        output.textContent += number.textContent;
    }
})

opButt.forEach ((operator) => {
    operator.onclick = () => {
        console.log(operator.textContent)
    }
})

backButt.onclick = () => {
    output.textContent = output.textContent
                        .substring(0, output.textContent.length - 1)
    if(output.textContent === ""){
        output.textContent = 0;
    }
}

/*Object for storing values? */
let mathStorage = [
    {
        "first operand" : 0,
        "second operand": 0,
    }
]