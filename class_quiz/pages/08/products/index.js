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

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 5px;
`;

const Column = styled.div`
  padding-right: 20px;
  border-left: 1px solid gray;
`;

export default function ProductListPage() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = async (e) => {
    await deleteProduct({
      variables: {
        productId: e.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>판매자 : {el.seller}</Column>
          <Column>상품명 : {el.name}</Column>
          <Column>상품설명 : {el.detail}</Column>
          <Column>상품가격 : {el.price}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
