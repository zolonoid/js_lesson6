// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

function max(num1, num2, num3) {
    maxNum = num1;
    if (num2 > maxNum) maxNum = num2;
    if (num3 > maxNum) maxNum = num3;
    return maxNum;
}

let nums = new Array();
while (nums.length < 3) nums.push(Number(prompt(`Введите число ${nums.length + 1}`)));
alert(`Максимальное число: ${max(nums[0], nums[1], nums[2])}`);
