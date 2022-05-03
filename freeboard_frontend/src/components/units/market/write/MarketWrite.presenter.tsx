// 마켓 상품 등록 프레젠터
import UploadImg from "../../../commons/uploads/img/UploadImg.container";
import * as S from "./MarketWrite.styles";
import { v4 as uuidv4 } from "uuid";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import KakaoMap from "../../../commons/kakaoMap/Maptainer";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketNewUI(props) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdateUseditem : props.onClickCreateUseditem
      )}
    >
      <S.Wrapper>
        <S.PageTitle>
          {props.isEdit ? "상품 수정하기" : "상품 등록하기"}
        </S.PageTitle>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>상품명</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품명을 입력해주세요"
            {...props.register("name")}
            defaultValue={props.data?.fetchUseditem.name || ""}
          />
          <S.CommonsError>
            {props.formState.errors.name?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>한 줄 요약</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품을 한 줄로 표현해주세요"
            {...props.register("remarks")}
            defaultValue={props.data?.fetchUseditem.remarks || ""}
          />
          <S.CommonsError>
            {props.formState.errors.remarks?.message}
          </S.CommonsError>{" "}
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>상품 설명</S.CommonsInputTitle>
          <ReactQuill
            placeholder="상품에 대해 자세하게 설명해주세요"
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
          />
          <S.CommonsError>
            {props.formState.errors.contents?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>판매 가격</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="원하는 판매가격을 입력해주세요"
            {...props.register("price")}
            defaultValue={props.data?.fetchUseditem.price || ""}
          />
          <S.CommonsError>
            {props.formState.errors.price?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>태그 입력</S.CommonsInputTitle>
          <S.ProductTags>
            {props.data?.fetchUseditem.tags || ""}
            {props.hashArr.map((el, idx) => (
              <S.HashTagSpan key={idx}>{el}</S.HashTagSpan>
            ))}
          </S.ProductTags>
          <S.CommonsInput
            type="text"
            placeholder="태그를 입력하고 스페이스바를 누르세요"
            onKeyUp={props.onKeyUpHash}
          />
          <S.CommonsError>
            {props.formState.errors.tags?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.LocationWrapper>
          <S.LocationMapWrapper>
            <S.CommonsInputTitle>거래위치</S.CommonsInputTitle>
            <KakaoMap
              address={
                props.address
                  ? props.address
                  : props.data?.fetchUseditem.useditemAddress.address || ""
              }
              setGps={props?.setGps}
            />
          </S.LocationMapWrapper>
          <S.LocationDetailWrapper>
            <S.LocationGPSBox>
              <S.CommonsInputTitle>GPS</S.CommonsInputTitle>
              <S.LocationGPSLatLng
                readOnly={true}
                value={
                  props.gps.La
                    ? props.gps.La
                    : props.data?.fetchUseditem.useditemAddress.lat ||
                      "위도(LAT)"
                }
              />
              <S.LocationGPSLatLng
                placeholder="위도(LNG)"
                readOnly={true}
                value={
                  props.gps.Ma
                    ? props.gps.Ma
                    : props.data?.fetchUseditem.useditemAddress.lng ||
                      "경도(LNG)"
                }
              />
            </S.LocationGPSBox>
            <S.LocationDetailAddressBox>
              <S.CommonsInputTitle>주소</S.CommonsInputTitle>
              <S.AddressSearchWrapper>
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
              </S.AddressSearchWrapper>
              <S.LocationDetailAddress
                readOnly={true}
                value={
                  props.address ||
                  props.data?.fetchUseditem.useditemAddress?.address ||
                  ""
                }
              />
              <S.LocationDetailAddress
                placeholder="상세 주소를 입력하세요"
                onChange={props.onChangeAddressDetail}
                value={
                  props.addressDetail ||
                  props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                  ""
                }
              />
            </S.LocationDetailAddressBox>
          </S.LocationDetailWrapper>
        </S.LocationWrapper>
        <S.ImageUploadWrapper>
          <S.CommonsInputTitle>사진 첨부</S.CommonsInputTitle>
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
        <S.ButtonWrapper>
          <S.SubmitButton type="submit" isActive={props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
