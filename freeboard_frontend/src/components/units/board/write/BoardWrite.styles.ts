import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./BoardWrite.types";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 102px;
  box-shadow: 0px 0px 10px gray;
`;

export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 16px;
`;

export const Writer = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Password = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const Contents = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
  padding-top: 14px;
`;

export const ZipcodeWrapper = styled.div`
  display: flex;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const SearchButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-left: 16px;
`;

export const Address = styled.input`
  width: 996px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Youtube = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const ImageWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  font-size: 14px;
  margin-right: 24px;
  background-color: #bdbdbd;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  width: 996px;
  padding-top: 40px;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "gold" : "default"};
  border: none;
  cursor: pointer;
`;

export const Error = styled.div`
  font-size: 12px;
  color: red;
`;

export const AddressModal = styled(Modal)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;
