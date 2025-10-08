function fizzbuzz(a) {
    if (typeof(a)!=='number') {
        return 'Erro'
    }
    if (a%15 === 0) {
        return 'FizzBuzz'
    }
    if (a%3 === 0) {
        return 'Fizz'   
    } 
    if (a%5 === 0) {
        return 'Buzz'
    } 
    return a
}

module.exports = fizzbuzz;