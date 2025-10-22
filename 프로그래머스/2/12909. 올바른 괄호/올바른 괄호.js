function solution(s) {
  let answer = true;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === '(') {
      stack.push(curr);
    } else {
      if (stack.length === 0) {
        answer = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) answer = false; 
  return answer;
}