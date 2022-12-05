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
const numButt = document.querySelectorAll(".number");
const opButt = document.querySelectorAll(".operator");
const clearButt = document.querySelector(".allClear");
const totalButt = document.querySelector(".tally");
const deButt = document.querySelector(".decimal");
const display = document.querySelector(".currentOutput");
const lastOutput = document.querySelector(".lastOutput");
const backButt = document.querySelector(".backspace");

/*DEFAULT Display Output*/
display.textContent = "0"
let storage
num1 = "";
num2 = "";

/** Number Calculation Function**/
function calculate(array, operator) {
    if (operator === "+") {
        return array.reduce((total, current) => total + current);
    } else if (operator === "-") {
        return array.reduce((total, current) => total - current);
    } else if (operator === "*") {
        return array.reduce((total, current) => total * current);
    } else if (operator === "/") {
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
            if (num2 === 0) {
                alert("You can't divide by 0.")
                return
            } else {
                return calculate([num1, num2], operator);
            }
    }
};

/** Button Operations **/
numButt.forEach((button) => {
    button.onclick = () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        display.textContent += button.textContent;
    }
})

opButt.forEach((button) => {
    button.onclick = () => {
        // console.log(button.textContent)
        if (lastOutput.textContent !== "") {
            //store current output as num2 (thiis gives us num1 and num 2)
            //operate(num1, num2, operator)
            //console.log operate to see what is returned
            //lastOutput.textContent = whatever operate returns
            //store operator (assuming "=" wasn't clicked)
            //store answer as num1
            //return
        } else {
            lastOutput.textContent = (display.textContent + " " + button.textContent)
            //store operator
            //store num1
            display.textContent = "0"
        }
    }
})

backButt.onclick = () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
    if (display.textContent === "") {
        display.textContent = 0;
    }
}

clearButt.onclick = () => {
    window.location.reload();
}
