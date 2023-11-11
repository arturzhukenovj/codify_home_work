
//! Destructuring - дестуруктуризация

const obj = {
    name: 'Aidar',
    age: 20,
    langs: ['JS', 'TS', 'C++'],
    salarys: {
        codify: 100000,
        nurtelecom: 300000
    },
    logTotalSalary: function() {
        const total = Object.values(this.salarys)
                            .reduce((p, c) => p + c, 0)
        console.log(`Total salary: ${total}`)
    }
}

//! Синтаксис

const { 
    name,
    age,
    salarys: {
        codify
    },
    langs: [_, lang2, lang3]
} = obj

console.log(name, age, codify, lang2, lang3)

// //! Default value when desctructuring

// const {
//     country = 'not country' // default
// } = obj

// console.log("Country: ", country)

// //! Other values (spread operator) - остальные значения (оператор распространения)

// const {
//     logTotalSalary,
//     name,
//     langs: [lang1, lang2, ...otherLangs],
//     ...otherProps // props = properties (свойства)
// } = obj

// console.log(otherProps, otherLangs)

// //! rename destructuring prop

// const {
//     name: objName
// } = obj

// const {
//     name: objName1
// } = obj

// const {
//     name: objName2
// } = obj

// console.log({
//     objName,
//     objName1,
//     objName2
// })

// // ! COPY OBJECT

// const obj1 = {
//     name: 'Aidar',
//     a: 3,
// }

// const obj2 = {
//     ...obj1
// }

// obj2.name = 'Arlan'

// console.log(obj1)

// //! COPY ARRAY

// const arr = [1,2,3,4,5]

// const arr2 = [...arr]

// //! function desctr. params

function fn({ name = '' }, [ lang1 = '', ...otherL ]) {
    console.log(name, lang1)
    console.log(otherL)
}

const person = { name: 'Aidar'}

fn(person, ['JS', 'TS', 'C++'])


// //! Tasks

// //? Нужно создать один массив с элементами двух массивов

// const arr1 = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// const result1 = arr1.concat(arr2) // [1,2,3,4,5,6,7,8,9,10]
// const result2 = [...arr1, ...arr2] // [1,2,3,4,5,6,7,8,9,10]
// const result3 = [arr1, arr2].flat(1) // [1,2,3,4,5,6,7,8,9,10]

// console.log(result1,result2,result3)

// //? Создайте новый объект, он должен быть точной копией
// //? предосталенного obj без ключа - a 

// //? 1 - при помощи деструктуризации
// //? 2 - при помощи spread оператора

// //? {
// //?    b: 2,
// //?    c: 3,
// //?    d: 4
// //? }

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4
// }

// //* 1 variant

// const {
//     b,
//     c,
//     d
// } = obj

// console.log({
//     b,
//     c,
//     d
// })

// //* 2 variant

// const {
//     a,
//     ...other
// } = obj

// console.log(other)


// //? Покажите в логах имена объектов при помощи деструктуризации

// //? Aidar
// //? Arlan

// const aidar = {
//     name: 'Aidar'
// }

// const arlan = {
//     name: 'Arlan'
// }

// const {
//     name: aidarName
// } = aidar

// const {
//     name: arlanName
// } = arlan


// console.log(aidarName)
// console.log(arlanName)