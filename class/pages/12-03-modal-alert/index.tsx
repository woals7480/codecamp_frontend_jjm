import { Modal } from "antd";

const success = () => {
  Modal.success({
    content: "게시글 등록에 성공했습니다.",
  });
};

const error = () => {
  Modal.error({
    content: "비밀번호가 틀렸습니다.",
  });
};

const ModalAlert = () => {
  return (
    <>
      <button onClick={success}>성공!!</button>
      <button onClick={error}>실패!!</button>
    </>
  );
};

export default ModalAlert;
