/*Project must contain:
    add function
    subtract function
    divide function
    multiply function
*/
/*Notes/ideas:
    Can we store variables in an object, and read that variable later?
    Change object variables depending on if a class exists on HTML?
*/

/**Add Function**/
function add(array) {
	return array.reduce((total, current) => total + current);
};
/**Subtract Function**/
function subtract(array) {
    return array.reduce((total, current) => total - current);
};
/**Multiply Function**/
function multiply(array) {
    return array.reduce((total, current) => total * current, 1);
  };
/**Divide Function**/
function divide(array) {
    return array.reduce((total, current) => total / current, 1);
  };

  //temporary operate function?
function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add([num1, num2]);
        case "-":
            return subtract([num1, num2]);
        case "*":
            return multiply([num1, num2]);
        case "/":
            return divide([num1, num2]);
    }
};
  
  /*Object for staring values? */
let mathStorage = [
    {
        "first operand" : 0,
        "second operand": 0,
    }
]