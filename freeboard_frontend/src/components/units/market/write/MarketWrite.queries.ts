import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      #   seller
      #   soldAt
      createdAt
      #   updatedAt
      #   useditemAddress {
      #     _id
      #     zipcode
      #     address
      #     addressDetail
      #     lat
      #     lng
      #   }
    }
  }
`;