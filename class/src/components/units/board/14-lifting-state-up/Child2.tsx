const Child2 = (props) => {
  return (
    <div>
      <div>자식 2의 카운트: {props.count} </div>
      <button onClick={props.onClickCountUP}>카운트 올리기!!</button>
    </div>
  );
};
export default Child2;
