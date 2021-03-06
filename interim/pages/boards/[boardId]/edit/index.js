import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD } from "../../../../src/components/units/board/detail/BoardDetail.queries";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

export default function BoardEditPage() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(true);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return <BoardWrite isEdit={isEdit} data={data} setIsEdit={setIsEdit} />;
}
