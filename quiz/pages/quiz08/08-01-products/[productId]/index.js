// 상세페이지

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const QuizProductDetailPage = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  console.log(data);

  const onClickMove = () => {
    router.push(`/quiz/08-01-products/${router.query.productId}/edit`);
  };

  return (
    <div>
      <div>{data?.fetchProduct._id}</div>
      <div>판매자: {data?.fetchProduct.seller}</div>
      <div>이름: {data?.fetchProduct.name}</div>
      <div>내용: {data?.fetchProduct.detail}</div>
      <div>가격: {data?.fetchProduct.price}</div>
      <button onClick={onClickMove}>수정하러 이동하기</button>
    </div>
  );
};

export default QuizProductDetailPage;
