import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../../commons/libraries/utils";
import MarketToday from "../today/MarketToday.container";
import * as S from "./MarketList.styles";

export default function MarketListUI(props) {
  return (
    <div>
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
          <S.InfiniteScrollWrapper>
            {props.data?.fetchUseditems.map((el) => (
              <S.Wrapper
                key={el._id}
                id={el._id}
                onClick={props.onClickMoveDetail(el)}
              >
                <S.ProductImg
                  src={
                    el.images.filter((e) => e !== "").length === 0
                      ? "/images/no-image.png"
                      : `https://storage.googleapis.com/${
                          el.images.filter((e) => e !== "")[0]
                        }`
                  }
                />
                <S.ProductName>{el.name || ""}</S.ProductName>
                <S.ProductDetail>
                  <S.ProductPrice>{el.price || ""}</S.ProductPrice>
                  <S.ProductCreatedAt>
                    {getDate(el.createdAt)}
                  </S.ProductCreatedAt>
                </S.ProductDetail>
              </S.Wrapper>
            ))}
          </S.InfiniteScrollWrapper>
        </InfiniteScroll>
      </div>
      <MarketToday todaysSession={props.todaysSession} />
    </div>
  );
}
