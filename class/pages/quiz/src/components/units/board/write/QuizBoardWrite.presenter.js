import *as S from './QuizBoardWrite.styles'


export default function QuizBoardWriteUI(props){

    
      return (
        <>
          {/* <div>{data}</div> */}
          작성자: <S.WriterInput type="text" onChange={props.onChangeWriter} /><br />
          제목: <S.TitleInput type="text" onChange={props.onChangeTitle} /><br />
          내용: <S.ContentsInput type="text" onChange={props.onChangeContents} /><br />
          <S.RequestButton onClick={props.callGraphqlApi} isActive={props.isActive}>GraphQL-API 요청하기!!!</S.RequestButton>
        </>
      );


}