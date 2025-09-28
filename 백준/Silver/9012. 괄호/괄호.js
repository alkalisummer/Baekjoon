const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cnt = Number(input[0]);

for (let i = 1; i <= cnt; i++) {
  let stack = [];
  let bracketStr = input[i];
  let ok = true;
  for (let j = 0; j < bracketStr.length; j++) {
    if (bracketStr[j] === '(') {
      stack.push('(');
    } else {
      if (stack.length === 0) {
        ok = false;
        break;
      }
      stack.pop();
    }
  }
  console.log(ok && stack.length === 0 ? 'YES' : 'NO');
}
