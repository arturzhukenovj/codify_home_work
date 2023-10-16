//! Создание объекта 

const person = {
    name: "Artur",
    age: 18,
    city: "Bishkek"
}

//!Изменения объекта

const person2 = person

person.age = 20

console.log(person2)

//! Длина массива 

const array = [1,2,3,4,5]

console.log(array.length)

//! Добавления элементов в массив 

const animals = [
    "Собака", 
    "Кошка", 
    "Хомяк"
]

console.log(animals)

//! Объект в массиве 

const people = [
    {
        name: "Aydar",
        age: 12,
        city:"Naryn"
    },
    {
        name: "Aygerim",
        age: 26,
        city:"Bishkek"
    },
    {
        name: "Daniel",
        age: 47,
        city:"Osh"
    }
]
    
console.log(people)

//! Массив с разными типов данных 

const data = [
    100, "String",
    {
        name:"Artur"
    }
]

console.log(data)

//! Доступ с элементами массива 

const fruits = ["Banana","Apple","Pear"]

console.log(fruits [2])

//! Доступ к свойствам объекта

const book = {
    tittle:"King Arthur",
    author:"Thomas Mallory",
    year:1485
}
console.log(book.author)