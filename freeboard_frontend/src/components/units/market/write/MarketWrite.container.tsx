// 마켓 상품 등록 컨테이너
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import MarketNewUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM } from "./MarketWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useEffect, useState } from "react";

const schema = yup.object({
  name: yup.string().required("상품 이름을 입력해주세요"),
  remarks: yup.string().required("상품에 대한 설명을 한 줄로 요약해주세요"),
  contents: yup.string().required("상품에 대한 설명을 작성해주세요"),
  price: yup
    .string()
    .required("상품 가격을 설정해주세요")
    .matches(/^(?=.*\d)/, "숫자만 입력 가능합니다."),
  tags: yup.string(),
  // images: yup.string().required("상품 사진을 등록해주세요"),
});

export default function MarketNew() {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickCreateUseditem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: fileUrls,
          },
        },
      });
      Modal.success({ content: "상품이 등록되었습니다." });
      router.push(`/markets/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  // 이미지 업로드 부분
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  return (
    <MarketNewUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUseditem={onClickCreateUseditem}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
    />
  );
}
