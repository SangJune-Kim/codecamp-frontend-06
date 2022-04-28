// 마켓 상품 등록 컨테이너
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import MarketNewUI from "./MarketWrite.presenter";
import { CREATE_USEDITEM, UPDATE_USEDITEM } from "./MarketWrite.queries";
import * as yup from "yup";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
  name: yup.string().required("상품 이름을 입력해주세요"),
  remarks: yup.string().required("상품에 대한 설명을 한 줄로 요약해주세요"),
  contents: yup.string().required("상품에 대한 설명을 작성해주세요"),
  price: yup
    .number()
    .typeError("숫자만 입력가능합니다.")
    .required("상품 가격을 설정해주세요"),
  // .matches(/^(?=.*\d)/, "숫자만 입력 가능합니다."),

  // images: yup.string().required("상품 사진을 등록해주세요"),
});

export default function MarketNew(props) {
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
    // if (hashArr) updateUseditemInput.tags = editHashArr;

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

  // 이미지 업로드 부분
  const onChangeFileUrls = (fileUrl, index) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
    reset({
      name: props.data?.fetchUseditem.name,
      remarks: props.data?.fetchUseditem.remarks,
      contents: props.data?.fetchUseditem.contents,
      price: props.data?.fetchUseditem.price,
      // tags: props.data?.fetchUseditem.tags,
    });
  }, [props.data]);

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };
  // react-quill 부분
  const onChangeContents = (value: string) => {
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
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

  return (
    <MarketNewUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickCreateUseditem={onClickCreateUseditem}
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      isEdit={props.isEdit}
      onClickUpdateUseditem={onClickUpdateUseditem}
      onKeyUpHash={onKeyUpHash}
      hashArr={hashArr}
      onChangeContents={onChangeContents}
      getValues={getValues}
      // fetch 데이터
      data={props.data}
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
