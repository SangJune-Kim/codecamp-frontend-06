// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

// function solution(s){
//     // p 와 y 의 갯수를 저장하는 변수
//     let p = 0;
//     let y = 0;

//     for( let i = 0; i < s.length; i++ ){
//         if( s[i] === "p" || s[i] === "P"){
//             p++;
//         } else if( s[i] === "y" || s[i] === "Y"){
//             y++
//         }
//     }
//     return p === y;
// }

// function solution(s){
//     // 문자열 전체를 소문자로 변경 -> 소문자만 검증
//     s = s.toLowerCase();
//     // 문자열 전체를 대문자로 변경 -> 소문자만 검증
//     s = s.toUpperCase();

//     // p 와 y 의 갯수를 저장하는 변수
//     let p = 0;
//     let y = 0;

//     for( let i = 0; i < s.length; i++ ){
//         if( s[i] === "p" ){
//             p++;
//         } else if( s[i] === "y" ){
//             y++
//         }
//     }
//     return p === y;
// }

// function solution(s){
//     // p 와 y 의 갯수를 저장하는 객체
//     const check= {};
//     s.toLowerCase() // 1. 소문자로 변환
//         .split("") // 2. 배열로 변환
//         .forEach( str => { // 3. 배열 메서드인 forEach 사용
//             console.log(str, check)
//             check[ str ] === undefined // 객체에 해당 키값이 없는지 검증
//                 ? check[ str ] = 1 // 없다면 초기값을 1로 지정
//                 : check[ str ]++; // 있다면 기존 값에 1을 더한다.
//     })
//         return check.p === check.y
// }

// // forEach, map의 차이점 => 리턴 값이 없다.
// // forEach는 리턴을 넣어도 undefined 로 가져온다.
// // forEach는 상수, 변수 값에 저장하면 안돼