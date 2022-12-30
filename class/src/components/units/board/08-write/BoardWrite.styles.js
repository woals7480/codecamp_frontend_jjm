import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  font-size: ${(props) => props.aaa};
  background-color: ${(props) => props.bbb};
  color: ${(props) => (props.zzz ? "red" : "blue")};
`;
