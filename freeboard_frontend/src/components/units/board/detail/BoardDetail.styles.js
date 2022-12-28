import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  padding: 80px 102px;
`;

export const Header = styled.div`
  width: 100%;
  padding-bottom: 25px;
  border-bottom: 2px solid #bdbdbd;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const CreatedAt = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const Body = styled.div`
  width: 100%;
  height: 800px;
  padding: 0 20px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
