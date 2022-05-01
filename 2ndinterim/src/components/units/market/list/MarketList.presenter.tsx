import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./MarketList.styles";

export default function MarketListUI(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        overflow: "auto",
        padding: "20px",
      }}
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <S.TestWrapper>
          {props.data?.fetchUseditems.map((el) => (
            <S.Wrapper
              key={el._id}
              id={el._id}
              onClick={props.onClickMoveDetail}
            >
              <S.ProductImg
                id={el._id}
                src={
                  `https://storage.googleapis.com/${
                    el.images.filter((e) => e !== "")[0]
                  }` || ""
                }
              />
              <S.ProductName id={el._id}>{el.name || ""}</S.ProductName>
              <S.ProductDetail id={el._id}>
                <S.ProductPrice id={el._id}>{el.price || ""}</S.ProductPrice>
                <S.ProductCreatedAt id={el._id}>
                  {getDate(el.createdAt)}
                </S.ProductCreatedAt>
              </S.ProductDetail>
            </S.Wrapper>
          ))}
        </S.TestWrapper>
      </InfiniteScroll>
    </div>
  );
}
