import styled from "@emotion/styled";

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
  font-weight: 500;
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

export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  cursor: pointer;
`;
