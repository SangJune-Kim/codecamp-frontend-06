import MarketWriteUI from "./MarketWrite.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./MarketWrite.queries";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup.string().required("상품명을 작성해주세요"),
  remarks: yup.string().required("상품에 요약을 작성해주세요"),
  contents: yup.string().required("상품을 설명해주세요"),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("판매 가격을 입력해주세요"),
});

export default function MarketWrite(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [hashArr, setHashArr] = useState([]);
  // 주소 친구들
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [addressDetail, setAddressDetail] = useState("");
  const [gps, setGps] = useState({
    La: 0,
    Ma: 0,
  });

  // useForm 부분
  const {
    register,
    handleSubmit,
    formState,
    reset,
    getValues,
    setValue,
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Hash 부분
  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  // react-quill 부분
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  // 이미지 업로드 부분
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };
  // 등록하기 버튼
  const onClickCreateUseditem = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
              lat: gps.La,
              lng: gps.Ma,
            },
          },
        },
      });
      Modal.success({ content: "상품이 등록되었습니다." });
      router.push(`/markets/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  // 수정하기 버튼
  const onClickUpdateUseditem = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangeFiles = currentFiles !== defaultFiles;

    const editHashArr = [...props.data?.fetchUseditem.tags, ...hashArr];
    const updateUseditemInput: IUpdateUseditemInput = {};
    if (isChangeFiles) updateUseditemInput.images = fileUrls;

    try {
      const editResult = await updateUseditem({
        variables: {
          updateUseditemInput: {
            ...data,
            images: fileUrls,
            tags: editHashArr,
            useditemAddress: {
              zipcode,
              address,
              addressDetail,
              lat: gps.La,
              lng: gps.Ma,
            },
          },
          useditemId: router.query.useditemId,
        },
      });
      Modal.success({ content: "상품이 수정되었습니다." });
      router.push(`/markets/${editResult.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "수정되지 않았습니다." });
    }
  };
  // 주소 함수 부분
  const onClickModal = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickPostCode = (address) => {
    setIsOpen((prev) => !prev);
    setAddress(address.address);
    setZipcode(address.zonecode);
    setAddressDetail("");
  };
  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  // useEffect
  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
    reset({
      name: props.data?.fetchUseditem.name,
      remarks: props.data?.fetchUseditem.remarks,
      contents: props.data?.fetchUseditem.contents,
      price: props.data?.fetchUseditem.price,
    });
  }, [props.data]);

  return (
    <MarketWriteUI
      data={props.data}
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUseditem={onClickCreateUseditem}
      onClickUpdateUseditem={onClickUpdateUseditem}
      // 이미지 업로드
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      // 해쉬 부분
      onKeyUpHash={onKeyUpHash}
      hashArr={hashArr}
      // quill
      getValues={getValues}
      onChangeContents={onChangeContents}
      // 주소 부분
      isOpen={isOpen}
      address={address}
      zipcode={zipcode}
      onClickModal={onClickModal}
      onClickPostCode={onClickPostCode}
      onChangeAddressDetail={onChangeAddressDetail}
      addressDetail={addressDetail}
      setGps={setGps}
      gps={gps}
    />
  );
}
