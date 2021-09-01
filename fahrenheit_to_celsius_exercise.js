/* ### Celsius to Fahrenheit
    
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/


// tranformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C') // .toUpperCase() is here if I type the degree 'c' in lower case; .includes() is here so the code understands when someone typed the degree, in this case it will be Celsius for c
    const fahrenheitExists = degree.toUpperCase().includes('F') // regular expressions: extracts numbers from any string

    // error flow: now if the person type any other letter than C or F it will give en error
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Degree unidentified')
    }

    let updatedDegree = Number(degree.toUpperCase().replace('F', '')); // to get the number from the string we are using .replace('F', '') to am empty string and we will transform the string into a number

    // stantard formula/flow transforms Fahrenheit to Celsius
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9 // arrow function: short and return the value at once???  
    let degreeSign = 'C' // since the standard is F -> C, we will use the string 'C' for the final value


    // alternative formula/flow transforms Celsius to Fahrenheit
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9 / 5 + 32 // in arrow functions with only one argument there's no need to use parenthesis  
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign // Q: what's the point of concatenating with 'C' when i have a variable degreeSign??? - A: just concatanate with degreeSign!!! 
}
// now let's see wether or not it works
try {
    transformDegree('50Z'); // why can't i see the following trys after an error is caught?
    console.log(transformDegree('50F'));
    console.log(transformDegree('50C'));
    console.log(transformDegree('80F'));
    console.log(transformDegree('40C'));
    console.log(transformDegree('110F'));

} catch (error) {
    console.log(error.message); // when using .message it will only inform 'Degree unidentified' without .message it shows: "Error: Degree unidentified at transformDegree (scripts.js:19) at scripts.js:25"
}