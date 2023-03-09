import styled from "@emotion/styled";
import DaumPostcodeEmbed from "react-daum-postcode";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Modal } from "antd";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

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
  flex-direction: column;
`;

export const WriterForm = styled.form``;

export const InputWrapper = styled.div`
  padding-top: 40px;
`;

export const Label = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 16px;
`;

export const Writer = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding-left: 16px;
`;

export const InputError = styled.span`
  font-size: 12px;
  color: orange;
`;

export const ButtonWrapper = styled.div`
  margin: 95px 0px;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  cursor: pointer;
`;

export const ContentsInput = styled(ReactQuill)``;

export const AddressSearchInput = styled(DaumPostcodeEmbed)``;

export const AddressModal = styled(Modal)``;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Zipcode = styled.div`
  display: flex;
`;

export const ZipcodeInput = styled.input`
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
  width: 588px;
  height: 52px;
  margin-top: 16px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;
