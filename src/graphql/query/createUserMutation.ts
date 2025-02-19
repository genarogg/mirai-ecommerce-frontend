import { gql } from '@apollo/client';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      type
      message
      token
    }
  }
`;

export default CREATE_USER_MUTATION;