import *as S from './QuizProductWrite.styles'


export default function QuizProductWriteUI(props){

    
      return (
        <div>
          <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
          판매자: <S.SellerInput type="text" onChange={props.onChangeSeller} /><br />
          이름: <S.NameInput type="text" onChange={props.onChangeName} /><br />
          내용: <S.DetailInput type="text" onChange={props.onChangeDetail} /><br />
          가격: <S.PriceInput type="text" onChange={props.onChangePrice} /><br />
          <S.RequestButton onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate} isActive={props.isActive}>상품{props.isEdit ? "수정" : "등록"}하기</S.RequestButton>
        </div>
      );


}