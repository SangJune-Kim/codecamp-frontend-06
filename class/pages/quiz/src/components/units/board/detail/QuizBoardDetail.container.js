import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery} from "@apollo/client"
import {FETCH_BOARD} from "./QuizBoardDetail.queries"
import QuizBoardDetailUI from "./QuizBoardDetail.presenter";

export default function QuizBoardDetail(){
    
  const router = useRouter()
  console.log(router)
  const {data} = useQuery(FETCH_BOARD,{
      variables: {number: Number(router.query.number)}
  })


  return(
      <QuizBoardDetailUI />
  )



}

