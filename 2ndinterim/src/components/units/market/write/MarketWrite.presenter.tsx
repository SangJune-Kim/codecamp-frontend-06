import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { v4 as uuidv4 } from "uuid";
import UploadImg from "../../../commons/uploads/img/UploadImg.container";
import * as S from "./MarketWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import KakaoMap from "../../../commons/kakaoMap/Maptainer";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWriteUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateUseditem : props.onClickCreateUseditem
      )}
    >
      <S.Wrapper>
        <S.HeadWrapper>
          {props.isEdit ? "상품 수정" : "상품 등록"}
        </S.HeadWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle>상품명</S.CommonsTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품명을 작성해주세요"
            {...props.register("name")}
            defaultValue={props.data?.fetchUseditem.name || ""}
          />
        </S.CommonsWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle>상품 요약</S.CommonsTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품요약을 작성해주세요"
            {...props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks || ""}
          />
        </S.CommonsWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle>상품 내용</S.CommonsTitle>
          <ReactQuill
            style={{ width: "900px", height: "250px", marginBottom: "50px" }}
            placeholder="상품을 설명해주세요"
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
          />
        </S.CommonsWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle>판매 가격</S.CommonsTitle>
          <S.CommonsInput
            type="text"
            placeholder="판매 가격을 입력해주세요"
            {...props.register("price")}
            defaultValue={props.data?.fetchUseditem.price || ""}
          />
        </S.CommonsWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle>태그 입력</S.CommonsTitle>
          <S.CommonsInput
            type="text"
            placeholder="#태그 #태그 #태그"
            onKeyUp={props.onKeyUpHash}
          />
        </S.CommonsWrapper>
        <S.CommonsWrapper>
          <S.CommonsTitle></S.CommonsTitle>
          <S.HashArrBox>
            {props.data?.fetchUseditem.tags || ""}
            {props.hashArr.map((el, idx) => (
              <S.HashTagSpan key={idx}>{el}</S.HashTagSpan>
            ))}
          </S.HashArrBox>
        </S.CommonsWrapper>
        <S.CommonsTitle>거래 위치</S.CommonsTitle>
        <S.MapWrapper>
          <KakaoMap
            address={
              props.address
                ? props.address
                : props.data?.fetchUseditem.useditemAddress.address || ""
            }
            setGps={props?.setGps}
          />
          <S.MapDetailWrapper>
            <S.MapDetailWrapperHead>
              <S.AddressNumber
                value={
                  props.zipcode
                    ? props.zipcode
                    : props.data?.fetchUseditem.useditemAddress?.zipcode
                }
                readOnly={true}
              />
              <S.AddressSearch onClick={props.onClickModal}>
                우편번호 검색
              </S.AddressSearch>
              {props.isOpen && (
                <Modal
                  visible={true}
                  title={"우편번호 검색"}
                  onOk={props.onClickModal}
                  onCancel={props.onClickModal}
                >
                  <DaumPostcode onComplete={props.onClickPostCode} />
                </Modal>
              )}
            </S.MapDetailWrapperHead>
            <S.MapDetailWrapperBottom>
              <S.MapDetailAddress
                readOnly={true}
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
              />
              <S.MapDetailAddress
                placeholder="상세 주소를 입력하세요"
                onChange={props.onChangeAddressDetail}
                value={
                  props.addressDetail ||
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                  ""
                }
              />
            </S.MapDetailWrapperBottom>
          </S.MapDetailWrapper>
        </S.MapWrapper>
        <S.ImageUploadWrapper>
          <S.CommonsTitle>사진 첨부</S.CommonsTitle>
          <S.UploadImageBox>
            {props.fileUrls.map((el, index) => (
              <UploadImg
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.UploadImageBox>
        </S.ImageUploadWrapper>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.CancelButton>취소</S.CancelButton>
        <S.SubmitButton type="submit" isActive={props.formState.isValid}>
          {props.isEdit ? "수정" : "등록"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </form>
  );
}
