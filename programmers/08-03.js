// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

// function solution(n) {
//     let answer = 0;
    
//     for( let i = 1; i <= n; i++){
//         if(n % i === 0 ) {
//         answer += i;
//         }
//     }
//     return answer;
// }

//약수는 최대 본 값의 반이니까 밑에 방법으로 최소화 가능
// function solution(n) {
//     let answer = n;
    
//     for( let i = 1; i <= n/2; i++){
//         if(n % i === 0 ) {
//         answer += i;
//         }
//     }
//     return answer;
// }

// reduce, fill 사용 이런 방식 자주 사용하니까 익숙해져야함

// function solution(n) {
//     const answer = new Array( n )
//                     .fill( 1 )
//                     .reduce((acc, cur, i) =>{
//                         return n % (cur + i) === 0
//                         // 약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고
//                         ? acc + (cur + i)
//                         // 약수가 아니라면, 더하지 않고 그냥 다음으로 넘겨준다.
//                         : acc
//                     },0)
//     return answer;
// }
