// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст

function printPayWithTax(pay) {
    pay = Number(pay);
    if (!pay) {
        console.log("Значение задано неверно!");
        return;
    }
    console.log(`Размер заработной платы за вычетом налогов равен ${pay - pay * 0.13}`);
}

printPayWithTax(prompt("Укажите вашу зарплату..."));