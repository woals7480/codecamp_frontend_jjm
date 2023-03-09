import { useRouter } from "next/router";
import { useEffect } from "react";

const PRELOAD_IMAGES = [
  "https://t1.daumcdn.net/cfile/tistory/9913CE425D7793582D",
];

const PRELOADED_IMAGES = [];

export default function ImagePreloadPage() {
  const router = useRouter();

  useEffect(() => {
    const preloadImage = () => {
      PRELOAD_IMAGES.forEach((el) => {
        const img = new Image();
        img.src = el;
        img.onload = () => {
          PRELOADED_IMAGES.push(img);
        };
      });
    };
    preloadImage();
  }, []);

  const onClickMove = () => {
    void router.push("/20/preload/moved");
  };

  return (
    <>
      <button onClick={onClickMove}>이미지 보여주기</button>
    </>
  );
}
