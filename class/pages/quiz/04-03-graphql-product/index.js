import axios from "axios";
import { useMutation, gql} from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String,$createProductInput:CreateProductInput!){

        createProduct(seller: $seller, createProductInput: $createProductInput){
            message
            _id
            number
        }
    }
`
const QuizGraphqlPage = () => {

    const [callApi] = useMutation(CREATE_PRODUCT)
    const [data,setData] = useState("")
    const [seller,setSeller] = useState("")
    const [name,setName] = useState("")
    const [detail,setDetail] = useState("")
    const [price,setPrice] = useState("")

    const onChangeSeller =(event) =>{
        setSeller(event.target.value)
    }
    const onChangeName =(event) =>{
        setName(event.target.value)
    }
    const onChangeDetail =(event) =>{
        setDetail(event.target.value)
    }
    const onChangePrice =(event) =>{
        setPrice(event.target.value)
    }



    const onClickRequest = async () =>{
        const result = await callApi({
            variables: {
                seller: seller,
                createProductInput:{
                    name: name,
                    detail: detail,
                    price: Number(price)
                }
            }
        })
        console.log(result.data.createProduct.message)
        console.log(result.data.createProduct._id)
        setData(result.data.createProduct.message)

    }
  return (
    <div>
        판매자:<input type="text" onChange={onChangeSeller}/>
        이름:<input type="text" onChange={onChangeName}/>
        내용:<input type="text" onChange={onChangeDetail}/>
        가격:<input type="number" onChange={onChangePrice}/>
      <div>{data}</div>
      <button onClick={onClickRequest}>GRAPHQL-API요청하기</button>
    </div>
  );
};

export default QuizGraphqlPage;
