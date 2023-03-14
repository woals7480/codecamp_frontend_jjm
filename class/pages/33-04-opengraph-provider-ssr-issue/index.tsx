// 제공자일때 => 네이버(제공저)

import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../src/commons/types/generated/types";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function OpengraphProviderPage(props: any) {
  // const { data } = useQuery<
  //   Pick<IQuery, "fetchUseditem">,
  //   IQueryFetchUseditemArgs
  // >(FETCH_USEDITEM, {
  //   variables: { useditemId: "63f354e01182750028ee6e9a" },
  // });

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.qqq.remarks} />
        <meta property="og:image" content={props.qqq.images?.[0]} />
      </Head>
      <div>
        중고마켓에 오신것을 환영합니다!(여기는 body이므로, 미리보기와는
        상관없음!!)
      </div>
    </>
  );
}

// getServerSideProps는 존재하는 단어이므로 변경 불가능
// 여기는 서버에서만 실행된(Webpack 프론트엔드 서버프로그램)
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다.");
  try {
    const graphQLClient = new GraphQLClient(
      "https://backendonline.codebootcamp.co.kr/graphql"
    );
    const result = await graphQLClient.request(FETCH_USEDITEM, {
      useditemId: "63f354e01182750028ee6e9a",
    });

    return {
      props: {
        qqq: {
          name: result.fetchUseditem.name,
          remarks: result.fetchUseditem.remarks,
          images: result.fetchUseditem.images,
        },
      },
    };
  } catch (error) {}
};
