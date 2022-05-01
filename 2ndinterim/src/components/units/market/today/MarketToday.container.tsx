import * as S from "./MarketToday.styles";

export default function MarketToday(props) {
  return (
    <S.Wrapper>
      <S.Title>오늘 본 상품</S.Title>
      {props.todaysSession.map((el) => (
        <S.TodaysWrapper key={el._id}>
          <S.TodaysImage
            src={
              el.images.filter((e) => e !== "").length === 0
                ? "/images/no-image.png"
                : `https://storage.googleapis.com/${
                    el.images.filter((e) => e !== "")[0]
                  }`
            }
          />
        </S.TodaysWrapper>
      ))}
    </S.Wrapper>
  );
}
