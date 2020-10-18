import { gql } from 'apollo-boost';

export const itemsQuery = gql`
  query itemsQuery {
    items {
        id
        title
        description
        price
        coverImage
    }
  }
`;