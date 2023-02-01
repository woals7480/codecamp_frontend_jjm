import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
  const [checkList, setCheckList] = useState([]);
  const dataList = data?.fetchProducts;

  const onClicnCheckAll = () => {
    if (checkList.length !== dataList.length) {
      setCheckList(dataList);
    } else {
      setCheckList([]);
    }
  };

  const isChecked = (el) => {
    return checkList.some((cur) => cur._id === el._id);
  };

  const onCheckedItem = (el) => {
    if (checkList.every((cur) => cur._id !== el._id)) {
      setCheckList([...checkList, el]);
    } else {
      const result = checkList.filter((cur) => cur._id !== el._id);
      setCheckList(result);
    }
  };

  const onClickDelete = () => {
    checkList.map(async (el) => {
      await deleteProduct({
        variables: {
          productId: el._id,
        },
        refetchQueries: [{ query: FETCH_PRODUCTS }],
      });
    });
    setCheckList([]);
  };
  return (
    <div>
      <Row>
        <Column>
          <input
            type="checkbox"
            onChange={onClicnCheckAll}
            checked={checkList.length === dataList?.length}
          />
        </Column>
        <Column>판매자</Column>
        <Column>상품명</Column>
        <Column>상품내용</Column>
        <Column>상품가격</Column>
      </Row>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input
              type="checkbox"
              checked={isChecked(el)}
              onChange={() => {
                onCheckedItem(el);
              }}
            />
          </Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
        </Row>
      ))}
      <div>
        <button onClick={onClickDelete}>선택삭제하기</button>
      </div>
    </div>
  );
}
