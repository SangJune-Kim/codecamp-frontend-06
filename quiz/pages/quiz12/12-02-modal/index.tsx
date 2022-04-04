import { Modal } from "antd";
import { useState } from "react";

const ModalAlertPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onToggleModal}>모달열기</button>
      {isOpen && (
        <Modal
          title={"게시글 등록"}
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          게시글이 등록되었습니다.
        </Modal>
      )}
    </div>
  );
};
export default ModalAlertPage;
