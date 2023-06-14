let length = prompt('Insert array lenght', 'number')
const array = []
i = 0
while (i < length) {
    let elm = prompt('Please insert', i, 'element of array')
    if (isNaN(elm)) {
        alert('Please use only numbers as array elements')
    } else {
        array.push(elm)
        i++
    }
}
console.log(array)  
console.log('Відсортувати масив за зростанням.', array.sort(function (a, b) { return a - b }))
array.splice(2, 3)
console.log('Видалити елементи з масиву з 2 по 4 (включно)', array)

let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
res = 0
res1 = 0
// Знайти суму та кількість позитивних елементів.
for (i in arr) {
    if (arr[i] > 0) {
        res += arr[i]
        res1 += 1
    }
}
console.log('Сума позитивних елементів: ', res, 'кількість позитивніх елементів:', res1)

// Знайти мінімальний елемент масиву та його порядковий номер.
res = 0
for (i in arr) {
    if (arr[res] > arr[i]) {
        // console.log(arr[res],'>', arr[i])
        res = i
    }
}
console.log('Мінімальний елемент масиву:', arr[res], 'з індексом:', res)
// Знайти максимальний елемент масиву та його порядковий номер.
max = 0
for (i in arr) {
    if (arr[max] < arr[i]) {
        // console.log(arr[res],'<', arr[i])
        max = i
    }
}
console.log('Максимальний елемент масиву:', arr[max], 'з індексом:', max)
// Визначити кількість негативних елементів.
res = 0
for (i in arr) {
    if (arr[i] < 0) {
        res += 1
    }
}
console.log('Кількість негативних елементів', res)
// Знайти кількість непарних позитивних елементів.
negative_array = []
positive_array = []
unique_positive_array = []
non_unique = []

for (i in arr) {
    if (arr[i] > 0) {
        positive_array.push(arr[i])
    } else if(arr[i] < 0) {
            negative_array.push(arr[i])
    }
}
y = positive_array.length

let positive = positive_array.slice()
for (let i = 0; i < y; i++) {
    check = positive_array.shift()
    if (!(positive_array.includes(check)) && !(non_unique.includes(check))) {
        unique_positive_array.push(check)
    } else {
    non_unique.push(check)
    }
}
console.log('Кількість непарних елементів', unique_positive_array, unique_positive_array.length)
// Визначити кількість парних позитивних елементів.
console.log('Кількість парних позитивних елементів', non_unique, non_unique.length)
// Знайти суму парних позитивних елементів.
summ = 0
for (i in non_unique) {
    summ += non_unique[i]
}
console.log('Сума парних позитивних елементів', summ)
// Знайти суму непарних позитивних елементів.
summ = 0
for (i in unique_positive_array) {
    summ += unique_positive_array[i]
}
console.log('Сума непарних позитивних елементів', summ)
// Знайти добуток позитивних елементів.
mult = 0
for (let i = 0; i < y - 1; i++) {
    mult += positive[i] * positive[i + 1]
    i += 1
}
console.log('Добуток позитивних елементів', mult)
// Знайти найбільший серед елементів масиву, решту занулити.
for (i in arr) {
    if (arr[i] != arr[max]) {
        delete arr[i]
    }
}
console.log(arr)


