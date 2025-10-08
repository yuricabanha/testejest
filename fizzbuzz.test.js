const fizzbuzz = require('./fizzbuzz');

describe('Testes para a função FizzBuzz', ()=>{
    test('Entrada(3). Saida Esperada = Fizz', ()=>{
        expect(fizzbuzz(3)).toBe('Fizz')
    })
    test('Entrada(5). Saida Esperada = Buzz', ()=>{
        expect(fizzbuzz(5)).toBe('Buzz')
    })
    test('Entrada(15). Saida Esperada = FizzBuzz', ()=>{
        expect(fizzbuzz(15)).toBe('FizzBuzz')
    })
    test('Entrada(1). Saida Esperada = 1', ()=>{
        expect(fizzbuzz(1)).toBe(1)
    })
    test('Entrada("a"). Saida Esperada = Erro', ()=>{
        expect(fizzbuzz('a')).toBe('Erro')
    })
});