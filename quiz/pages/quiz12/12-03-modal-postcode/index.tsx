import { Modal } from "antd";
import { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import styled from "@emotion/styled/";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ModalPostcodePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState("");

  const onToggleModal = (data: any) => {
    setIsOpen((prev) => !prev);
    setData((prev) => data.address);
  };

  return (
    <Wrapper>
      <button onClick={onToggleModal}>모달열기</button>
      <div>{data}</div>
      {isOpen && (
        <Modal
          title={"주소검색"}
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={onToggleModal} />
        </Modal>
      )}
    </Wrapper>
  );
};
export default ModalPostcodePage;
