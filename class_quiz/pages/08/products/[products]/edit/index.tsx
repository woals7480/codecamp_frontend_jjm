import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchProductArgs,
} from "../../../../../src/commons/types/generated/types";

import ProductWrite from "../../../../../src/components/commons/08-products/write/productWrite.container";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchProduct">,
    IQueryFetchProductArgs
  >(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.products),
    },
  });

  return <ProductWrite isEdit={true} data={data} />;
}
