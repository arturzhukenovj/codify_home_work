//! ЗАДАНИЕ ДЛЯ СТРОК:

// ЛЕГКОЕ ЗАДАНИЕ (declaration function):

function concatStrings(str1,str2) { 
 return str1.concat(str2)
}
let stt = '123';
let sttt = '456';
console.log(concatStrings(stt, sttt))

// СРЕДНЕЕ ЗАДАНИЕ (expression function):

const getStringZamena = function(t, c, n)  {
    let result = t.replaceAll(c, n)
    return result
}

console.log(getStringZamena('JEVE SCRIPT', 'E', 'A'))

const stringToLowerCase = function(i) {
    return result = i.toLowerCase()
}
console.log(stringToLowerCase('JAVA SCRIPT'))

// СРЕДНЕЕ ЗАДАНИЕ (expression function) 2:

const str = function(params, cho) {
    return params.includes(cho)
}
console.log(str('JAVA SCRIPT', 'T'))
// ЛЕГКОЕ ЗАДАНИЕ (arrow function):

let getIndexOf = (w) => { }
console.log('JAVA SCRIPT'.indexOf('S'))

// ЛЕГКОЕ ЗАДАНИЕ (declaration function):

function splitString(para , opo) {
     return para.split(opo)
}
console.log(splitString('J_A_V_A_S_C_R_I_P_T', '_'))

// СРЕДНЕЕ ЗАДАНИЕ (expression function):


const mediumFunc = function (lol,top) {
    return lol.slice(top)
}
console.log(mediumFunc('JAVA SCRIPT', 2))

//! ЗАДАНИЕ ДЛЯ ЧИСЕЛ:

// СРЕДНЕЕ ЗАДАНИЕ (declaration function):

function convertToString(numb) {
    return numb.toString()
  }
  
  const num = 42
  const strr = convertToString(num)
  console.log(strr)
  
// ЛЕГКОЕ ЗАДАНИЕ (expression function):

const parsefloatt = function (qwe) {
    return console.log(parseFloat(qwe))
}

let num1 = '123.123'
parsefloatt(num1)

// СРЕДНЕЕ ЗАДАНИЕ (arrow function):

let sumNumbers = (num1, num2) => {
    return num1 + num2
}
console.log(sumNumbers(2,2))

// ЛЕГКОЕ ЗАДАНИЕ (declaration function):

function getFixedNumber(num3, el) {
    return num3.toFixed(el)
}

let numm = 123456789.123456
console.log(getFixedNumber(numm,1))

// СРЕДНЕЕ ЗАДАНИЕ (expression function):

const prslnt = function(oo,ww) {
    return oo.parseInt(ww)
}
let wet = '55.55'

console.log(parseInt(wet))

// ЛЕГКОЕ ЗАДАНИЕ (declaration function):

function addNumbers(tt,pp) {
    return tt + pp
}

let ttt = 55
let ppp = 55

console.log(addNumbers(ttt, ppp))

// СРЕДНЕЕ ЗАДАНИЕ (expression function):

const consoleParseFloat = (str) => {
    return console.log(parseFloat(str));
}

let a = '123.3456789'
consoleParseFloat(a)

//! ЗАДАНИЕ ДЛЯ МАССИВОВ

// ЛЕГКОЕ ЗАДАНИЕ 

const fruits = ['apple', 'banana', 'cherry']

fruits.push('melon','peach')

console.log(fruits)

fruits.pop()

console.log(fruits)

// СРЕДНЕЕ ЗАДАНИЕ

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let newNum = numbers.slice()
let evenNumbers = []


for (let i of newNum) {
    if (i % 2 == 0) {
        evenNumbers = evenNumbers.concat(i)
    }
}
console.log(evenNumbers.join(''))

// ЛЕГКОЕ ЗАДАНИЕ

let colors = ['red', 'purpul', 'orange']
colors.unshift('yellow')
console.log(colors)
colors.shift()
console.log(colors)

// СРЕДНЕЕ ЗАДАНИЕ 

let firstArray = ['Hello']
let secondArray = ['World']
let mergedArray = firstArray.concat(secondArray)
console.log(mergedArray.includes('World'))

// ЛЕГКОЕ ЗАДАНИЕ 

let animals = ['whiteMishka', 'mishka', 'grizli']
animals.push('neWhiteMishka')
console.log(animals)
console.log(animals.indexOf('neWhiteMishka'))

// СРЕДНЕЕ ЗАДАНИЕ 

let numbersOne = [1,2,3,4,5]
let newNumbers = numbersOne.slice(0, 2)
newNumbers.reverse()
newNumbers = newNumbers.toString()
console.log(typeof newNumbers, newNumbers)

// ЛЕГКОЕ ЗАДАНИЕ 

let fruitsOne = ['dragonFruits', 'apple', 'grusha']
fruitsOne.unshift('painApple')
fruitsOne.shift()
console.log(fruitsOne)

// СРЕДНЕЕ ЗАДАНИЕ 

let firstArrayOne = [1,2,3,[4,5,6]]
firstArray= firstArrayOne.flat(1)
console.log(firstArray.join(','))