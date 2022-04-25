// 마켓 상세페이지 프레젠터
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketDetail.styles";

export default function MarketDetailUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.ProfileBox>
          <S.ProfileImg src="/Profile.png" />
          <S.Profile>
            {/* <S.Writer>{props.data?.fetchBoard.writer}</S.Writer> */}
            <S.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </S.CreatedAt>
          </S.Profile>
        </S.ProfileBox>
        <div>공유,위치 아이콘</div>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.ProductProfileWrapper>
          <S.ProductProfileDetail>
            <S.ProductRemarks>
              {props.data?.fetchUseditem.remarks}
            </S.ProductRemarks>
            <S.ProductName>{props.data?.fetchUseditem.name}</S.ProductName>
            <S.ProductPrice>{props.data?.fetchUseditem.price}</S.ProductPrice>
          </S.ProductProfileDetail>
          <S.ProductProfilePicked>
            <S.PickIcon />
            <div>{props.data?.fetchUseditem.pickedCount}</div>
          </S.ProductProfilePicked>
        </S.ProductProfileWrapper>
        <div>picture</div>
        <div>details</div>
        <div>tags</div>
      </S.BodyWrapper>
      <S.MapWrapper>mapWrapper</S.MapWrapper>
      <S.ButtonWrapper>
        <S.ListButton onClick={props.onClickMoveListPage}>
          목록으로
        </S.ListButton>
        <S.EditButton onClick={props.onClickMoveEditPage}>
          수정하기
        </S.EditButton>
        <S.DeleteButton onClick={props.onClickDelete}>삭제하기</S.DeleteButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
