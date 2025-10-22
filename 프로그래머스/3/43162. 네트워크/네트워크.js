function solution(n, computers) {
    const visited = Array(n).fill(false);
    
    const dfs = (curr) => {
      visited[curr] = true;
      for(let j = 0; j < n; j++){
        if(!visited[j] && computers[curr][j] === 1){
          dfs(j)    
        }    
      }
    }
    
    let networks = 0;
    for(let i = 0; i<n; i++){
      if(!visited[i]){
          dfs(i);
          networks++;
      }
    }
    
    return networks;
}