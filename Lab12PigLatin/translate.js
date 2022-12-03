//if the work starts with a vowel

const vowels = ["a", "e", "i", "o", "u"];
const consonant= ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];


function translate(word){
    word = word.toLowerCase();
    if(vowels.indexOf(word[0]) > -1){
        return (word = word + "way");
    }

    if(consonant.indexOf(word[0]) > -1){
        const firstLet = word[0];
        if(consonant.indexOf(word[1]) > -1){
            const secondLet = word[1];
            if(consonant.indexOf(word[2]) > -1){
                const thirdLet = word[2];
                return (word = word.substring(3) + firstLet + secondLet + thirdLet + "ay");
            }
            return (word = word.substring(2) + firstLet + secondLet + "ay");
        }
        //.substring() starts the word where you want depending on what the parameter is. Parameter (1) starts on th second letter. Top = op. 
        return (word = word.substring(1) + firstLet + "ay");
    }
    

}





module.exports = translate;