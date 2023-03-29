import { useRouter } from "next/router";

export default function BoardsPage2() {
  const router = useRouter();
  return (
    <div>
      안녕하세요 게시판입니다! 동적페이지입니다. <br />
      게시글ID :{router.query.boardId}
    </div>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드 렌더링을 한다면? => out폴더로 생성 불가 => next.config.js에서 exportPathMap으로 현재 페이지 제외시키기
};
