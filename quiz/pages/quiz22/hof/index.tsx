export default function QuizHofPage() {
  const onClickButton = (number) => (event) => {
    console.log(number);
  };

  return (
    <>
      <button onClick={onClickButton(123)}>임의의</button>
    </>
  );
}
