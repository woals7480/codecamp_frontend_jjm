// console.log("반갑습니다.");

import { DataSource } from "typeorm";
import { Board } from "./Board.postgres";

import { ApolloServer, gql } from "apollo-server";

// DOCS
const typeDefs = gql`
  input MyBoard {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [MyBoard]
  }

  type Mutation {
    # 연습용(example 방식)
    # createBoard(writer: String, title: String, contents: String): String

    # 실무용(backend 방식)
    createBoard(createBoardInput: CreateBoardInput!): String
  }
`;

// API
const resolvers = {
  Query: {
    fetchBoards: async () => {
      //모두꺼내기
      const result = await Board.find();

      // 하나만 골라서 꺼내기
      // Board.findOne({ where: { number: 3 } });
      return result; //[{},{},{}, ...]
    },
  },

  mutation: {
    createBoard: async (parent: any, args: any, context: any, info: any) => {
      await Board.insert({
        ...args.createBoardInput,

        //하나 하나 모두 입력하는 방식
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "createBoard를 요청하셨습니다.";
    },

    // updateBoard: async () => {
    //   await Board.update({ number: 3 }, { writer: "영희" }); //3번 게시글 작성자를 영희로 바꿔줘
    //   return "게시글 수정에 성공하셨습니다.";
    // },

    // deleteBoard: async () => {
    //   await Board.delete({ number: 3 }); // 3번 게시글을 삭제해줘
    //   await Board.update({number: 3 },{ isDeleted : true}) //실무에서는 실제로 삭제하지 않고 isDeleted라는 컬럼이 true이면 삭제되었다고 가정함
    //   await Board.update({number: 3 },{ deletedAt : new Date()}) //deletedAt이 null이면 삭제 안된 게시글, new Date() 시간이 들어가 있으면 그 시간에 삭제되었다고 가정함

    //   return "게시글을 삭제하셨습니다.";
    // },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  cors: true,

  // 선택한사이트만 풀어주고 싶을때
  // cors:{
  //   origin:["http://naver.com"]
  // }
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  logging: true,
  synchronize: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB접속에 성공했습니다.");
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    console.log("DB접속에 실패했습니다.");
    console.log("원인 : ");
    console.log(error);
  });
