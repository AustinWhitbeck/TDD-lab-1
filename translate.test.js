const { translate } = require('./translate.js');

describe('translate', () => {
    // strings that start with vowels
    test('apple returns appleway', () => {
        expect(translate('apple')).toBe('appleway');
    })
    test('egg returns eggway', () => {
        expect(translate('egg')).toBe('eggway');
    })
    // tests capital letters are converted to lower case
    test('ApPlE returns appleay', () => {
        expect(translate('ApPlE')).toBe('appleay');
    })
    test('EgG', () => {
        expect(translate('EgG')).toBe('eggay');
    })
    // test for the first letter being a consonant
    test('Cat returns atcay', () => {
        expect(translate('Cat')).toBe('atcay');
    })
    test('Bat returns atbay', () => {
        expect(translate('Bat')).toBe('atbay');
    })
    // test for the first two letters being a consonant
    test('shin returns inshay', () => {
        expect(translate('shin')).toBe('inshay');
    })
    test('green to return ', () => {
        expect(translate('green')).toBe('eengray');
    })
    // test for the first three letters being consonants
    test('splice to return icesplay', () => {
        expect(translate('splice')).toBe('icesplay');
    })
    // test for first three letters being consonants and uppercase letters
    test('cHrIsT to return istchray', () => {
        expect(translate('cHrIsT')).toBe('istchray');
    })
    // test for numbers to count as consonants
    test('fr4ak to return akfr4ay', () => {
        expect(translate('fr4ak')).toBe('akfr4ay');
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