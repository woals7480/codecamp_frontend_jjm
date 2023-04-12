import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #bdbdbd;
  margin-top: 30px;
`;

export const CommentWrapper = styled.div`
  width: 1200px;
  height: 128px;
  margin: 0 100px;
  margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

export const CommentInfo = styled.div``;

export const WriterWrapper = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Writer = styled.div``;

export const Contents = styled.div`
  margin-bottom: 20px;
  color: #4f4f4f;
`;

export const CreatedAt = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const OptionWrapper = styled.div``;

export const CommentIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
