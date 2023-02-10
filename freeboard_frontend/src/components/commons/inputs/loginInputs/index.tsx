import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const LoginInput = styled.input`
  width: 100%;
  height: 56px;
  font-size: 18px;
  padding: 18px 12px;
  border: solid 1px lightgray;
`;

interface ILoginInputsProps {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

export default function LoginInputs(props: ILoginInputsProps) {
  return (
    <>
      <LoginInput type={props.type} {...props.register} />
    </>
  );
}
