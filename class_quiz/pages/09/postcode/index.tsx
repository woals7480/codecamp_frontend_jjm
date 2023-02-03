import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function PostcodePage() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log(address.address);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onClickOpenModal}>주소입력</button>
      {isOpen && (
        <Modal open={true} onOk={onClickOpenModal} onCancel={onClickOpenModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
