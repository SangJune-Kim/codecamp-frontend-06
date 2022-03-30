import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import {CREATE_PRODUCT,UPDATE_PRODUCT} from "./QuizProductWrite.queries"
import QuizProductWriteUI from "./QuizProductWrite.presenter";



export default function QuizProductWrite(props) {
  const [createProduct] = useMutation(CREATE_PRODUCT)
  const [updateProduct] = useMutation(UPDATE_PRODUCT)
  const [isActive,setIsActive] = useState(false)
  const router = useRouter()

  const [seller,setSeller] = useState("")
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")
  const [price, setPrice] = useState("")

  const onClickUpdate = async () =>{
    await updateProduct({
      variables: {
          productId: router.query.productId,
          updateProductInput: {
          name: name,
          detail: detail,
          price: Number(price)
        }
      },
    })
    alert("상품 수정에 성공했어요")
    router.push(`/quiz/08-01-products/${router.query.productId}`)
  }

  const onClickCreate = async () => {
    try{
        const result = await createProduct({
          variables: {seller: seller, 
            createProductInput:{name: name, detail: detail, price: Number(price)}}
        })
            alert("상품 등록에 성공했어요")
          router.push(`/quiz/08-01-products/${result.data.createProduct._id}`)
        }catch(error){
          alert(error.message)
        }
    // } finally {
    //       //성공이든 실패든 해야할 내용을 넣어
    // }
    

  };

  const onChangeSeller = (event) =>{
    setSeller(event.target.value)
    if(event.target.value !== "" && name !== "" && detail !== "" && price !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeName = (event) =>{
    setName(event.target.value)
    if(seller !== "" && event.target.value !== "" && detail !== "" && price !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeDetail = (event) =>{
    setDetail(event.target.value)
    if(seller !== "" && name !== "" && event.target.value !== "" && price !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangePrice = (event) =>{
    setPrice(event.target.value)
    if(seller !== "" && name !== "" && detail !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  return (
    <QuizProductWriteUI
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit}
    />
  );

}