export default function TypescriptPage(){
    // 타입추론
    let aaa = "안녕하세요"
    // aaa = 3

    // 타입명시
    // let bbb: string = "반갑습니다."

    // 문자타입
    let ccc: string
    ccc = " 반가워요"

    // 숫자타입
    let ddd : number = 10
    // ddd = "qqq"
    
    // 불린타입
    let eee : boolean = true
    eee = false
    // eee = "false" // true로 작동한다 ""안에 문자가 들어가 있으면 true 로 반영됨

    // 배열타입
    // let fff: number[] = [1,2,3,4,5, "안녕하세요"]
    // let ggg: string[] = ["철수", "영희", "훈이", 123]
    let hhh: (number | string)[] = [1,2,3,4,5, "훈이"]  //타입스크립트에서 &, | 는 하나씩만 씀

    // 객체타입
    interface IProfile {
        name : string
        age: string | number
        school : string
        hobby?: string //있어도 좋고 없어도 좋다 라는 의미 원래는 ?가 없으면 반드시 객체 안에 데이터가 있어야함.
    }
    let profile:IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.age = "8살"
    // profile.school = 123
    
    // 함수타입
    const add = (money1:number, money2: number, unit:string): string => { //함수타입에서는 함수를 만들때 타입을 지정함
        return money1 + money2 + unit
    }
    const result = add(1000, 2000, "원")


    return <div>타입스트립트 연습하기!!</div>

}