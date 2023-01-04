import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 100px;
  border-top: 2px solid #bdbdbd;
  padding-bottom: 40px;
`;

export const CommentTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0;
`;

export const PencilIcon = styled.img`
  margin-right: 14px;
`;

export const Title = styled.span`
  font-size: 18px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 14px;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
`;

export const ContentsWrapper = styled.div`
  border: 2px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 100%;
  min-height: 108px;
  border: none;
  padding: 20px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #bdbdbd;
`;

export const ContentsLength = styled.div`
  color: #bdbdbd;
  padding: 14px 16px;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  width: 91px;
  height: 52px;
  padding: 14px 16px;
  cursor: pointer;
`;
