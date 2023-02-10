import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  width: 460px;
`;

export const LoginForm = styled.form``;

export const LoginInput = styled.input`
  width: 100%;
  height: 56px;
  font-size: 18px;
  padding: 18px 12px;
  margin-bottom: 20px;
  border: solid 1px lightgray;
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 56px;
  font-size: 18px;
  border: none;
  font-weight: bold;
  background-color: #5729ff;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const JoinButton = styled.button`
  border: none;
  background-color: transparent;
  color: gray;
  padding: 5px;
  font-weight: bold;
  cursor: pointer;
`;
