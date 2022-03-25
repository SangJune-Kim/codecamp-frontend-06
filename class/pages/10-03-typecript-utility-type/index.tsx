export default function TypescriptPage(){
    
    interface IProfile{
        name: string   
        age: number
        school: string
        hobby?: string
    }
    // 1. Pick 타입
    type MyType1 =Pick<IProfile, "name" | "age">
    //IProfile 에서 원하는 것만 골라낸것

    // 2. Omit 타입
    type MyType2 = Omit<IProfile, "school">

    // 3. Partial 타입
    type MyType3 = Partial<IProfile>

    // 4. Required 타입
    type MyType4 = Required<IProfile>

    // 5. Record 타입
    type ZZZ = "aaa" | "qqq" | "rrr" //Union타입(합집합)
    // let apple : ZZZ 
    // apple = "qqq"
    type MyType5 = Record<ZZZ, IProfile>
    //ZZZ가 키가 되고 IProfile 이 벨류가됌


    // ======== 추가(선언병합) - type vs interface ========
    interface IProfile {
        candy: number
    }

    let profile: IProfile
    profile = {
        candy: 3,
        age: 10,
        hobby: "asdf",
        name: "124",
        school: "1244",
    }
    //위에 IProfile이랑 병합한 것


    return <div>타입스트립트 연습하기!!</div>

}