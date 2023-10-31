//! ЗАДАНИЕ 1: Map

const mapp = [1,2,3,4,5]

const mapArr = mapp.map((elem) => elem * 10)

console.log(mapArr)

//! ЗАДАНИЕ 2: Filter

const fill = ["banana","apple","cherry","justify","fox"]

const fil = fill.filter(elem => elem.length > 5 ? elem : '' )

console.log(fil)

//! ЗАДАНИЕ 3 ForEach

const forch = [1,2,3,4,5]

const forchh = forch.forEach((elem) =>{
    console.log(elem **2)
})

//! ЗАДАНИЕ 4 Reduce

const reducee = [1,2,3,4,5,6,7,8,9,10]

const reducce = reducee.reduce((a, b) => {
    return a + b
})
console.log(reducce)

//! ЗАДАНИЕ 5 Some

const soome = [1,3,5,6,7,9]

const somee = soome.some(elem => elem % 2 === 0)

console.log(somee)

//! ЗАДАНИЕ 6 Every

const everyy = [2,4,6,7]

const everry = everyy.every(elem => elem % 2 === 0 )

console.log(everry)

//! ЗАДАНИЕ 7 Find

const finnd = [1,2,3,5,7,9]

const findd = finnd.find(elem => elem % 2 === 0) || null

console.log(findd)

//! ЗАДАНИЕ 8 MAP

const maps = ['всем привет, меня зовут артур']

const mapps = maps.map(elem => elem.toUpperCase())

console.log(mapps)

//! ЗАДАНИЕ 9 FILTER

const filt = [-1,-2,-3,-4,-5,0,1,2,3,4,5]

const filtt = filt.filter(elem => elem > 0)

console.log(filtt)

//!ЗАДАНИЕ 10 FOREACH

const frch = ['Aртур','Айгерим','Арген']

const newfrch = frch.forEach(elem => console.log('Привет,' + elem))

//! ЗАДАНИЕ 11 REDUCE

const red = [1,2,3,4,5]

const redu = red.reduce((acer,pop) => {
    return acer * pop
})

console.log(redu)

//! ЗАДАНИЕ 12 SOME

const som = ["wmccm","dcdc","cherccc","jpc,e","foxxxxxxxxxxxxx"]

function filter(somm) {
    return somm.some(elem => elem.length > 10 ? true : false )
}
console.log(filter(som))

//! ЗАДАНИЕ 13  FIND

    const fi = [1,2,3,4,5,6,7,8,9,10]

    const fin = fi.find(elem => elem % 7 === 0) || null

    console.log(fin)