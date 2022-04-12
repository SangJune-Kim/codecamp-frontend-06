// 모의고사

// 첫번째 내 풀이 -> 틀렸음
// function solution(answers) {
//     // 각 수포자의 정답이 담긴 배열, 진짜 정답의 배열 같은 인덱스의 값을 비교?
//     // return 오름차순
//     // 1번의 정답수 , 2번의 정답수, 3번의 정답수 비교? 셋이 다 같으면 answer에 1,2,3 넣고
//     // 젤 많이 맞춘 사람이 있으면 걔만 넣어 근데 많이 맞추사람 여럿이면 오름차순 넣어
//     let rating1 = []
//     let rating2 = []
//     let rating3 = []
//     const arr1 = [1,2,3,4,5];
//     const arr2 = [2,1,2,3,2,4,2,5];
//     const arr3 = [3,3,1,1,2,2,4,4,5,5];
//     let answer = [];

//     for(let i = 0; i < answers.length; i++){
//         if(answers[i] === arr1[i % 5])rating1.push(1)
//         if(answers[i] === arr2[i % 8])rating2.push(1)
//         if(answers[i] === arr3[i % 10])rating3.push(1)
//     }
//     const rating=[rating1.length, rating2.length, rating3.length]
//     const topRating= Math.max(...rating)
//     if(rating[0] === rating[1] && rating[1] === rating[2]) {
//         answer.push(1,2,3)
//     }else{
//         for(let i = 0; i < rating.length; i++){
//         if(rating[i] === topRating) answer.push(i + 1)
//     }
//     }
//     return answer
// }

// 수업 풀이 1
// const answerTable =[
//     //1번 수포자가 찍는 방식
//         [1, 2, 3, 4, 5],
//     //2번 수포자가 찍는 방식
//         [2, 1, 2, 3, 2, 4, 2, 5],
//     //3번 수포자가 찍는 방식
//         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     ]

//     function solution(answers) {
//         // 학생들의 점수를 저장하는 배열
//         const answer = [0,0,0]

//         for(let i = 0; i< answers.length; i++){
//             for( let l = 0; l< answerTable.length; l++){
//                 if( answerTable[l][i % answerTable[l].length ]=== answers[i]){
//                     answer[l]++;
//                 }
//             }
//         }

//         const biggest = Math.max( ...answer);
//         const result = [];
//         for(let i = 0; i < answer.length; i++){
//             if(answer[i]===biggest){
//                 result.push(i+1)
//             }
//         }
//     return result;

//     }

// 풀이 2 메서드
// const answerTable =[
//     //1번 수포자가 찍는 방식
//         [1, 2, 3, 4, 5],
//     //2번 수포자가 찍는 방식
//         [2, 1, 2, 3, 2, 4, 2, 5],
//     //3번 수포자가 찍는 방식
//         [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     ]

//     function solution(answers) {
//        const scoreList = answerTable.map((el,i)=>{
//            // 찍은 번호가 정답과 일치하는지 확인하고 학생들의 점수를 합산
//            const score = answers.reduce((acc,cur,l)=>{
//                return acc + ( el[l % el.length]===cur ? 1: 0)
//            },0)
//            return {student : i +1, score}
//        })
//        const biggest = Math.max(...scoreList.map(el =>{
//            return el.score
//        }))
//         return scoreList.filter(el => {
//             return el.score === biggest
//         }).map((el)=> el.student)
//     }
