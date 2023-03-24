function solution(n) {
    let plus = 0;
    for(let a = 1; a<=n; a++) {
        if(a%2 == 0) {
            plus = plus + a
        }
    }
    return plus
}