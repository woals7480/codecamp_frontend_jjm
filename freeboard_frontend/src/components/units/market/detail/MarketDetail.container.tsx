import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IMutation,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";

import MarketDetailUI from "./MarketDetail.presenter";
import {
  FETCH_USEDITEM,
  FETCH_USEDITEMS_IPICKED,
  TOGGLE_USEDITEM_PICK,
} from "./MarketDetail.queries";
import { getViewitem } from "../../../../commons/libraries/getViewitem";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetail() {
  const [isPicked, setIsPicked] = useState(true);
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const { data: dataIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_USEDITEMS_IPICKED, {
    variables: { search: "" },
  });

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
          data?.fetchUseditem.useditemAddress?.address,
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

    getViewitem(data?.fetchUseditem);
  }, [data?.fetchUseditem.useditemAddress?.address]);

  const onClickPick = async () => {
    await toggleUseditemPick({
      variables: { useditemId: String(router.query.marketId) },
      refetchQueries: [
        {
          query: FETCH_USEDITEM,
          variables: { useditemId: String(router.query.marketId) },
        },
        { query: FETCH_USEDITEMS_IPICKED, variables: { search: "" } },
      ],
    });

    setIsPicked((prev) => !prev);
  };

  return (
    <MarketDetailUI data={data} onClickPick={onClickPick} isPicked={isPicked} />
  );
}
