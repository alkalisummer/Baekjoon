function solution(arr) {
  const answer = [];    
  answer.push(arr[0]);
 
  for(let i=1; i<arr.length; i++){
    if(i === arr.length){
        break;
    }
    const curr = arr[i];
    const prev = answer[answer.length-1]; 
    if(curr !== prev){
      answer.push(curr)
    }  
  }
  
  return answer
}