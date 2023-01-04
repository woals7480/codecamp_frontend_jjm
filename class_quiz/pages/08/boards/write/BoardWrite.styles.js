import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border: 1px solid gray;
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px;
  padding: 30px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input``;

export const Button = styled.button`
  padding: 15px;
  color: ${(props) => (props.isTrue ? "blue" : "red")};
`;
