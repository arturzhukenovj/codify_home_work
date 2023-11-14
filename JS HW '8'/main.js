//! Task 1

// Простое обещание (Promise): Создайте простой Promise, который выполняется успешно через 2 секунды и возвращает строку 
// "Promise выполнено". Затем обработайте успешное выполнение Promise и выведите результат в консоль.

let promise = new Promise((onResolve) => {
    setTimeout(() => {
        onResolve('Promise выполнено')
    }, 2000)
})
promise.then((response) => console.log(response))

//! Task 2 

// Обработка ошибок: Создайте Promise, который завершается с ошибкой через 3 секунды. 
// Затем обработайте ошибку с использованием метода .catch() и выведите сообщение об ошибке в консоль.

const promiseError = new Promise((lol, lol1) => {
    setTimeout(() => {
        lol1('Error!!')
    }, 3000)
})
promiseError.catch((pop) => console.log(pop))

//! Task 3

// Promise с условием: Создайте функцию, которая возвращает Promise.
// Promise должен выполниться успешно, если переданное в функцию число четное, 
// и завершиться с ошибкой, если число нечетное. Обработайте Promise и выведите результат в консоль.

function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        (number % 2 === 0) ? resolve(`Число ${number} - четное.`) : reject(`Число ${number} - нечетное.`);
    });
}

const myNumber = 8;

checkEvenNumber(myNumber)
    .then(result => console.log(result))
    .catch(error => console.error(error));

//! Task 4 

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Полученные данные:', data);
    })
    .catch(error => {
        console.error('Ошибка запроса:', error);
    });
