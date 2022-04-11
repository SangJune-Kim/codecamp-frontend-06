import { useEffect } from "react";
import { useRecoilState } from "recoil";
import WritePage from "../../component/unit/recoil/Write";
import { isEditState } from "../../store";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  });

  return (
    <>
      <WritePage />
    </>
  );
}
