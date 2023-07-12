setDisplay(0);
currentOP = '';
buffer = 0;
result = 0;
lastPress = '';

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   setDisplay(0);
   currentOP = '';
	buffer = 0;
	result = 0;
	lastPress = '';
 
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById('output').innerHTML = str;
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return(result);
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   result = (result * 10) + num;
   if (result > 999999999) {
   		result = 999999999;
   } else if (result < -999999999) {
   		result = -999999999;
   }
   lastPress = ''
   setDisplay(result);
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if (lastPress == 'op'){
   		currentOP = op;
   } else {
   		buffer = result;
   		currentOP = op;
   		result = 0;
   }
   lastPress = 'op'
   setDisplay(0);
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (result === 0 && currentOP === '/') {
   		setDisplay('ERROR');
   } else {
   		end = 0
   		if (currentOP === '+'){
   			end = buffer + result;
   		} else if (currentOP === '-') {
   			end = buffer - result;
   		} else if (currentOP === '*') {
   			end = buffer * result;
   		} else if (currentOP === '/') {
   			end = Math.floor(buffer / result);
   		} else {
   			end = result;
   		}
   		buffer = end;
   		result = end;
   		if (end > 999999999) {
   			end = 999999999;
   		} else if (end < -999999999) {
   			end = -999999999;
   		}
   		setDisplay(end);
   }
}


