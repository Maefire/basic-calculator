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
const deButt = document.querySelector(".decimal");
const display = document.querySelector(".currentOutput");
const lastOutput = document.querySelector(".lastOutput");
const backButt = document.querySelector(".backspace");

/*DEFAULT Display Output*/
display.textContent = 0;
lastOutput.textContent = 0;
const storage = {
    num1    : null,
    num2    : null,
    operator: null,
    get total() {
        if(this.operator !== null){
        return operate(+(this.num1), +(this.num2), this.operator)
        }else {
            return 0
        }
    },
}
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
                return calculate([num1, num2], operator);
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

clearButt.onclick = () => (allClear());

opButt.forEach((button) => {
    button.onclick = () => {
        if(storage.num1 === null){
            storage.num1 = display.textContent
            storage.operator = button.textContent;
            lastOutput.textContent = display.textContent;
            display.textContent = 0; 
        }else if (storage.num1 !== null && storage.num2 === null ){
            storage.num2 = display.textContent;
            lastOutput.textContent =  storage.total;
            display.textContent = 0;
            storage.operator = button.textContent;
            storage.num1 = lastOutput.textContent;
            storage.num2 = null;
        }
        // lastOutput.textContent = (storage.total + " " + storage.operator);
        console.log(storage)
    }
})

backButt.onclick = () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
    if (display.textContent === "") {
        display.textContent = 0;
    }
}

function allClear() {
        storage.num1 = null;
        storage.num2 = null;
        display.textContent = "0";
        lastOutput.textContent = "";
        storage.operator = null;
}

/*if (storage.num1 !== null) {
            storage.num2 = display.textContent;
            lastOutput.textContent = 
                    ((operate(+(storage.num1), +(storage.num2), storage.operator))+
                    " " + button.textContent);
            storage.num1 = lastOutput.textContent.slice(0, -2);
            storage.operator = button.textContent;
            display.textContent = "0";
        } else if(storage.operator === "="){
            console.log("butt push")
            //YOU ARE HERE DUMMY. THIS IS YOUR NEXT TASK
        } else {
            lastOutput.textContent = (display.textContent + " " + button.textContent);
            storage.operator = button.textContent;
            storage.num1 = display.textContent;
            display.textContent = "0";
        } */