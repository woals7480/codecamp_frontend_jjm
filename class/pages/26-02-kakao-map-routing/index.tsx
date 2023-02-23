import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    void router.push("/26-03-kakao-map-routed");
  };

  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      <Link href="/26-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
    </>
  );
}
