function translate(string) {
    // set all characters to lowercase
    string = string.toLowerCase();
    // store an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // if the first letter is a vowel
    if (vowels.includes(string.charAt(0))) {
        // just add way on the end
        return `${string}way`
    } else {
        // look for the first vowel
        let consonantSubString = '';
        // loop for every character in the string
        for (let i = 0; i < string.length; i++) {
            // if the character at this index is a vowel
            if (vowels.includes(string.charAt(i))) {
                // create the translation
                string = `${string.slice(i)}${consonantSubString}ay`
                // I'm done
                break;
            } else {
                // the letter is a consanat, add it to the sub string
                consonantSubString += string.charAt(i);
            }
        }
        return string;
    }
}
module.exports = {
    translate
}