// Необходимо реализовать четыре функции,
// каждая функция должна принимать по два числа и выполнять одну из арифметических операций

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    if (num1 > num2)
        return num1 - num2;
    if (num2 > num1)
        return num2 - num1;
    return 0;
}

function mul(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

console.log(add(2, 6));
console.log(sub(2, 6));
console.log(mul(2, 6));
console.log(div(6, 2));
