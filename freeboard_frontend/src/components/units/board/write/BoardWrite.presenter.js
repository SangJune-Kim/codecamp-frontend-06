// 프레젠터 컴포넌트

import * as S from "./BoardWrite.Styles"

const BoardWriteUI = (props) => {

    return (
        //html 쓰는곳 //
        <S.Wrapper>
          <S.Header>게시물 등록</S.Header>
          <S.HeaderBox>
            <S.ProfileBox>
              <S.Head>
                <S.HeadText>작성자</S.HeadText>
                <S.Box
                  type="text"
                  placeholder="이름을 적어주세요."
                  onChange={props.onChangeWriter}
                />
                <S.ErrorBox>{props.writerError}</S.ErrorBox>
              </S.Head>
              <S.Head>
                <S.HeadText>비밀번호</S.HeadText>
                <S.Box
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={props.onChangePassword}
                />
                <S.ErrorBox>{props.passwordError}</S.ErrorBox>
              </S.Head>
            </S.ProfileBox>
            <S.Head>
                <S.HeadText>제목</S.HeadText>
                <S.TitleInput
                  type="text"
                  placeholder="제목을 작성해주세요."
                  onChange={props.onChangeTitle}
                />
                <S.ErrorBox>{props.titleError}</S.ErrorBox>
              </S.Head>
          </S.HeaderBox>
    
          <S.Head>
            <S.HeadText>내용</S.HeadText>
            <S.ContentsBox
              type="text"
              placeholder="내용을 작성해주세요."
              onChange={props.onChangeContent}
            />
            <S.ErrorBox>{props.contentError}</S.ErrorBox>
          </S.Head>
    
          <S.HeadText>주소</S.HeadText>
          <S.Address>
            <S.AddressNumber type="text" placeholder="07250" />
            <S.AddressSearch>우편번호 검색</S.AddressSearch>
          </S.Address>
          <S.HeadBox type="text" />
          <S.HeadBox type="text" />
    
          <S.Head>
            <S.HeadText>유튜브</S.HeadText>
            <S.HeadBox type="text" placeholder="링크를복사해주세요." />
          </S.Head>
          <S.BottomBox>
            <S.HeadText>사진첨부</S.HeadText>
            <S.PictureBox>
              <S.Picture>
                <p>➕</p>
                <p>Upload</p>
              </S.Picture>
              <S.Picture>
                <p>➕</p>
                <p>Upload</p>
              </S.Picture>
              <S.Picture>
                <p>➕</p>
                <p>Upload</p>
              </S.Picture>
            </S.PictureBox>
    
            <S.HeadText>메인 설정</S.HeadText>
            <S.SelectBox>
              <S.SelectYoutube>
                <S.Select type="radio" name="select" />
                유튜브
              </S.SelectYoutube>
              <S.SelectPicture>
                <S.Select type="radio" name="select" />
                사진
              </S.SelectPicture>
            </S.SelectBox>
          </S.BottomBox>
          <S.Register>
            <S.RegisterButton onClick={props.handleRegister}>등록하기</S.RegisterButton>
          </S.Register>
        </S.Wrapper>
      );

}

export default BoardWriteUI