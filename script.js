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
const tallyButt = document.querySelector(".tally");

/*DEFAULT Display Output*/
display.textContent = 0;
lastOutput.textContent = "-";
tallyAll = false;

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
/** Number Calculations **/
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

function storeTheInformation(){
    if(storage.num1 === null) {
        storage.num1 = display.textContent;
        lastOutput.textContent = display.textContent;
        display.textContent = 0; 
    }else if(storage.num1 !== null && storage.num2 === null) {
        storage.num2 = display.textContent;
        lastOutput.textContent =  storage.total;
        display.textContent = 0;
        storage.num1 = lastOutput.textContent;
        if(+(storage.num2) === 0 && storage.operator === "/") {
                alert("That's cute. You can't divide by 0.");
                allClear();
        }else {
            storage.num2 = null;
        }
    }
    console.log(storage)
}

/** Button Operations **/
numButt.forEach((button) => {
    button.onclick = () => {
        if (display.textContent === "0" || tallyAll === true) {
            display.textContent = "";
            tallyAll = false;
        }
        display.textContent += button.textContent;
    }
})

clearButt.onclick = () => (allClear());

function allClear() {
    storage.num1 = null;
    storage.num2 = null;
    display.textContent = 0;
    lastOutput.textContent = "-";
    storage.operator = null;
    console.log(storage);
}

opButt.forEach((button) => {
    button.onclick = () => {
        if(storage.operator === null){
            storeTheInformation();
            storage.operator = button.textContent;
        }else if(storage.operator !== null && tallyAll === false){
            storeTheInformation();
            storage.operator = button.textContent;
        }
    }
})

tallyButt.onclick = () => {
    tallyAll = true
    if(storage.operator !== null){
        storeTheInformation();
        display.textContent = storage.num1;
        storage.num1 = null;
        lastOutput.textContent = "-";
    }
}

backButt.onclick = () => {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
    if (display.textContent === "") {
        display.textContent = 0;
    }
}

deButt.onclick = () => {
    if(display.textContent.match(/\./i)){
        return;
    }else{
        display.textContent += ".";
    }
}