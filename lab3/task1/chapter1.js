// ===== TASK 1: Basic alerts and variables =====
alert( "Я JavaScript!" );

let ourPlanetName = "Земля";
let currentUserName = "Джон";
let name = "Ilya";

// ===== TASK 2: Template literals =====
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

// ===== TASK 3: Prompt and alert =====
let name1 = prompt("Ваше имя?", "");
alert(name1);

// ===== TASK 4: ECMAScript check =====
'use strict';
let value = prompt('Какое "официальное" название JavaScript?', '');
if (value == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}

// ===== TASK 5: Ternary operator =====
let a, b;
result = (a + b < 4) ? 'Мало' : 'Много';

// ===== TASK 6: Nested ternary =====
let login;
let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' : '';

// ===== TASK 7: Admin authorization =====
let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
    let pass = prompt('Пароль?', '');
    if (pass === 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass === '' || pass === null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }
} else if (userName === '' || userName === null) {
    alert( 'Отменено' );
} else {
    alert( "Я вас не знаю" );
}

// ===== TASK 8: Nullish coalescing =====
let num1 = 10, num2 = 20;
result ??= num1 ?? num2;

// ===== TASK 9: Labeled loop =====
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    alert( i );
}

// ===== TASK 10: Switch statement =====
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

// ===== TASK 11: Power function =====
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n2 = prompt("n?", '');
if (n2 >= 1 && n2 % 1 == 0) {
    alert( pow(x, n2) );
} else {
    alert(`Степень ${n2} не поддерживается, используйте натуральное число`);
}

// ===== TASK 12: Callback functions =====
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);
