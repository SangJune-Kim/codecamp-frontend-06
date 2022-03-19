import { gql, useQuery } from "@apollo/client"
import { getRouteRegex } from "next/dist/shared/lib/router/utils"
import {useRouter} from 'next/router'

const FETCH_PRODUCT =gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

const DynamicRoutedPage = () =>{
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT,{
        variables: {productId: router.query.productId}
    })
    
    console.log(data)

    return (
      <div>
        {/* 조건부 랜더링 && 연산자
        <div>_id:{data && data.fetchProduct._id}</div>
        <div>판매자:{data && data.fetchProduct.seller}</div>
        <div>이름:{data && data.fetchProduct.name}</div>
        <div>내용:{data && data.fetchProduct.detail}</div>
        <div>가격:{data && data.fetchProduct.price}</div> 
        */}

        <div>_id:{data?.fetchProduct._id}</div>
        <div>판매자:{data?.fetchProduct.seller}</div>
        <div>이름:{data?.fetchProduct.name}</div>
        <div>내용:{data?.fetchProduct.detail}</div>
        <div>가격:{data?.fetchProduct.price}</div>

        {/* 못갖고 왔을때 loading으로 해놔~  <- 일어나면 이거부터*/}
      </div>
    );

}

export default DynamicRoutedPage