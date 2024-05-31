function fizzbuzz(num) {
    let retorno = '';
    if(num % 3 !== 0 && num % 5 !== 0) return num;
    if(num % 3 === 0) retorno += "Fizz";
    if(num % 5 === 0) retorno += "Buzz";
    return retorno;
}

console.log(fizzbuzz(2));