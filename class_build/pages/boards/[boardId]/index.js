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
