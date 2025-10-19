//큐를 사용하여 구현
//큐에 첫번째 작업부터 한개씩 삽입
//다 넣은 이후 첫번째 작업을 꺼낼때 스피드로 소요일수를 계산하고 한 개 카운트
//이후 일정이 안되는 작업이 나올때까지 반복

function solution(progresses, speeds) {
    const answer = [];
    
    class Queue {
      constructor() {
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
      }
      
      enqueue(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++;
      }
    
      dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
      }
    
      size() {
        return this.tailIndex - this.headIndex;
      }
    
      peek() {
        return this.items[this.headIndex];    
      }
    
      isEmpty() {
        return this.tailIndex === this.headIndex;    
      }
    }

    const queue = new Queue();
    for(let i =0;i<progresses.length;i++ ){
      const progress = progresses[i];
      const speed = speeds[i];
      let result = Math.ceil((100-progress)/speed);
      queue.enqueue(result);
    }
    
    while(!queue.isEmpty()){
      const currMax = queue.dequeue();
      let cnt = 1;
      while(true){
        const nextMax = queue.peek();
        if(currMax>=nextMax){
          cnt++;
          queue.dequeue();
        }else {
          answer.push(cnt)
          break;
        }
      }
    }  
    
 
    return answer;
}