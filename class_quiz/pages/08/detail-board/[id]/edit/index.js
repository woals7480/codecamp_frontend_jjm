import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductRegistration from "../../../boards/write/BoardWrite.container";

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

export default function DynamicRoutedPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.id,
    },
  });

  return <ProductRegistration isEdit={true} data={data} />;
}
