// 제공자일때 => 네이버(제공저)

import Head from "next/head";

export default function OpengraphProviderPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta
          property="og:description"
          content="나의 중고마켓에 오신걸 환영합니다."
        />
        <meta property="og:image" content="http://~~" />
      </Head>
      <div>
        중고마켓에 오신것을 환영합니다!(여기는 body이므로, 미리보기와는
        상관없음!!)
      </div>
    </>
  );
}
