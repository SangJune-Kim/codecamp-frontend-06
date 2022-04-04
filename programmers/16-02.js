// 하샤드 수
function solution(x) {
  // 자리 수의 합 10이면 1, 0 , 나누어 떨어진다 = 나머지가 0이다.
  const sumX = x
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));

  return x % sumX === 0 ? true : false;
}
