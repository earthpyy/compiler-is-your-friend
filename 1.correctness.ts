/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases.
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string.

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

const scriptAt = (word: string): number => {
    return word.indexOf('Script');
}

console.log(scriptAt('TestScript'));  // print `4` if error below does not occur
console.log(scriptAt(134));           // compilation error

/*
Answers:
1) By specify type of function parameter to `string`
2) Learned how to specify type on function parameter
*/
