
//! Methods

//? String

//* toLowerCase() - ставит в нижний регистр все элементы строки
console.log('ADSkON'.toLowerCase()) // 'asdkon'

//* toUpperCase()
console.log('asdkon'.toUpperCase()) // 'ADSKON'

//* split() - создает массив где будут находится элементы по
//* разделителю
console.log('q_w_e_r_t_y'.split('_')) // ['q', 'w', 'e', 'r', 't', 'y']

//* trim() - убирает пробелы в конце строки
console.log('qwe     '.trim()) // 'qwe'

//* length - длина строки
console.log('qwer'.length) // 4

//* replace() - заменяет строку на другую строку
console.log('qweqwe'.replace('e', 'i')) // qwiqwe

//* replaceAll() - заменяет все строки на другую строку
console.log('qweqwe'.replaceAll('e', 'i')) // qwiqwi

//* slice() - копирует строку от данного индекса первым аргументом
//* до индекса данного вторым аргументом (если нет, берет строку до конца)
console.log('qwerty'.slice(1, 5)) // 'wert'

//* includes() - ищет данный аргументом символ и отдает булево значение
console.log('qwerty'.includes('qw')) // true
console.log('qwerty'.includes('u')) // false

//* indexOf() - отдает индекс по данному аргументу 
//* (если найдет, если нет: -1)
console.log('qwerty'.indexOf('r')) // 3
console.log('qwerty'.indexOf('u')) // -1

//* concat() - соединяет две строки
console.log('qwe'.concat('rty')) // 'qwerty'


//? Number

//* toString() - превращает число в строку
console.log((5).toString()) // '5'

//* toFixed() - показывает нецелую часть числа после точки
//* кол-во показываемого определятся аргументом 
console.log((5.1234).toFixed(3)) // 5.123

//* Number() - превращает в число
console.log(Number('123.123')) // 123.123
console.log(Number('123')) // 123

//* parseInt() - превращает в число
console.log(parseInt('123.123')) // 123

//* parseFloat() - превращает в число c нецелой частью
console.log(parseFloat('123.123')) // 123.123

//* + - превращает в число
console.log(+'123') // 123

//* Number.isNan()
console.log(Number.isNaN(+'asd')) // true
console.log(Number.isNaN(+'123')) // false
console.log(Number.isNaN([])) // false

//? Boolean

//* Boolean()
console.log(Boolean(4)) // true
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean([])) // true
console.log(Boolean({})) // true
console.log(Boolean(false)) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false

//? Array

//* slice() - копирует от и до (индекс, индекс)
const arr = [1,2,3,4,5]
console.log(arr.slice(0, 3)) // [1,2,3]
console.log(arr)

//* splice() - вырезает от по кол-ву (индекс, кол-во)
const arr1 = [1,2,3,4,5]
console.log(arr1.splice(0, 3))
console.log(arr1)

//* push() - добавляет в конец массива
const arr2 = [1,2,3,4]
arr2.push(5)
console.log(arr2) // [1,2,3,4,5]

//* pop() - удаляет элемент с конца массива
const arr3 = [1,2,3,4,5]
arr3.pop()
console.log(arr3) // [1,2,3,4]

//* shift() - удаляет с начала массива
const arr4 = [1,2,3,4,5]
arr4.shift()
console.log(arr4) // [2,3,4,5]

//* unshift() - добавляет в начало массива
const arr5 = [2,3,4,5]
arr5.unshift(1)
console.log(arr5) // [1,2,3,4,5]

//* concat() - соединяет массив к массиву
console.log([1,2,3].concat([4,5])) // [1,2,3,4,5]

//* includes() - отдает true/false если найдет/не найдет данный в
//* аргументы элемент
console.log([1,2,3,4,5].includes(3)) // true
console.log([1,2,3,4,5].includes(6)) // false

//* flat(этаж) - меняет вложенность массивов в массиве
console.log([1,2,[3,4, [5,6, [7,8]]]].flat(3)) // [1,2,3,4,5,6,7,8]]

//* join(separator) - превращает массив в строку по сепаратору
console.log(['q','w','e'].join('-')) // 'q-w-e'
console.log(['q','w','e'].join('')) // 'qwe'
console.log(['q','w','e'].join(' ')) // 'q w e'
console.log(['q','w','e'].join()) // 'q,w,e'

//* reverse() - переворачивает массив (зеркально)
console.log([1,2,3].reverse()) // [3,2,1]

//* toString() - превращает в строку
console.log(['q', 'w', 'e'].toString()) // 'q,w,e'

//* indexOf() - ищет индекс по значению
console.log(['q', 'w', 'e'].indexOf('w')) // 1
console.log(['q', 'w', 'e'].indexOf('s')) // -1



//* Array.isArray() - проверяет массив ли это true/false
console.log(Array.isArray([])) // true
console.log(Array.isArray({})) // false
console.log(Array.isArray(3)) // false

//! typeof
console.log(typeof '') // 'string'
console.log(typeof 5) // 'number'
console.log(typeof []) // 'object'
console.log(typeof null) // 'null'
console.log(typeof (function() {})) // function
console.log(typeof typeof 5) // string


//? Object

const obj = {
    name: 'AIDAR',
    age: 20,
    lang: 'JS'
}

//* Object.values() - делает массив из всех значений объекта
console.log(Object.values(obj)) // ['AIDAR', 20, 'JS']

//* Object.keys() - делает массив из всех ключей объекта
console.log(Object.keys(obj)) // ['name', 'age', 'lang']

//* Object.entries() - делает массив из [ключ, значение]
console.log(Object.entries(obj)) 
// [['name', 'AIDAR'], ['age', 20], ['lang', 'JS]]

//* Object.freeze() - запрещает изменение объекта
Object.freeze(obj)
obj.name = 'Arsen'
console.log(obj) // будет старый объект

//* Object.assign() - добавляет объект к объекту
const person1 = {
    name: 'someName'
}

const person2 = {
    age: 20
}

const person3 = Object.assign(person1, person2)

console.log(person3) // { name: 'someName', age: 20 }

//* Object.seal() - запрещает добавлять новые ключи,
//* но можно изменять существующие

const testObj = {
    name: 'someName'
}

Object.seal(testObj)
testObj.age = 20
testObj.name = 'Aidar'

console.log(testObj) // { name: 'Aidar' }