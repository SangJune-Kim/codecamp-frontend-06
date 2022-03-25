//목록 쿼리 페이지
import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;
