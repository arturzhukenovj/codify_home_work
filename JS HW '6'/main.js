//! Task 1

const пользователь = {
    имя:'Artur',
    возраст:18,
    result: function () {
        return `Имя: ${this.имя}, возраст: ${this.возраст}`
    }
}
let pol = пользователь.result()
console.log(pol)


//! Task 2 

const Автомобиль = {
    марка:'Lexus',
    result: function () {
        return `Моя машина - ${this.марка}`
    }
}
let auto = Автомобиль.result()
console.log(auto)

//! Task 3

const круг = {
    радиус:10 ,
    result: function () {
        return this.радиус ** 2
    }
}
let circle = круг.result()
console.log(`Радиус круга - ${круг.радиус} Равно = ${circle}`)

//! Task 4

const калькуратор = {
    число1: 11,
    число2:35,
    result: function () {
        return this.число1 + this.число2
    },
    result1: function () {
        return this.число1 * this.число2
    }
}
let res = калькуратор.result()
let ress = калькуратор.result1()

console.log(`Сложение = ${res}`,  `Умножение = ${ress}`)

//! Task 5

function dayweek() {
    let dd = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
    let ddd = new Date().getDay()
    return dd[ddd]
}
let today = dayweek()
console.log(`Сегодня ${today}`)

//! Task 6 

let Продукт = {
    название:'Iphone 12',
    цена:1000,
    Glogus: function () {
        return `Продукт: ${this.название}, Стоит: ${this.цена}$`
     }
}
let pr = Продукт.Glogus()
console.log(pr)

//! Task 7

let Животное = {
    имя:'Собака',
    animal: function () {
        return `Имя: ${this.имя}, издает звук: Гав Гав Гав`
    }
}
let animals = Животное.animal()
console.log(animals)
