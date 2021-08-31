/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 e 89   - B
* entre 70 e 79   - C
* entre 60 e 69   - D
* menor que 60    - F

*/

function getGrade(grade) {
    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade >= 80 && grade <= 89
    let gradeC = grade >= 70 && grade <= 79
    let gradeD = grade >= 60 && grade <= 69
    let gradeF = grade < 60 && grade >= 0

    let finalGrade;

    if (gradeA) {
        finalGrade = "A"
    } else if (gradeB) {
        finalGrade = "B"
    } else if (gradeC) {
        finalGrade = "C"
    } else if (gradeD) {
        finalGrade = "D"
    } else if (gradeF) {
        finalGrade = "F"
    } else {
        finalGrade = "Nota inválida"
    }
    return finalGrade
}

console.log(getGrade(-1))
console.log(getGrade(10))
console.log(getGrade(61))
console.log(getGrade(75))
console.log(getGrade(84))
console.log(getGrade(94))
console.log(getGrade(110))