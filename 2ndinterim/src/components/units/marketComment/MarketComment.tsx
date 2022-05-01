import MarketCommentList from "./list/MarketCommentList.container";
import MarketCommentWrite from "./write/MarketCommentWrite.container";

export default function MarketComment() {
  return (
    <>
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
}
