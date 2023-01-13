import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

const ModalCustom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log(address.address);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

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
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustom;
