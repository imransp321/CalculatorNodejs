var num1 = parseInt(process.argv[2]);
var operator = process.argv[3];
var num2 = parseInt(process.argv[4]);

if (operator == "+") {
  console.log(num1 + num2);
} else if (operator == "-") {
  console.log(num1 - num2);
} else if (operator == "*") {
  console.log(num1 * num2);
} else if (operator == "/") {
  console.log(num1 / num2);
}
