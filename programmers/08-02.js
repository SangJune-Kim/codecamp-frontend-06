// // str = "abc";

// // Number(str)
// // 0/0

// // //NaN
// // // Not a Number(숫자가 아니다.)

// let str = "123";


// isNaN( "b123");
// Number.isNaN(Number("b123"))

// isNaN( "0/0" );
// Number.isNaN( 0/0 )


// //1. 숫자가 맞는지를 검증 === NaN 값이 맞는지를 검증
// //2. 숫자가 맞다면 (NaN 값이 아니라면) false, 
// //   숫자가 아니라면 (NaN 값이 맞다면) true
// //3. 숫자 타입으로 변환된다.


// //Number.isNaN

// //1. 숫자가 맞는지를 검증, 들어오는 인자가 숫자 타입이여야만 하고
// //   결과가 NaN 값이 맞는지를 검증
// //2. isNaN 보다 좀 더 엄격하게 NaN 값을 검증


// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true


// function solution(s) {
//     if(s.length !== 4 && s.length !== 6){
//         return false;
//     }
//     for( let i = 0; i < s.length; i++){
//         if ( isNaN(s[i]) === true){
//             return false;
//         }
//     }
        
//     return true;
//     // var answer = true;
//     // return answer;
// }

// function solution(s) {
//     if(s.length !== 4 && s.length !== 6){
//         return false;
//     }

//     const answer = s.split("")
//                     .filter( num => {
//                         //데이터가 숫자가 아닌 문자일 경우만 남긴다.
//                         //isNaN 의 결과가 true 값일 경우 (NaN 값인 경우)
//                         return isNaN( num ) === true 
//                     })
//     console.log(answer)
//     return answer.length === 0
// }
