function solution(n) {
    let answer = [];
    
    for(let a = 1; a<=n; a++) {
        if(a%2 == 1) {
            answer.push(a)
        }
    }
    return answer
}

