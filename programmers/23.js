// 숫자 문자열과 영단어
// const numbers = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// function solution(s) {
//   for (let i = 0; i < numbers.length; i++) {
//     while (s.includes(numbers[i])) {
//       console.log(s, numbers[i]);
//       s = s.replace(numbers[i], i);
//     }
//   }

//   return Number(s);
// }

// function solution(s) {
//   numbers.forEach((str,i)  => {
//      s= s.split(str).join(i)    ;
//   })
//    return Number(s)
// }

// function solution(s) {
//   // 정규표현식
//   // /(슬래시) 열고 / (슬래시) 닫고 슬래시 안에 검증하는 문자열을 추가한다.
//   // g 명령어는 전역 검색을 의미한다.

//   for (let i = 0; i < numbers.length; i++) {
//     const regExp = new RegExp(numbers[i], "g");
//     s = s.replace(regExp, i);
//   }

//   return Number(s);
// }
