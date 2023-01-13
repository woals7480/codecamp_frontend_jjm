import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

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

  const handleComplete = (address: Address) => {
    console.log(address);
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      {/* 모달 종료 방식 - 1. 모달 숨기는 방법 */}
      {/* <Modal
        title="모달 제목"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 1. 모달 삭제하는 방법 */}
      {isModalOpen && (
        <Modal
          title="모달 제목"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustom;
