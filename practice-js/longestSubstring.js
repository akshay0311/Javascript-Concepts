function longestSubstring(string) {
    let occcurence = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] in occcurence) {
            occcurence[string[i]] +=1;
        }
        else {
            occcurence[string[i]] = 1;
        }
    }
    console.log(occcurence)
    
    let longestLen = 0;
    let len = 0;
    let endIndex = 0;
    let flag = false;
    for (let i = 0; i < string.length; i++) {
        if (occcurence[string[i]] > 1) {
            if (len > longestLen) { 
              endIndex = i-1;
              longestLen = len;
            }  
           len = 0;
        }
        else {
            len = len + 1;
            flag = true;
        }
    }
    
    if (flag === false)
        return 0;

    if (len > longestLen) { 
        endIndex = string.length-1;
        longestLen = len;
    } 
    
    return {start: endIndex-longestLen+1, end: endIndex};    
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {

  // Number of test cases
  const t = parseInt(input[0]);
  let index = 1;
  let testCases = [];

  for (let i = 0; i < t; i++) {
    // Length of the string of integers
    const n = parseInt(input[index]);
    index++;

    // String of integers for this test case
    const integers = input[index].split(' ').map(Number);
    index++;

    // Store the test case data
    testCases.push({
      length: n,
      integers: integers
    });
  }
  
  for (let input of testCases) {
    let obj = longestSubstring(input.integers);
    if (typeof(obj) === "object") console.log(obj.start+1,obj.end+1); 
    else console.log(0);
  }
})