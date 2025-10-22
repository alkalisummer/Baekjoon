function solution(clothes) {
    
    const clothesCntMap = new Map();
    for(const [name, type] of clothes){
      clothesCntMap.set(type, (clothesCntMap.get(type) ||0 )+1)      
    }
    
    let answer = 1;
    for(const cnt of clothesCntMap.values()){
      answer *= (cnt + 1); 
    }
    
    return answer - 1;
}