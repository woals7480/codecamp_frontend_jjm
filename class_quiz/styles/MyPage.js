import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  margin: 100px;
  border: 1px solid gray;
  box-shadow: 0px 0px 10px gray;
`;

export const Search = styled.img``;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 40px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const HeaderTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ProfileArrow = styled.img`
  width: 24px;
  height: 24px;
`;

export const NavigationBar = styled.div`
  widtg: 100%;
  padding-bottom: 60px;
  padding-right: 50px;
  padding-left: 50px;
`;

export const NavigationInner = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding-left: 0px;
`;

export const NavigationList = styled.li`
  font-size: 30px;
  font-weight: 600;
  color: #cacaca;
  :hover {
    color: #ff1b6d;
    border-bottom: 3px solid #ff1b6d;
  }
`;

export const NavigationListActive = styled.li`
  font-size: 30px;
  font-weight: 600;
  color: #ff1b6d;
  border-bottom: 3px solid #ff1b6d;
`;

export const FaqWrapper = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-botton: 50px;
  border-top: 3px solid #cacaca;
  padding-right: 50px;
  padding-left: 50px;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 45px;
`;

export const Questions = styled.div``;

export const QuestionNum = styled.div`
  font-size: 18px;
  color: #adadad;
  margin-bottom: 5px;
`;

export const QuestionTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const QuestionArrow = styled.img`
  width: 40px;
  height: 40px;
`;

export const GnbWrapper = styled.div`
  padding-top: 10px;
  padding-right: 50px;
  padding-left: 50px;
  border-top: 3px solid #cacaca;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GnbList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GnbIcon = styled.img``;

export const GnbName = styled.div`
  font-size: 16px;
  color: #adadad;
  padding: 10px 0;
`;

export const GnbNameActive = styled.div`
  font-size: 16px;
  color: #ff1b6d;
  padding: 10px 0;
`;
