// market list presenter

export default function MarketListUI(props) {
  return (
    <div>
      <div>베스트 상품 자리자리</div>
      <div>
        중간 자리자리
        <div>판매중 상품</div>
        <div>판매된 상품</div>
        <div>검색 창</div>
        <div>날짜 선택</div>
        <div>검색 버튼</div>
      </div>
      <div>
        상품들 자리자리
        <div>맵돌릴 자리자리</div>
      </div>
      <button onClick={props.onClickNewItem}>상품 등록</button>
    </div>
  );
}
