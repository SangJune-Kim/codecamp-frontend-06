// 마켓 상세페이지 프레젠터
import * as S from "./MarketDetail.styles";
import Dompurify from "dompurify";
import KakaoMap from "../../../commons/kakaoMap/Maptainer";
import MarketComment from "../../marketComment/MarketComment";

export default function MarketDetailUI(props) {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <S.ProductImage>
          {props.data?.fetchUseditem?.images?.filter((el) => el !== "")
            .length === 0 ? (
            <img src="/images/no-image.png" />
          ) : (
            <S.UploadImage
              src={`https://storage.googleapis.com/${
                props.data?.fetchUseditem.images.filter((el) => el !== "")[0]
              }`}
            />
          )}
        </S.ProductImage>
        <S.ProductProfileWrapper>
          <S.ProductProfileDetail>
            <S.ProductName>
              {props.data?.fetchUseditem.name}
              <div>
                <S.UpdateIcon
                  src="/images/update.png"
                  onClick={props.onClickMoveEditPage}
                />
                <S.DeleteIcon
                  src="/images/delete.png"
                  onClick={props.onClickDelete}
                />
              </div>
            </S.ProductName>
            <S.ProductPrice>{props.data?.fetchUseditem.price}원</S.ProductPrice>
          </S.ProductProfileDetail>
          <S.ProductRemarks>
            {props.data?.fetchUseditem.remarks}
          </S.ProductRemarks>
          <S.ProductTags>
            {props.data?.fetchUseditem.tags.map((el, idx) => (
              <S.HashTagSpan key={idx}>{el}</S.HashTagSpan>
            ))}
          </S.ProductTags>
          <S.ProductButtonWrapper>
            <S.ProductProfilePicked>
              <S.PickHeart src="/images/pick.png" onClick={props.onClickPick} />
              {props.data?.fetchUseditem.pickedCount}
            </S.ProductProfilePicked>
            <S.ProductMoveToBasket
              onClick={props.onClickBasket(props.data?.fetchUseditem)}
            >
              장바구니
            </S.ProductMoveToBasket>
            <S.ProductBuy onClick={props.onClickBuy}>바로구매</S.ProductBuy>
          </S.ProductButtonWrapper>
        </S.ProductProfileWrapper>
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.ProductContentsMapWrapper>
          <S.CommonsTitle>상품 정보</S.CommonsTitle>
          <S.ProductContents>
            {typeof window !== "undefined" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: Dompurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></div>
            )}
          </S.ProductContents>
          <S.MapTitleBox>
            <S.MapTitleIcon src="/images/stoke.png" />
            <S.MapTitle>거래지역</S.MapTitle>
          </S.MapTitleBox>
          <S.MapWrapper>
            <KakaoMap
              address={
                props.data?.fetchUseditem?.useditemAddress?.address || ""
              }
            />
          </S.MapWrapper>
        </S.ProductContentsMapWrapper>
        <S.ProfileCommentsWrapper>
          <S.CommonsTitle>상점 정보</S.CommonsTitle>
          <S.ProfileBox>
            <S.ProfileImg />
            <S.Writer>{props.data?.fetchUseditem?.seller?.name}</S.Writer>
          </S.ProfileBox>
          <S.CommonsTitle>댓글 </S.CommonsTitle>
          <S.CommentWrapper>
            <MarketComment />
          </S.CommentWrapper>
        </S.ProfileCommentsWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
