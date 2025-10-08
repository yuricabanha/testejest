const soma = require('./soma');

describe('Testes para a função de soma', ()=>{
    test('adds 1 + 2 to equal 3', ()=>{
        expect(soma(1,2)).toBe(3);
    });
    
    //Possivel de usar em liguagens mais modernas como o Javascript 
    test('Deve retornar erro ao somar a + 3', ()=>{
        expect(soma('a',3)).toBe('Erro')
    })

    test('Deve retornar erro ao somar a + 3', ()=>{
        expect(soma(1,'b')).toBe('Erro')
    })    

    //Usado em linguagens mais antigas e não modernas 
    test('Deve retornar erro ao somar a + 3', ()=>{
        expect(soma('a',3)).toBeUndefined()
    })
});