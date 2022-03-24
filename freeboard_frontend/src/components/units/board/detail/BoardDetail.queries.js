import { gql } from "@apollo/client";


export const FETCH_BOARD =gql`
    query fetchBoard($boardId:ID!){
        fetchProduct(boardId:$boardId){
            _id
            writer
            title
            contents
        }
    }
`
