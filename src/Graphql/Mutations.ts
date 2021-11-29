import { gql } from "@apollo/client";

export const  CREATE_TRANSACTION_MUTATION = gql`
mutation createUser (
    $category: String!
    $type:String!
    $value: Int!
    $date: String!){
    createTransaction (transaction: {
        category: $category,
        type: $type,
        value: $value,
        date: $date,
    }){
      id
      value
      type
      category
      date
    }
  }
  `;

  export const DELETE_TRANSACTION_MUTATION = gql`
  mutation deleteTransaction($id: ID!) {
    deleteTransaction(id: $id)
  }
`;