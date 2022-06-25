import Swal from "sweetalert2";

const onClickSuccess = () => {
  Swal.fire({
    // position: 'top-end',
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    // timer: 1500
  });
};

const onClickFail = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};

const onClickCheck = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  });
};

export default function AlertTest() {
  return (
    <>
      <div>
        <button onClick={onClickSuccess}>성공</button>
        <button onClick={onClickFail}>실패</button>
        <button onClick={onClickCheck}>확인</button>
      </div>
    </>
  );
}
