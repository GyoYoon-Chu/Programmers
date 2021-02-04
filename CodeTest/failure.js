function solution(N, stages) {
    var answer = [];
    var result = [];
    var person = stages.length;

    for (let i = 0; i < N; i++) {
        var p = 0;
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] == i + 1) {
                p++;
            }
        }
        answer.push(p);
    }

    for (let i = 0; i < N; i++) {
        result[i] = person;
        person = person - answer[i];
        if (person == 0) {
            person = 1;
        }
    }
    for (let i = 0; i < N; i++) {
        answer[i] /= result[i];
    }
    console.log(answer);
    result = [];

    for (let i = 0; i < N; i++) {
        var s = answer.indexOf(Math.max.apply(null, answer))
        result.push(s + 1);
        answer[s] = null;
    }
    return result;
}

console.log(solution(5, [1, 2, 2, 1, 3]));