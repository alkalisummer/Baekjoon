function solution(numbers, target) {
  let cnt = 0;
  const dfs = (index, sum) => {
    if(index === numbers.length){
      if(sum === target) cnt++;
        return;
    }
    dfs(index+1, sum+numbers[index])
    dfs(index+1, sum-numbers[index])
  }
  dfs(0, 0)
  return cnt;
}