// Julia Nelson 
// CS 546 - A
// Lab 1
// "I pledge my honor that I have abided by the Stevens Honor System."

// prime number boolean function - helper
function prime(keyName){
    if (keyName == 0) {
        return false;
        //outputObj[keyName] = prime; 
    }
    if (keyName == 1) {
        return false;
        //outputObj[keyName] = prime;
    }
    if (keyName == 2) {
        return true;
        //outputObj[keyName] = prime;
    }
    if (keyName > 2){
        for( let i = 2; i < keyName; i++){   
            if (keyName % i == 0) {
                return false;
                //outputObj[keyName] = prime;
                }
        }
        return true;    // don't need else 
    }
};


const questionOne = function questionOne(arr = []) {
    
    let outputObj = {};     // empty object 
    for (let i = 0; i < arr.length; i++) {          // ERROR WITH LENGTH.. changed parameter to arr = [] (Slack)
            let keyName = arr[i];           
            outputObj[keyName] = prime(keyName);        // push onto object as keyName : false/true
        }

    return outputObj;       // return object
    };
    



// sum of squares -> raised to power of 5 -> sqrt() it -> return that val (2 dec max)
// empty array returns 0
        const questionTwo = function questionTwo(arr) {
            if (arr.length === 0) { return 0 }
            else{
                let Array1 = arr;
            // sum of squares -> raised to power of 5 -> sqrt() it -> return that val (2 dec max)
                let sum = 0;
                for (let i = 0; i < Array1.length; i++) {
                    sum = sum + (Array1[i] * Array1[i]);    // sum of squares result
                }
                const power5 = Math.pow(sum,5);         // raise sum^5
                const value = Math.sqrt(power5).toFixed(2); // sqrt(ans)
                return  value;
            }
        };






        // returns object  with 
        //# constants # vowels # nums # spaces # punctuations # special char in string format
        // y is not a vowel
        // {constants:2, vowels:10, .... }
        // empty string return 0 for each key
        const questionThree = function questionThree(text) {
            //object 
            let str = text;
            let Obj1 = {};
            let consonants = 0;
            let vowels = 0;
            let numbers = 0;
            let spaces = 0;
            let punctuations = 0;
            let specialCharacters = 0;
            if(str.length == 0){
                Obj1['consonants'] = consonants; 
                Obj1['vowels'] = vowels;
                Obj1['numbers'] = numbers;
                Obj1['spaces'] = spaces;
                Obj1['punctuations'] = punctuations;
                Obj1['specialCharacters'] = specialCharacters;
                return Obj1;
            }
            for (let i = 0; i < str.length; i++){ // CASE SENSITIVITY? - ..can make more efficient 
                //consonants
                if(str[i] == ('b')||str[i] == ('c')||str[i] == ('d')||str[i] == ('f')||str[i] == ('g')||str[i] == ('h')||str[i] == ('j')||str[i] == ('k')||str[i] == ('l')||str[i] == ('m')||str[i] == ('n')||str[i] == ('p')||str[i] == ('q')||str[i] == ('r')||str[i] == ('s')||str[i] == ('t')||str[i] == ('v')||str[i] == ('w')||str[i] == ('x')||str[i] == ('y')||str[i] == ('z') || str[i] == ('B')||str[i] == ('C')||str[i] == ('D')||str[i] == ('F')||str[i] == ('G')||str[i] == ('H')||str[i] == ('J')||str[i] == ('K')||str[i] == ('L')||str[i] == ('M')||str[i] == ('N')||str[i] == ('P')||str[i] == ('Q')||str[i] == ('R')||str[i] == ('S')||str[i] == ('T')||str[i] == ('V')||str[i] == ('W')||str[i] == ('X')||str[i] == ('Y')||str[i] == ('Z') ){
                    consonants = consonants + 1;
                }
                //vowels
                if (str[i] == ('a')||str[i] == ('e')||str[i] == ('i')||str[i] == ('o')||str[i] == ('u')||str[i] == ('A')||str[i] == ('E')||str[i] == ('I')||str[i] == ('O')||str[i] == ('U')){
                    vowels = vowels + 1;
                }
                //numbers
                if (str[i] == ('1')||str[i] == ('2')||str[i] == ('3')||str[i] == ('4')||str[i] == ('5')||str[i] == ('6')||str[i] == ('7')||str[i] == ('8')||str[i] == ('9')||str[i] == ('0')){
                    numbers = numbers + 1;
                }
                //spaces
                if (str[i] == (' ')){
                    spaces = spaces + 1;
                }
                //punctuation
                if (str[i] == ('.')||str[i] == (',')||str[i] == ('?')||str[i] == ('!')||str[i] == ("'")||str[i] == ('"')||str[i] == (':')||str[i] == (';')||str[i] == ('-')||str[i] == ('(')||str[i] == (')')||str[i] == ('{')||str[i] == ('}')||str[i] == ('[')||str[i] == (']')){
                    punctuations = punctuations + 1;
                }
                //special char
                if (str[i] == ('@')||str[i] == ('#')||str[i] == ('$')||str[i] == ('%')||str[i] == ('^')||str[i] == ('&')||str[i] == ('*')||str[i] == ('<')||str[i] == ('>') ||str[i] == ('_')||str[i] == ('=')||str[i] == ('+')||str[i] == ('`')||str[i] == ('~')||str[i] == ('/')||str[i] == ('|')||str[i] == ('\\')){
                    specialCharacters = specialCharacters + 1;
                }
            }
            Obj1['consonants'] = consonants;
            Obj1['vowels'] = vowels;
            Obj1['numbers'] = numbers;
            Obj1['spaces'] = spaces;
            Obj1['punctuations'] = punctuations;
            Obj1['specialCharacters'] = specialCharacters;
            return Obj1;
        };


        const questionFour = function questionFour(num1, num2, num3) {
            // calculates monthy payment of loan
            // 1st = loan amount
            // 2nd = interest rate ... given as 3.11(%) = 0.0311
            // 3rd = # years for term... given 5 => 5*12 = 60 monthly payments
            // look up formula for calculating monthly payment
        // https://www.wikihow.com/Calculate-Loan-Payments
            // M = P * (J / (1-(1+J)^(-N)))
            // M = payment amount
            // P = principal, meaning the amount of money borrowed
            // J = effective interest rate. Note that this is usually not the annual interest rate; see below for an explanation.
            // N = total number of payments
            const P = num1;  // amount loan
            const N = (12 * num3); // # payments
            const J = (num2 / 100) /12; // rate
            let x = (1+J);
            let y = 1 - (Math.pow(x,(-N)));
            const M = P * (J/y);
            return M.toFixed(2);
        };

        module.exports = {
            firstName: "JULIA",
            lastName: "NELSON",
            studentId: "10432982",
            questionOne,
            questionTwo,
            questionThree,
            questionFour
        };
