import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0px;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  color: #f94a4a;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: felx;
`;

export const Button = styled.span`
  font-weight: bold;
  margin: 10px;
  color: gray;
  cursor: pointer;
`;

export const LoggedInWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoggedInImg = styled.img`
  width: 36px;
  height: 36px;
`;

export const LoggedInName = styled.span`
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;
