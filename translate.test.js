const {translate} = require('./translate.js');

describe('translate', () => {
    // strings that start with vowels
    test('apple returns appleay', () => {
        expect('apple').toEqual('appleay');
    })
    test('egg returns eggay', () => {
        expect('egg').toEqual('eggay');
    })
    // tests capital letters are converted to lower case
    test('ApPlE returns appleay', () => {
        expect('ApPlE').toEqual('appleay');
    })
    test('EgG', () => {
        expect('EgG').toEqual('eggay');
    })
    // test for the first letter being a consonant
    test('Cat returns atcay', () => {
        expect('Cat').toEqual('atcay');
    })
    test('Bat returns atbay', () => {
        expect('Bat').toEqual('atbay');
    })
    // test for the first two letters being a consonant
    test('shin returns inshay', () => {
        expect('shin').toEqual('inshay');
    })
    test('green to return ', () => {
        expect('green').toEqual('eengray');
    })
    // test for the first three letters being consonants
    test('splice to return icesplay', () => {
        expect('splice').toEqual('icesplay');
    })
    // test for first three letters being consonants and uppercase letters
    test('cHrIsT to return istchray', () => {
        expect('cHrIsT').toEqual('istchray');
    })
    // test for numbers to count as consonants
    test('fr4ak to return akfr4ay', () => {
        expect('fr4ak').toEqual('akfr4ay');
    })
})




/*

Start with the simplest cases and work up, for example…
words that start with vowels… write tests for several different starting vowels
words that start with vowels with capital letters are converted to lowercase
words that start with one consonant… write tests for the second letter being several different vowels
words that start with two consonants
words that start with more consonants
*/