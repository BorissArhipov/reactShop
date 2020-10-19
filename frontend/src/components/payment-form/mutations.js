import { gql } from 'apollo-boost';

export const addClientMutation = gql`
  mutation addClient($orderId: String!, $name: String!, $adress: String!) {
    addClient(name: $name, adress: $adress, orderId: $orderId) {
      name,
      adress,
      orderId
    }
  }
`;

export const addOrderItemMutation = gql`
  mutation addOrderItem($id: String!, $name: String!, $itemId: ID, $itemCount: Int!) {
    addOrderItem(name: $name, id: $id, itemId: $itemId, itemCount: $itemCount) {
        id,
        name,
        itemCount
    }
  }
`;