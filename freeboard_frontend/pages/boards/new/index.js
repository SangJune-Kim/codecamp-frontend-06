import { Background, Box, Head, Header, HeaderBox, HeadText, Wrapper,HeadBox, ContentsBox, AddressNumber, AddressSearch, Address, BottomBox, Picture, PictureBox, Select, SelectYoutube, SelectPicture, SelectBox, Register, RegisterButton  } from '../../../styles/NewBoards'

export default function NewBoards() {
    // 여기는 자바스크립트 쓰는 곳//

    return (
        //html 쓰는곳 //
       <Background>
           <Wrapper>
               <Header>게시물 등록</Header>

               <HeaderBox>

               <Head>
                   <HeadText>작성자</HeadText> 
                   <Box type="text" placeholder='이름을 적어주세요.'/>
               </Head>

               <Head>
                   <HeadText>비밀번호</HeadText>
                   <Box type="text" placeholder='비밀번호를 입력해주세요.'/>
               </Head>


               </HeaderBox>

               <Head>
                   <HeadText>제목</HeadText>
                   <HeadBox type="text" placeholder='제목을 작성해주세요.'/>
               </Head>

               <Head>
                   <HeadText>내용</HeadText>
                   <ContentsBox type="text" placeholder='내용을 작성해주세요.'/>
               </Head>

               <HeadText>주소</HeadText>
                <Address>
                    <AddressNumber type="text" placeholder='07250'/>
                    <AddressSearch>우편번호 검색</AddressSearch>
                </Address>
                   <HeadBox type="text"/><br></br>
                   <HeadBox type="text"/><br></br>

                    <Head>
                   <HeadText>유튜브</HeadText>
                   <HeadBox type="text" placeholder='링크를복사해주세요.'/>
                    </Head>
                <BottomBox>
                    <HeadText>사진첨부</HeadText>
                    <PictureBox>
                    <Picture>
                        <p>➕</p>
                        <p>Upload</p>
                    </Picture>   
                    <Picture>
                        <p>➕</p>
                        <p>Upload</p>
                    </Picture>
                    <Picture>
                        <p>➕</p>
                        <p>Upload</p>
                    </Picture>
                    </PictureBox>

                        <HeadText>메인 설정</HeadText>
                    <SelectBox>
                        <SelectYoutube>
                            <Select type="radio" name="select"/>유튜브
                        </SelectYoutube>
                        <SelectPicture>
                            <Select type="radio"name="select"/>사진
                        </SelectPicture>
                    </SelectBox>
                    
                </BottomBox>
                <Register>
                    <RegisterButton>등록하기</RegisterButton>


                </Register>



           </Wrapper>
       </Background>
  )
}