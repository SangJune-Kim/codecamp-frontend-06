// const [todayView, setTodayView] = useState([]);
//   // const [isChange, setChange] = useState(false);
//   /* Routing to BoardDetail */
//   const onClickProduct = (now: any) => (event: MouseEvent<HTMLDivElement>) => {
//     const today = JSON.parse(localStorage.getItem("today") || "[]");
//     // temp : 같은 글을 같은 날짜에 누른 경우
//     const temp = today.filter(
//       (todayEl: any) => todayEl._id === now._id && todayEl.date === todayDate()
//     );
//     // console.log(today[0]._id, now._id);
//     // console.log(today[0].date, now.date);

//     // 같은 글이 아니거나 같은 날짜가 아닐 경우에만 실행
//     if (temp.length === 0) {
//       const { __typename, ...rest } = now;
//       const withDateEl = { ...rest, date: todayDate() };
//       today.push(withDateEl);
//       localStorage.setItem("today", JSON.stringify(today));
//       // setChange((prev) => !prev);
//     }
//     // if (event.target instanceof Element)
//     router.push(`/products/${event.currentTarget.id}`);
//     console.log(event.currentTarget.id);
//   };

//   useEffect(() => {
//     const today = JSON.parse(localStorage.getItem("today") || "[]");
//     const temp = today.filter(
//       (todayEl: ITodayBoard) => todayEl.date === todayDate()
//     );
//     setTodayView(temp);
//   }, []);

// <S.TodayWrapper>
// <S.TodayTitle>오늘 본 상품</S.TodayTitle>
// <S.TodayCount>{props.todayView.length}</S.TodayCount>
// {props.todayView.map((el: any, index: any) => (
//   <S.TodayItem
//     key={uuidv4()}
//     id={el._id}
//     onClick={props.onClickProduct(el)}
//   >
//     {el.images[0] ? (
//       <S.TodayImg
//         src={`https://storage.googleapis.com/${el.images[0]}`}
//       ></S.TodayImg>
//     ) : (
//       <S.TodayDefaultImg></S.TodayDefaultImg>
//     )}
//     <S.TodayName>{el.name}</S.TodayName>
//   </S.TodayItem>
// ))}
// </S.TodayWrapper>
