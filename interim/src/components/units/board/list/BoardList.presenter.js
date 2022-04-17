import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import InfiniteScroll from "react-infinite-scroller";
import SliderComponent from "../../../commons/slider";

export default function BoardListUI(props) {
  const onLoadMore = () => {
    if (!props.data) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoards.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <S.CarouselWrapper>
        <SliderComponent />
      </S.CarouselWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        <S.ListWrapper>
          {props.data?.fetchBoards.map((el) => (
            <S.ListRow key={el._id}>
              <S.ListTitle id={el._id} onClick={props.onClickMoveDetail}>
                {el.title}
              </S.ListTitle>
              <S.ListCreatedAt>{getDate(el.createdAt)}</S.ListCreatedAt>
            </S.ListRow>
          ))}
        </S.ListWrapper>
      </InfiniteScroll>
    </S.Wrapper>
  );
}
