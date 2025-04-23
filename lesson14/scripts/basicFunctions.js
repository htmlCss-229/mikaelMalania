function helloWorld() {
  return 'Nino is the best programmer in the world!';
}
// console.log(helloWorld() + ' and galaxy as well');

// console.log(helloWorld() + ' abc'); // Output: Hello, World!

function calc(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/' && num2 === 0) {
    return 'Opps ! Division by zero is not allowed. Please provide a non-zero divisor. 0';
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'Invalid operator';
  }
}

// console.log(calc(5, 2, '/')); // Output: 2.5

function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;
  const result = document.getElementById('result');

  if (operator === '+') {
    result.textContent = num1 + num2;
  } else if (operator === '-') {
    result.textContent = num1 - num2;
  } else if (operator === '*') {
    result.textContent = num1 * num2;
  } else if (operator === '/' && num2 === 0) {
    result.textContent =
      'Opps ! Division by zero is not allowed. Please provide a non-zero divisor. 0';
  } else if (operator === '/') {
    result.textContent = num1 / num2;
  } else {
    result.textContent = 'Invalid operator';
  }
}

console.log(calc(5, 2, '/')); // Output: 2.5
