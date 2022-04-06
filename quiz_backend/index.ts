import { ApolloServer, gql } from "apollo-server";
import { DataSource } from "typeorm";
import { Product } from "./Product.postgres";

// 1. 타입
const typeDefs = gql`
  type ProductReturn {
    _id: String
    seller: String
    name: String
    detail: String
    price: Int
    createAt: String
  }

  type Return {
    _id: String
    number: Int
    message: String
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProducts: [ProductReturn!]
    fetchProduct(productId: String): [ProductReturn!]
  }

  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
    updateProduct(
      productId: String
      updateProductInput: UpdateProductInput!
    ): String
    deleteProduct(productId: String): String
  }
`;

// 2. API
const resolvers = {
  Query: {
    fetchProducts: async () => {
      const result = await Product.find();
      return result;
    },
    fetchProduct: async (_: any, args: any) => {
      const result = await Product.find({
        where: { _id: args.productId },
      });
      return result;
    },
  },
  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "상품이 등록됐습니다.";
    },
    updateProduct: async (_: any, args: any) => {
      await Product.update(
        {
          _id: args.productId,
        },
        { ...args.updateProductInput }
      );
      return "상품이 수정되었습니다.";
    },
    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });
      return "상품이 삭제되었습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.189",
  port: 5024,
  username: "postgres",
  password: "postgres2021",
  database: "postgres",
  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공!!!");
    server.listen(4000).then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch(() => {
    console.log("연결실패!!!");
  });
