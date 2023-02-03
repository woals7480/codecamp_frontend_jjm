import ProductDetailUI from "./productDetail.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./productDetail.quries";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../commons/types/generated/types";

export default function ProductDetail() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: { productId: String(router.query.products) },
  });

  const onClickMoveToEditPage = () => {
    void router.push(`/08/products/${String(router.query.products)}/edit`);
  };

  return (
    <ProductDetailUI
      data={data}
      onClickMoveToEditPage={onClickMoveToEditPage}
    />
  );
}
