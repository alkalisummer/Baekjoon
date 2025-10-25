function solution(s) {
  const len = s.length;
  let answer = s;
  for(let i=1; i<=len; i++){
    let result = ''
    let word = s.slice(0, i);
    let cnt = 1;
    for(let j=i; j<len; j+=i){
      let word2 = s.slice(j,j+i);
      if(word === word2) cnt++;    
      else {
        result += (cnt >1? String(cnt): '') +word;
        word= word2;
        cnt = 1;
      }
    }
    result+=(cnt>1? String(cnt) : '') + word
    if(result.length < answer.length){
      answer = result;
    }
  }    
    return answer.length;
}