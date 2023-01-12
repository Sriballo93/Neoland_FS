
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let word= "";
    for (const item of param) {
        if (item.length > word.length) {
            word = item;
        }
    }
    return word
}

console.log(findLongestWord(avengers))