// DO NOT USE THIS IN PRODUCTION CODE

const sentence = 'This is the sentence for testing';
const index = 5;
// const minusIndex = -4;

console.log(`The char at ${index} is ${sentence.charAt(index)}`)
// console.log(`The char at ${index} is ${sentence.charAt(minusIndex)}`)


// EXAMPLE TWO
const invoice = 'invoice05'

const returnLast = (str) => {
    console.log(str.charAt(2))
    // The last char
    console.log(str.charAt(str.length - 1))
    return str.charAt(1)
}

returnLast(invoice)