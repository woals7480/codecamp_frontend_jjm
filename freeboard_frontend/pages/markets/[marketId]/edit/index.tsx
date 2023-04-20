import { gql, useQuery } from "@apollo/client";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  console.log(router.query.marketId);
  console.log(data?.fetchUseditem);
  return <MarketWrite isEdit={true} data={data} />;
}
