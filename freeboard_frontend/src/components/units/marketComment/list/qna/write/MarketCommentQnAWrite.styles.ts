import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 100px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const WrapperQnA = styled.div`
  width: 1200px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const ArrowIconWrapper = styled.div`
  padding-left: 60px;
`;

export const ArrowIcon = styled.img`
  width: 20px;
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

export const ContentsError = styled.p`
  font-size: 12px;
  color: orange;
  margin-top: 10px;
`;
