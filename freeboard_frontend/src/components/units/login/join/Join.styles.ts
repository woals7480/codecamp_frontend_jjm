import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const JoinWrapper = styled.div`
  width: 460px;
`;

export const JoinForm = styled.form``;

export const JoinInputWrapper = styled.div`
  margin-top: 20px;
`;

export const JoinInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 18px 12px;
  border: solid 1px lightgray;
`;

export const JoinInpuError = styled.span`
  font-size: 12px;
  color: orange;
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  background-color: #5729ff;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

export const ConfirmError = styled.span`
  color: red;
  font-size: 12px;
`;
