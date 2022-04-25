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
      <div>언</div>
      <div>123124124</div>
      <div>123124124</div>
    </S.Wrapper>
  );
}
