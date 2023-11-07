const age = 17

if (age >= 18) {
  console.log("Совершеннолетний")
} else {
  console.log("Несовершеннолетний")
}



const isStudent = true

if (isStudent) {
  console.log("Студент")
} else {
  console.log("Не студент")
}



const num1 = 5
const num2 = 10

const sum = num1 + num2

console.log( + num1 + " + " + num2 + " = " + sum)


const day = 1

switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник")
    break;
  case 3:
    console.log("Среда")
    break;
  case 4:
    console.log("Четверг")
    break;
  case 5:
    console.log("Пятница")
    break;
  case 6:
    console.log("Суббота")
    break;
  case 7:
    console.log("Воскресенье")
    break;
  default:
    console.log("Некорректный номер дня недели")
}


const temperature = 100

if (temperature > 30) {
  console.log("Горячо")
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Тепло")
} else {
  console.log("Холодно")
}


const score = 55

const result = score >= 60 ? "Сдал" : "Не сдал"
console.log(result)


const num = 2

if (num % 2 === 0) {
  console.log("Четное")
} else {
  console.log("Нечетное")
}


const language = "JavaScript"

if (language === "JavaScript") {
  console.log("Поддерживается")
} else {
  console.log("Не поддерживается")
}


const userRole = "admin"

if (userRole === "admin") {
  console.log("Доступ разрешен")
} else if (userRole === "editor") {
  console.log("Доступ ограничен")
} else if (userRole === "viewer") {
  console.log("Доступ запрещен")
} else {
  console.log("Неизвестная роль")
}


const a = 10
const b = 25
const c = 15

if (a >= b && a >= c) {
  console.log("Наибольшее число: " + a)
} else if (b >= a && b >= c) {
  console.log("Наибольшее число: " + b)
} else {
  console.log("Наибольшее число: " + c)
}


const fruit = "банан"

if (fruit === "яблоко") {
  console.log("Красное")
} else if (fruit === "банан") {
  console.log("Желтый")
} else if (fruit === "апельсин") {
  console.log("Оранжевый")
} else {
  console.log("Другой цвет")
}


const income = 50000000

const status = income > 50000 ? "Высокий доход" : income > 20000 ? "Средний доход" : "Низкий доход"
console.log(status)


const grade = "A"

switch (grade) {
  case "A":
    console.log("Отлично")
    break;
  case "B":
    console.log("Хорошо")
    break;
  case "C":
    console.log("Удовлетворительно")
    break;
  case "D":
    console.log("Неудовлетворительно")
    break;
  case "F":
    console.log("Неудача")
    break;
  default:
    console.log("Некорректная оценка")
}


const password = "000000000"

if (password.length >= 8) {
  console.log("Пароль надежный")
} else {
  console.log("Пароль слишком короткий")
}


const x = 10
const y = 5

const resultt = x > y ? "x больше y" : x < y ? "y больше x" : "x и y равны"
console.log(resultt)


const isRaining = false

if (isRaining) {
  console.log("Идет дождь")
} else {
  console.log("Дождя нет")
}


const isLeapYear = true

if (isLeapYear) {
  console.log("Год високосный")
} else {
  console.log("Год не високосный")
}


const userInput = "aa"

if (userInput === "") {
  console.log("Пустая строка")
} else {
  console.log("Строка не пуста")
}


const numm = 9

if (numm > 0) {
  console.log("Положительное")
} else if (num < 0) {
  console.log("Отрицательное")
} else {
  console.log("Ноль")
}


const dayOfWeek = "сб"

switch (dayOfWeek) {
  case "пн":
  case "вт":
  case "ср":
  case "чт":
  case "пт":
    console.log("Рабочий день")
    break;
  case "сб":
  case "вс":
    console.log("Выходной")
    break;
  default:
    console.log("Некорректный день недели")
}
