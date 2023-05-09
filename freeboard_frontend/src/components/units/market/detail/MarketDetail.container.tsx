import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

import MarketDetailUI from "./MarketDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  FETCH_USEDITEM,
  FETCH_USEDITEMS_IPICKED,
  TOGGLE_USEDITEM_PICK,
} from "./MarketDetail.queries";
import { getViewitem } from "../../../../commons/libraries/getViewitem";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetail() {
  const [isPicked, setIsPicked] = useState(true);
  const router = useRouter();
  const { data: dataUseditem } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });

  const { data: dataIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, {
    variables: { search: "" },
  });
  const client = useApolloClient();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=c25b3dc8df9e973c15e09841afb0c4e6&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();
        geocoder.addressSearch(
          dataUseditem?.fetchUseditem.useditemAddress?.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              const marker = new window.kakao.maps.Marker({
                map,
                position: coords,
              });

              marker.setMap(map);
              map.setCenter(coords);
            }
          }
        );
      });
    };

    if (
      dataIPicked?.fetchUseditemsIPicked.filter(
        (el) => el._id === router.query.marketId
      ).length !== 1
    ) {
      setIsPicked(false);
    }

    getViewitem(dataUseditem?.fetchUseditem);
  }, [dataUseditem?.fetchUseditem.useditemAddress?.address]);

  const onClickPick = async () => {
    await client.mutate<
      Pick<IMutation, "toggleUseditemPick">,
      IMutationToggleUseditemPickArgs
    >({
      mutation: TOGGLE_USEDITEM_PICK,
      variables: { useditemId: String(router.query.marketId) },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_USEDITEM,
          data: {
            fetchUseditem: {
              _id: String(router.query.marketId),
              __typename: "Useditem",
              pickedCount: data?.toggleUseditemPick,
              name: dataUseditem?.fetchUseditem.name,
              remarks: dataUseditem?.fetchUseditem.remarks,
              contents: dataUseditem?.fetchUseditem.contents,
              price: dataUseditem?.fetchUseditem.price,
              images: dataUseditem?.fetchUseditem.images,
              useditemAddress: dataUseditem?.fetchUseditem.useditemAddress,
              createdAt: dataUseditem?.fetchUseditem.createdAt,
              seller: dataUseditem?.fetchUseditem.seller,
            },
          },
        });
      },
    });
    setIsPicked((prev) => !prev);
  };

  const onClickBuying = () => {
    Modal.confirm({
      content: "구매하시겠습니까 ?",
      onOk: async () => {
        try {
          await client.mutate<
            Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
            IMutationCreatePointTransactionOfBuyingAndSellingArgs
          >({
            mutation: CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
            variables: { useritemId: String(router.query.marketId) },
          });
          Modal.success({ content: "구매가 완료되었습니다." });
        } catch (error) {
          if (error instanceof Error) Modal.error({ content: error.message });
        }
      },
    });
  };

  return (
    <MarketDetailUI
      dataUseditem={dataUseditem}
      onClickPick={onClickPick}
      isPicked={isPicked}
      onClickBuying={onClickBuying}
    />
  );
}
