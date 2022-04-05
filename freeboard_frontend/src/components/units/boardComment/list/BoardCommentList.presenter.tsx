// 댓글 목록 프레젠터 페이지
import * as S from "./BoardCommentList.styles";
import BoardCommentListItemUI from "./BoardCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import { BoardCommentListUIProps } from "./BoardCommentList.types";

const BoardCommentListUI = (props: BoardCommentListUIProps) => {
  const onLoadMore = () => {
    if (!props.data) return;

    props.fetchMore({
      variables: {
        page: Math.ceil(props.data?.fetchBoardComments.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: [...prev.fetchBoardComments] };
        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <S.Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el: any) => (
          <BoardCommentListItemUI key={el._id} el={el} data={props.data} />
        )) || <div></div>}
      </InfiniteScroll>
    </S.Wrapper>
  );
};
export default BoardCommentListUI;
