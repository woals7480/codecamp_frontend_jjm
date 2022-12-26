import {
  FaqWrapper,
  HeaderProfile,
  HeaderTitle,
  HeaderWrapper,
  NavigationBar,
  NavigationInner,
  NavigationList,
  NavigationListActive,
  ProfileArrow,
  ProfileImage,
  ProfileName,
  QuestionArrow,
  Questions,
  QuestionTitle,
  QuestionWrapper,
  QuestionNum,
  Search,
  Wrapper,
  GnbWrapper,
  GnbList,
  GnbIcon,
  GnbName,
  GnbNameActive,
} from "../../styles/MyPage";

export default function MyPage() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderTitle>마이</HeaderTitle>
        <HeaderProfile>
          <ProfileImage src="/01/profile.jpg" />
          <ProfileName>정재민</ProfileName>
          <ProfileArrow src="/01/arrow-right.png" />
        </HeaderProfile>
      </HeaderWrapper>
      <NavigationBar>
        <NavigationInner>
          <NavigationList>공지사항</NavigationList>
          <NavigationList>이벤트</NavigationList>
          <NavigationListActive>FAQ</NavigationListActive>
          <NavigationList>Q&A</NavigationList>
        </NavigationInner>
      </NavigationBar>
      <FaqWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 01</QuestionNum>
            <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 02</QuestionNum>
            <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 03</QuestionNum>
            <QuestionTitle>아이디/비밀번호를 잊어벼렸어요.</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 04</QuestionNum>
            <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 05</QuestionNum>
            <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
        <QuestionWrapper>
          <Questions>
            <QuestionNum>Q. 06</QuestionNum>
            <QuestionTitle>비밀번호를 변경하고 싶어요.</QuestionTitle>
          </Questions>
          <QuestionArrow src="/01/arrow-bottom.png" />
        </QuestionWrapper>
      </FaqWrapper>
      <GnbWrapper>
        <GnbList>
          <GnbIcon src="/01/home.png" />
          <GnbName>홈</GnbName>
        </GnbList>
        <GnbList>
          <GnbIcon src="/01/itsload.png" />
          <GnbName>잇츠로드</GnbName>
        </GnbList>
        <GnbList>
          <GnbIcon src="/01/heart.png" />
          <GnbName>마이찜</GnbName>
        </GnbList>
        <GnbList>
          <GnbIcon src="/01/my.png" />
          <GnbNameActive>마이</GnbNameActive>
        </GnbList>
      </GnbWrapper>
    </Wrapper>
  );
}
