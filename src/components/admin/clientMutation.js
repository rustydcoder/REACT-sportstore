import gql from "graphql-tag";

const storeProduct = gql`
  mutation($product: productStore) {
    storeProduct(product: $product) {
      id
      name
      category
      description
      price
    }
  }
`;
const updateProduct = gql`
  mutation($product: productUpdate) {
    updateProduct(product: $product) {
      id
      name
      category
      description
      price
    }
  }
`;

const deleteProduct = gql`
  mutation($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

const shipOrder = gql`
  mutation($id: ID!, $shipped: Boolean!) {
    shipOrder(id: $id, shipped: $shipped) {
      id
      shipped
    }
  }
`;

export { storeProduct, updateProduct, deleteProduct, shipOrder };
