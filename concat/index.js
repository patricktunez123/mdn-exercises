// Don't use concat() because of the perfomance issues
// use + OF += instead

const text1 = 'hello'
const text2 = 'world'

console.log(text1.concat(', ', text2))

// using + wich is good for perfomance

console.log(text1 + ' ' + text2)
