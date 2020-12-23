import { DataTypes } from "./Types";

const RestUrls = {
  [DataTypes.PRODUCTS]: `/api/products`,
  [DataTypes.CATEGORIES]: `/api/categories`,
  [DataTypes.ORDERS]: `/api/orders`,
};

const GraphQLUrl = `/graphql`;
const authUrl = `/login`;

export { RestUrls, GraphQLUrl, authUrl };
