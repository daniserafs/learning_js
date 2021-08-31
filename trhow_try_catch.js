//trhow 
function sayMyName(name = '') {
    if (name === '') {
        throw 'Name is required'
    }
    console.log('after error')
}

try {
    sayMyName()
} catch (e) {
    console.log(e)
}
console.log('after function')