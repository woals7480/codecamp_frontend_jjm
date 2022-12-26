import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    #타입적는곳 <-graphql 주석#
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      #실제 우리가 전달할 변수 적는 곳 <-graphql 주석#
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_PRODUCT);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        //variables 이게 $ 역할
        seller: "맹구",
        createProductInput: {
          name: "노트북",
          detail: "가성비 노트북",
          price: 500000,
        },
      },
    });
    console.log(result);
    alert(result.data.createProduct.message);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL_API(동기) 요청하기</button>
    </>
  );
}
