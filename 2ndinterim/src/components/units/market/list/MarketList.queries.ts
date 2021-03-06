import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      tags
      price
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        createdAt
        updatedAt
        deletedAt
      }
      seller {
        _id
        name
        picture
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
