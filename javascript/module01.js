// let name = "Alisa";
// console.log(name);
// name = "Lucia";
// console.log(name);
// name = `Oleg`;
// console.log(name);
// console.log("Alisa");
// console.log(typeof name); //узнать тип данных
// let age; //объявление
// age = 15; //инициализация. Attention! without 'let'
// console.log(age);

// const number = 6; //должно быть и объявление и инициализация.
// //переназначать нельзя
// console.log(number);

//текстовая переменная должна быть в любых кавычках ``  ""  ''
// числовая - без

// DATA TYPES

// PRIMITIVES
// 1 - String ("", '', ``)
// интерполяция ${} и шаблонная строка ``. Интерполяция работает только с шаблонными кавычками
// console.log(`my name is ${name}`);

// // 2 - undefined неизвестно
// let age;
// console.log(age); //undefined
// console.log(typeof age); //undefined

//3 number  пишем без кавычек

//4 Boolean когда вопрос задаентся еа да или нет
//ответ: true  false

// let isOpen = true;
// console.log(isOpen);
// console.log(typeof isOpen);

// isOpen = false;
// console.log(isOpen);
// console.log(typeof isOpen);

// 5 - null
// let badNews = null;
// console.log(badNews);
// console.log(typeof badNews); // !!object!! потому что это специальная ошибка в JS -
// на место нул должен объект случится.Он место занимает в памяти.Он есть, но пусто.
// В него ничего нельзя вложить или вытащить, а занимает место как полноценный объект,
//     вместо него можно записать другой объект и переиспользовать.Андефайнд ничего, числовой занимает 4 бита
// а нуль это сущность)) Сначала не заметили эту ошибку, а потом не передулывали так это уже использовали.В качестве
// дефолтного параметра, если не получил доступ к обэкту.

//Взаимодействие с пользователем
// 1
// let enteredName = prompt("Enter your name please");
//выводит всегда стринг, нужн одобавлять плюс, если хотим числовое значените через промт получить
// "" - Ok, null - Cancel
// console.log(enteredName);
// console.log(typeof enteredName);

// 2
// let msg = alert("Attention!");
// // undefined - Ok только  undefined в любом случае, так кнопка одна
// console.log(msg);
// 3
// let asking = confirm("А вам есть 18?");
// // true - Ok, false - Cancel
// console.log(asking);

// Mathematic operators
// console.log(2 + 3);
// console.log(2 - 3);
// console.log(2 * 3);
// console.log(3 / 3);

// // возведение в степень
// console.log(2 ** 3);
// // остаток от деления
// console.log(7 % 3); // 1
// console.log(6 % 3); // 0

// console.log(3 < 2); // false
// console.log(3 > 2); // true

// console.log(3 <= 3); // true
// console.log(3 >= 3); // true

// строгое равенство и не равенство
//         number boolean
// console.log(1 === true); // false
// console.log(1 !== true); // true
// !== строго не равно (! - означает не)

// не строгое равенство и не равенство- логическое приведение типов
// console.log(1 == true); // true
// console.log(1 != true); // false

// console.log(5 === "5"); // false
// console.log(5 == "5"); // true

// console.log(5 !== "5"); // true
// console.log(5 != "5"); // false

// ПРЕОБРАЗОВАНИЕ ТИПОВ
// к числу
// let stringVar = "5";
// console.log(stringVar);
// console.log(typeof stringVar);
// // 1
// stringVar = +stringVar;
// console.log(stringVar);
// console.log(typeof stringVar);

// // 2
// let strVar = true;
// console.log(strVar);
// console.log(typeof strVar);

// strVar = Number(strVar);
// console.log(strVar);
// console.log(typeof strVar);

// // к строке
// let numberVar = 5;
// console.log(numberVar);
// console.log(typeof numberVar);
// // 1
// numberVar += ""; // numberVar = numberVar +""; Добавляя строку числовой тип переходит в строчный
// console.log(numberVar);
// console.log(typeof numberVar);
// console.log(5 + "5" + 5); // 555
// console.log(5 + 5 + "5"); // 105
// console.log("5" + 5 + 5 + "5"); // 5555
// console.log("5" + 5 + 5); // 555

// к булю
// let boolVar = 1;
// console.log(boolVar);
// console.log(typeof boolVar);

// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = 5;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = -1;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = Infinity;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// boolVar = " "; // ТУТ ПРОБЕЛ ЕСТЬ!!!
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // true
// console.log(typeof boolVar); // boolean

// 6 значений, что приводяться к false:
// null, undefined, 'пустая строка без пробела', 0, Nan, false
//     // 6 falsy значений
//     // 1
//     boolVar = "";
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 2
// boolVar = 0;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 3
// boolVar = undefined;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 4
// boolVar = null;
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 5
// boolVar = NaN; // Not a Number
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean
// // 6
// boolVar = false; // Not a Number
// console.log(boolVar);
// console.log(typeof boolVar);
// boolVar = Boolean(boolVar);
// console.log(boolVar); // false
// console.log(typeof boolVar); // boolean

// example
// let z = "hgvcfhaw";

// z = +z;
// console.log(z); // NaN

// z = Boolean(z);
// console.log(z); // false

// 0.1 + 0.2

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

// console.log(Math.floor(1.1)); // 1
// console.log(Math.floor(1.5)); // 1
// console.log(Math.floor(1.9)); // 1

// console.log(Math.ceil(1.1)); // 2
// console.log(Math.ceil(1.5)); // 2
// console.log(Math.ceil(1.9)); // 2

// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.1)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(1.9)); // 2

// // console.log(Math.random().toFixed(4)); // рандом число от 0 до 1
// console.log(Math.floor(Math.random() * (10000 - 1) + 1));
