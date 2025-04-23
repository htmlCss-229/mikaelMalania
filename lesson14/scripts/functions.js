function solveEquation(num1, action, num2) {
  // assuming that num1 is always undefined, so that we have to find it
  if (action === 'add') {
    return num2 + num1; // solve for num1
  } else if (action === 'subtract') {
    return num1 - num2; // solve for num1
  } else if (action === 'multiply') {
    return num1 * num2; // solve for num1
  } else if (action === 'divide') {
    if (num1 === 0 || num2 === 0) {
      console.log('Cannot divide by zero');
    }
    return num1 / num2; // solve for num1
  } else {
    console.log('Invalid action');
  }
}

console.log(solveEquation(2, 'add', 10)); // Output: 12
