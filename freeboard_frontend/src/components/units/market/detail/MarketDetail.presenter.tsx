// 마켓 상세페이지 프레젠터
import { getDate } from "../../../../commons/libraries/utils";
// import MarketDetailSlider from "../../../commons/slider/marketDetail";
import * as S from "./MarketDetail.styles";
import Dompurify from "dompurify";
import KakaoMap from "../../../commons/kakaoMap/Maptainer";

export default function MarketDetailUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.ProfileBox>
          <S.ProfileImg src="/Profile.png" />
          <S.Profile>
            <S.Writer>{props.data?.fetchUseditem.seller.name}</S.Writer>
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
            <S.PickHeart src="/images/pick.png" onClick={props.onClickPick} />
            <div>{props.data?.fetchUseditem.pickedCount}</div>
          </S.ProductProfilePicked>
        </S.ProductProfileWrapper>
        <S.ProductImage>
          {props.data?.fetchUseditem.images
            .filter((el) => el)
            .map((el) => (
              <S.UploadImage
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </S.ProductImage>
        {/* <MarketDetailSlider /> */}
        <S.ProductContents>
          {/* {props.data?.fetchUseditem.contents} */}
          {typeof window !== "undefined" && (
            <div
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem?.contents),
              }}
            ></div>
          )}
        </S.ProductContents>

        <S.ProductTags>
          {props.data?.fetchUseditem.tags.map((el, idx) => (
            <S.HashTagSpan key={idx}>{el}</S.HashTagSpan>
          ))}
          {/* {props.data?.fetchUseditem.tags} */}
        </S.ProductTags>
      </S.BodyWrapper>
      <S.MapWrapper>
        <KakaoMap
          address={props.data?.fetchUseditem?.useditemAddress?.address || ""}
        />
      </S.MapWrapper>
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
