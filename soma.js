function soma(a,b) {
    if (typeof(a) === 'number' && typeof(b) === 'number') {
        return a + b;
    } else {
        return 'Erro'
    }
}
module.exports = soma;