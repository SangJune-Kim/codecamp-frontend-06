import {Question, Wrapper, Menu, Profile, Head, Background,Look,Header,Hr, MenuText, FaqText, QuestionText, Link, LinkSet,InnerBox, ProfileText,My} from '../../../styles/01-faq'

export default function FAQpage(){



    return(
            <Wrapper>
            <Look><img src="../../../search.png"></img></Look>
                <Head>
                    <Header>마이</Header>
                        <Profile>
                        <img src ='../../../face.png' width={60} height={60}/>
                        <ProfileText>임정아</ProfileText>
                        <img src ='../../../arrow-right.svg' width={40} height={40}/>
                        </Profile>
                </Head>
                <Menu>
                    <MenuText>공지사항</MenuText>
                    <MenuText>이벤트</MenuText>
                    <FaqText>FAQ</FaqText>
                    <MenuText>Q&A</MenuText>   
                </Menu>
                    <InnerBox> 
                <Question>
                    Q.01
                    <QuestionText>리뷰 작성은 어떻게 하나요?</QuestionText>
                </Question>
                <img src='../../../arrow.svg' width={60} height={60}/>         

                    </InnerBox> 
                <InnerBox> 
                    <Question>Q.02
                        <QuestionText>리뷰 수정/삭제는 어떻게 하나요?</QuestionText>
                    </Question>
                        <img src='../../../arrow.svg' width={60} height={60}/>         
                </InnerBox> 
                    <InnerBox> 
                <Question>
                    Q.03
                    <QuestionText>아이디/비밀번호를 잊어버렸어요.</QuestionText>
                </Question>
                <img src='../../../arrow.svg' width={60} height={60}/>         
                </InnerBox> 

                   <InnerBox> 
                <Question>
                    Q.04
                    <QuestionText>회원탈퇴를 하고싶어요.</QuestionText>
                </Question>
                <img src='../../../arrow.svg' width={60} height={60}/>         
                </InnerBox> 
                     <InnerBox> 
                <Question>
                    Q.05
                    <QuestionText>출발지 설정은 어떻게 하나요?</QuestionText>
                </Question>
                <img src='../../../arrow.svg' width={60} height={60}/>         
                </InnerBox> 

                 <InnerBox> 
                <Question>
                    Q.06
                    <QuestionText>비밀번호를 변경하고 싶어요.</QuestionText>
                </Question>
                <img src='../../../arrow.svg' width={60} height={60}/>         
                </InnerBox> 

                <Link>
                <LinkSet>
                <img src="../../../home.png" width={58} height={58}></img>
                홈
                </LinkSet>
                <LinkSet>
                <img src="../../../location.svg"></img>
                잇츠로드
                </LinkSet>
                <LinkSet>
                <img src="../../../heart.svg"></img>
                마이찜
                </LinkSet>
                <LinkSet>
                <img src="../../../man.svg"></img>
                <My>마이</My>
                </LinkSet>
                </Link>
            </Wrapper>
                



    )



}