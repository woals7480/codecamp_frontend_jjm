import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const JoinInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 18px 12px;
  border: solid 1px lightgray;
`;

interface IJoinInputsProps {
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}

export default function JoinInputs(props: IJoinInputsProps) {
  return (
    <>
      <JoinInput
        placeholder={props.placeholder}
        type={props.type}
        {...props.register}
      />
    </>
  );
}
