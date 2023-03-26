function solution(numbers) {
    let answer = [];
    for(let a = 0; a<numbers.length; a++) {
        answer.push(numbers[a] * 2)
    }
    return answer;
}