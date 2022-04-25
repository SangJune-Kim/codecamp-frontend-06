// 마켓 상품 등록 프레젠터
import UploadImg from "../../../commons/uploads/img/UploadImg.container";
import * as S from "./MarketWrite.styles";
import { v4 as uuidv4 } from "uuid";

export default function MarketNewUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickCreateUseditem)}>
      <S.Wrapper>
        <S.PageTitle>상품 등록하기</S.PageTitle>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>상품명</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품명을 입력해주세요"
            {...props.register("name")}
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
          />
          <S.CommonsError>
            {props.formState.errors.remarks?.message}
          </S.CommonsError>{" "}
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>상품 설명</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="상품에 대해 자세하게 설명해주세요"
            {...props.register("contents")}
          />
          <S.CommonsError>
            {props.formState.errors.contents?.message}
          </S.CommonsError>{" "}
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>판매 가격</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="원하는 판매가격을 입력해주세요"
            {...props.register("price")}
          />
          <S.CommonsError>
            {props.formState.errors.price?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.CommonsInputWrapper>
          <S.CommonsInputTitle>태그 입력</S.CommonsInputTitle>
          <S.CommonsInput
            type="text"
            placeholder="#태그를 입력해주세요"
            {...props.register("tags")}
          />
          <S.CommonsError>
            {props.formState.errors.tags?.message}
          </S.CommonsError>
        </S.CommonsInputWrapper>
        <S.LocationWrapper>
          <S.LocationMapWrapper>
            <S.CommonsInputTitle>거래위치</S.CommonsInputTitle>
            <S.KakaoMapBox></S.KakaoMapBox>
          </S.LocationMapWrapper>
          <S.LocationDetailWrapper>
            <S.LocationGPSBox>
              <S.CommonsInputTitle>GPS</S.CommonsInputTitle>
              <S.LocationGPSLatLng placeholder="위도(LAT)" readOnly={true} />
              <S.LocationGPSLatLng placeholder="위도(LNG)" readOnly={true} />
            </S.LocationGPSBox>
            <S.LocationDetailAddressBox>
              <S.CommonsInputTitle>주소</S.CommonsInputTitle>
              <S.LocationDetailAddress readOnly={true} />
              <S.LocationDetailAddress placeholder="상세 주소를 입력하세요" />
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
            등록하기
          </S.SubmitButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </form>
  );
}
