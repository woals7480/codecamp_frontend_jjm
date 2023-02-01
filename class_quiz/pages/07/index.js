import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUDCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      _id
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Column = styled.div`
  width: 20%;
`;

export default function DeleteProducts() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUDCT);

  console.log(data?.fetchProducts);

  const onClickDelete = (event) => {
    deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <div>
      <Row>
        <Column>
          <input type="checkbox" />
        </Column>
        <Column>판매자</Column>
        <Column>상품명</Column>
        <Column>상품내용</Column>
        <Column>상품가격</Column>
      </Row>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
        </Row>
      ))}
    </div>
  );
}
