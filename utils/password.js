/**
 * Generates an easy to remember password
 * This will be based on that the odd characters are vowels
 */
exports.generateMemorizablePassword = function (length) {
    length = length || 8;
    var password = '';

    var consonants = "bcdfghjklmnpqrstvwxyz".split('');
    var vowels = "aeiou".split('');

    for (var i = 1; i< length; i++) {
        // Generate a number between 1 and 255
        var randNumber = parseInt(Math.random() * 255 + 1);

        // Even is a vowel
        if (i % 2 == 0) {
            password += vowels[randNumber % vowels.length];
        }
        // Odd is a consonant
        else {
            password += consonants[randNumber % consonants.length];
        }
    }

    return password;
};
