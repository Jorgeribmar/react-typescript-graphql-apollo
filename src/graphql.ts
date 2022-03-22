import gql from "graphql-tag";

export const GET_CHOCOLATES = gql`
  {
    getChocolates {
      id
      title
      description
      completed
    }
  }
`;

export const ADD_CHOCOLATE = gql`
  mutation AddChocolate($title: String!, $description: String!) {
    addChocolate(input: { title: $title, description: $description }) {
      id
      title
      description
      completed
    }
  }
`;
