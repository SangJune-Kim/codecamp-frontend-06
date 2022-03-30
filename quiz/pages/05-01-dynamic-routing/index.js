import { useRouter } from "next/router";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

const DynamicRoutingPage = () => {
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const router = useRouter();
  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState("");

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeContent = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCreateProduct = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: name,
            detail: detail,
            price: Number(price),
          },
        },
      });
      console.log(result);
      console.log(result.data.createProduct._id);
      setData(result.data.createProduct.message);
      router.push(
        `/quiz/05-02-dynamic-routed/${result.data.createProduct._id}`
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>
        판매자: <input type="text" onChange={onChangeSeller} />
      </div>
      <div>
        상품명: <input type="text" onChange={onChangeName} />
      </div>
      <div>
        상품 내용: <input type="text" onChange={onChangeContent} />
      </div>
      <div>
        상품 가격: <input type="number" onChange={onChangePrice} />
      </div>
      <button onClick={handleCreateProduct}>게시물 등록</button>
      <div>{data}</div>
    </div>
  );
};

export default DynamicRoutingPage;
