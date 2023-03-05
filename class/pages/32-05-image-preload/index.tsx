import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

const PRELOAD_IMAGES = [
  "https://t1.daumcdn.net/cfile/tistory/9913CE425D7793582D",
];

export default function ImagePreloadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const onClickMove = () => {
    void router.push("/32-06-image-preload-moved");
  };
  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
