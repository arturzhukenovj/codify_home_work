//! Task 1 

// 1) Создайте переменные для хранения числа, строки и булева значения. Выведите их значения в консоль.

let num = 18
let str = 'Artur'
let bool = true

console.log(num, str, bool)
//! Task 2

// 2) Преобразуйте строку в число и наоборот. Выведите результат в консоль.

 let sa = '18'
 let ass = + sa
 console.log(ass)

 let numm = 456;
let strg = `${numm}`
console.log(strg)

//! Task 3 

// 3) Создайте массив чисел. Используя цикл, выведите каждый элемент массива в консоль.

 let arr = [1,2,3,4,5]
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//! Task 4

// 4) Создайте объект, представляющий информацию о человеке 
// (имя, возраст, город и т.д.). Выведите значения свойств в консоль.

let obj = {
    name:'Artur',
    age:18,
    city:'Bishkek',
}
console.log(`name: ${obj.name}
age: ${obj.age}
city: ${obj.city}`)

//! Task 5 

// 5) Напишите программу, которая проверяет, является ли число 
// четным или нечетным, и выводит соответствующее сообщение.

const nu = 6

if (nu % 2 === 0) {
    console.log(`${nu} - четное.`)
} else {
    console.log(`${nu} - нечетное.`)
}

//! Task 6

// 6) Используя цикл, выведите числа от 1 до 10 в консоль.

for (let fr = 1; fr <= 10; fr++) {
    console.log(fr)
}

//! Task 7 

// 7) Создайте функции 3 типов (arrow, declaration, expression).
// Все три функции должны выводить в консоль - Hello World!

function declarationFunction() {
    console.log("Hello World!")
}

declarationFunction()

let expressionFunction = function () {
    console.log("Hello world!")
}
expressionFunction()

let arrowFunction = () => {
    console.log("Hello world!")
}
arrowFunction()

//! Task 8

// 8) Создайте два промиса - 1. Отрабатывает успешно 2. Отрабатывает с ошибкой

let promise = new Promise((onResolve) => {
    setTimeout(() => {
        onResolve('Успешно')
    }, 2000)
})
promise.then((response) => console.log(response))

let promis = new Promise((popo,onReject) => {
    setTimeout(() => {
        onReject('Ошибка')
    }, 3000)
})
promise.catch((res) => console.log(res))

//! Дополонительно: (скорее всего все успеют приступить)

// 1) Напишите функцию, которая принимает массив чисел и возвращает среднее арифметическое значение.

//! НЕ ПОЛУЧИЛОСЬ

// 2) Напишите функцию, которая принимает массив строк и возвращает
// новый массив строк, где каждый элемент в верхнем регистре.

function functionGer() {
    const maps = 'всем привет, меня зовут артур'
    const mapps = maps.toUpperCase()
    console.log(mapps)
}
functionGer()

// 3) Напишите функцию, которая принимает массив объектов с полями "имя" и "возраст"
//  и возвращает новый массив объектов с полями "имя" и "возраст", отсортированный по возрастанию возраста.

//! НЕ ПОЛУЧИЛОСЬ

//4) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа.

//! НЕ ПОЛУЧИЛОСЬ

// 5) Напишите функцию, которая принимает массив объектов и сортирует их по полю "имя" в алфавитном порядке.

//! НЕ ПОЛУЧИЛОСЬ

// 6) Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа.

function functionGew() {
    let fi = [1,2,3,4,5,6,7,8,9]
    let fil = fi.filter(elem => elem % 2 === 0)
    console.log(fil)
}
functionGew()

// 7) Напишите функцию, которая принимает массив объектов с полями "имя" и "зарплата"и возвращает
//  новый массив объектов, содержащий только тех сотрудников, чья зарплата больше 50000.

// function objArr() {
//     let a = [{name:'Arlen',salary:49999}]
//     let s = [{name:'Sanya',salary:51000}]
//     let k = [{name:'Kutman', salary:40000}]
// }


// 8) Напишите функцию, которая принимает массив чисел и возвращает
// новый массив, содержащий только числа, которые больше 10 и меньше 20.

function functionGeq() {
    let fol = [1,22,12,5,7,3,10,11]
    let fo = fol.filter
}
