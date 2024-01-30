const citiesRussian = ["Москва","Новосибирск","Казань"]
const citiesEurope = ["Берлин","Прага","Париж"]

const citiesRussianWidthPopulation = {
    moscow: 20,
    novosibirsk: 3,
    kazan: 5
}
const citiesEuropeWidthPopulation = {
    berlin: 10,
    parish: 2,
    prague: 5
}

// Spread
const allCities = [...citiesRussian, ...citiesEurope]

const allWidthPopulation = {...citiesRussianWidthPopulation, ...citiesEuropeWidthPopulation}

// Rest
const array = [1,2,3,4,5]
function sum(...rest) {
    return rest.reduce(function (total, next) {
        return total + next
    }, 0)
}
// Spread!!!
console.log(sum(...array))

// task

Math.max(array) // NaN
Math.max(...array)
Math.max.apply(null, array)


const divs = document.querySelectorAll("div")
const nodes = [...divs]

console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

// spread - [1,2,3,4,5] -> 1,2,3,4,5
// rest - заберает остаток