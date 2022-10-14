// market list presenter
import InfiniteScroll from "react-infinite-scroller";
import MarketToday from "../today/MarketToday.container";
import * as S from "./MarketList.styles";

export default function MarketListUI(props) {
  return (
    <S.Wrapper>
      <S.MarketListWrapper>
        <S.ListMenuWrapper>
          <S.ChoiceShow>
            <S.ShowSelling>판매중 상품</S.ShowSelling>
            <S.ShowSoldout>판매된 상품</S.ShowSoldout>
            <S.MoveToNewItem onClick={props.onClickNewItem}>
              상품 등록
            </S.MoveToNewItem>
          </S.ChoiceShow>
          <S.SearchWrapper>
            <S.SearchBox>
              <S.SearchImg src="/images/search.png" />
              <S.SearchInput />
            </S.SearchBox>
            <S.SearchDate>날짜 선택</S.SearchDate>
            <S.SearchButton>검색</S.SearchButton>
          </S.SearchWrapper>
        </S.ListMenuWrapper>
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
            <S.ItemListWrapper>
              {props.data?.fetchUseditems.map((el) => (
                <S.ItemListRow key={el._id} id={el._id}>
                  <S.ItemInfo>
                    <S.ItemPicture
                      src={
                        el.images.filter((e) => e !== "").length === 0
                          ? "/images/no-image.png"
                          : `https://storage.googleapis.com/${
                              el.images.filter((e) => e !== "")[0]
                            }`
                      }
                      // src={`https://storage.googleapis.com/${el.images[0]}`}
                    />
                    <S.ItemListDetail>
                      <S.ItemListDetailName
                        id={el._id}
                        onClick={props.onClickMoveDetail(el)}
                      >
                        {el.name}
                      </S.ItemListDetailName>
                      <S.ItemListDetailRemarks>
                        {el.remarks}
                      </S.ItemListDetailRemarks>
                      <S.ItemListDetailTags>{el.tags}</S.ItemListDetailTags>
                      <S.ItemListDetailBottom>
                        <S.ItemListDetailSellerIcon src="/images/productListProfile.png" />
                        <S.ItemListDetailSeller>
                          {el.seller.name}
                        </S.ItemListDetailSeller>
                        <S.ItemListDetailPickedIcon src="/images/pick.png" />
                        <S.ItemListDetailPickedCount>
                          {el.pickedCount}
                        </S.ItemListDetailPickedCount>
                      </S.ItemListDetailBottom>
                    </S.ItemListDetail>
                  </S.ItemInfo>
                  <S.ItemListPrice>
                    <S.WonIcon src="/images/won.png" />
                    {`${el.price}원`}
                  </S.ItemListPrice>
                </S.ItemListRow>
              ))}
            </S.ItemListWrapper>
          </InfiniteScroll>
        </div>
      </S.MarketListWrapper>
      <S.TodayListWrapper></S.TodayListWrapper>
      <MarketToday todaysSession={props.todaysSession} />
    </S.Wrapper>
  );
}
