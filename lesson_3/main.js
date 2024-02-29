// Задача 1

/* let user;
user = +prompt ("Введіть будь яке число");
if (user >= 10 ) {
console.log("ви ввели число 10 або більше");

}
 else { 
    console.log("ви ввели число меньше 10");

} */

// Задача 2

/* let user = prompt("введіть пароль");
let pass = "password"

if (user === pass) {
    console.log("Ласкаво просимо!");
} else {
    console.log("Пароль не вірний");
} */


// Задача 3

/* let user = prompt("напишіть будь-що");

if (user) {
    console.log(user);
} else if (user === "") {
    console.log("Ви нічого не написали");
} else {
    console.log("відміна вводу");
} */

// Задача 4

/* let a = +prompt('перше число');
let b = +prompt('друге число');

if(a > b) {
    console.log(a  + "Перше число більше" + b);
} else if(b > a) {
    console.log(b + "Друге число більше" + a);
} else {
    console.log(a + "рівні" + b);
} */

// Задача 5

/* let user = prompt("Введіть число, щоб перевірити, чи воно парне");

if (user % 2 === 0) {
    console.log("Парне число");
} else {
    console.log("Не парне число");
} */

// Задача 6

let user = prompt("Введіть номер місяця, а ми назвемо його назву");
let winter1 = 12; let winter2 = 1; let winter3 = 2; let spring1 = 3;
let spring2 = 4; let spring3 = 5; let summer1 = 6; let summer2 = 7;
let summer3 = 8; let autumn1 = 9; let autumn2 = 10; let autumn3 = 11;

let wrongNum = ("некоректний номер місяця");

if(user == 12) {
    console.log("winter");
} if(user == 1) {
    console.log("winter");
} if(user == 2) {
    console.log("winter");
} if(user == 3) {
    console.log("Spring");
} if(user == 4) {
    console.log("Spring");
} if(user == 5) {
    console.log("Spring");
} if(user == 6) {
    console.log("Summer");
} if(user == 7) {
    console.log("Summer");
} if(user == 8) {
    console.log("Summer");
} if(user == 9) {
    console.log("Autumn");
} if(user == 10) {
    console.log("Autumn");
} if(user == 11) {
    console.log("Autumn");
}

else {
    console.log(wrongNum);
}