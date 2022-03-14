import {MyTitle,MyEmail,Wrapper} from '../../../styles/NewBoards'

export default function AAApage() {
    // 여기는 자바스크립트 쓰는 곳//

    return (
        //html 쓰는곳 //
        <Wrapper>

            <MyTitle>
                 로그인
                 <br></br>
                 <br></br>
    
                 아이디
                 <br></br>
                <MyEmail type="text"/>
                <br></br>
                비밀번호 
                <br></br>
                <MyEmail type="text"/>
            </MyTitle>
       
        </Wrapper>
  )
}