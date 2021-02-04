function solution(n, arr1, arr2) {
    var resultList = [];

    for (var i = 0; i < n; i++) {
        var result = "";
        var c = (arr1[i] | arr2[i]).toString(2);
        if (c.length < n) {
            var s = "";
            for (var j = 0; j < n - c.length; j++) {
                s += "0";
            }
            c = s + c;
        }
        for (var j = 0; j < n; j++) {
            if (c[j] === '1') {
                result += '#';
            }
            else {
                result += ' ';
            }
        }
        resultList[i] = result;
    }
    return resultList;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

//야 이도현 저거 함수 ㅅㅂ 족같으니까 클래스형으로 바꿔줘~
