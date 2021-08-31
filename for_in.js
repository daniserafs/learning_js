// for...in
let person = {
    name: 'RM',
    age: 25,
    height: 186
}

for (let property in person) {
    console.log(property)
    console.log(person[property])

}