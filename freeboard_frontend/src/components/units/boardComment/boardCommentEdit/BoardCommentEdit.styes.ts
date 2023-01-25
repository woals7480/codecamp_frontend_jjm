import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrapper = styled.div`
  width: 1200px;
  height: 128px;
  margin: 0 100px;
  margin-bottom: 25px;
  border-bottom: 1px solid #bdbdbd;
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

export const WriterRating = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const CommentRating = styled(Rate)`
  font-size: 20px;
  margin-left: 18px;
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

export const UpdateIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 15px;
`;

export const CommentEditWrapper = styled.div`
  width: 1200px;
  margin: 0 100px;
  margin-bottom: 25px;
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

export const EditContents = styled.textarea`
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
  background-color: gold;
  color: black;
  width: 91px;
  height: 52px;
  padding: 14px 16px;
  cursor: pointer;
  border: 1px solid gold;
`;

export const PasswordInput = styled.input`
  width: 100%;
  margin-top: 10px;
`;
