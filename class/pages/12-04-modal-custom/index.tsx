import { Modal } from "antd";
import { useState } from "react";

const ModalCustom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>
      <Modal
        title="모달 제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        비밀번호 입력 : <input type="password" />
      </Modal>
    </>
  );
};

export default ModalCustom;
