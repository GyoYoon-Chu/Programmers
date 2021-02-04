function solution(dartResult) {
    var result = [];
    var temp;

    for (var i = 0; i < dartResult.length; i += 2) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9) {
            if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
                temp = 10;
                i++;
            }
            else {
                temp = parseInt(dartResult[i]);
            }

            if (dartResult[i + 1] == 'D') {
                temp *= temp;
            }
            else if (dartResult[i + 1] == 'T') {
                temp *= temp * temp;
            }
            result.push(temp);

            if (dartResult[i + 2] == '*') {
                if (result.length == 1) {
                    result[result.length - 1] *= 2;
                }
                else {
                    result[result.length - 1] *= 2;
                    result[result.length - 2] *= 2;
                }
                i++;

            }
            else if (dartResult[i + 2] == '#') {
                result[result.length - 1] *= -1;
                i++;
            }
        }
    }
    return result.reduce((a, b) => a + b);
}

console.log(solution("10D2S3T*"));