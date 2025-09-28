const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const pipe = input[0];
// const pipe = '()(((()())(())()))(())';
let openCnt = 0;
let result = 0;

for (let i = 0; i < pipe.length; i++) {
  if (pipe[i] === '(' && pipe[i + 1] === ')') {
    result += openCnt;
    ++i;
  } else if (pipe[i] === '(') {
    openCnt++;
  } else {
    openCnt--;
    result += 1;
  }
}

console.log(result);
