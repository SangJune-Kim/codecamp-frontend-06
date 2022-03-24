// 상세페이지 컨테이너 컴포턴트
import BoardDetailUI from "./BoardDetail.presenter"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router";
import {FETCH_BOARD} from "./BoardDetail.queries"

const BoardDetail = ()=>{

  const router = useRouter()
  const {data} = useQuery(FETCH_BOARD,{
      variables: {boardId: router.query.boardId}
  })
  
  console.log(data)
  
  return (<BoardDetailUI/>)

}
export default BoardDetail