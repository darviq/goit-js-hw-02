function findLongestWord (string = "") {
    // Write code under this line
    let longestWord = '';
    const arr = string.split(' ');
    
    for (const word of arr) {
        longestWord = word.length > longestWord.length ? word : longestWord;

        // if (word.length > longestWord.length) {
        //     longestWord = word;
        // }
    }
    
    return longestWord;
}

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'