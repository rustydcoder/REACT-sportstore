import { DataTypes } from "./Types";

const protocol = "http",
  hostname = "localhost",
  port = 3500;

const baseUrl = `${protocol}://${hostname}:${port}`;

const RestUrls = {
  [DataTypes.PRODUCTS]: `${baseUrl}/api/products`,
  [DataTypes.CATEGORIES]: `${baseUrl}/api/categories`,
  [DataTypes.ORDERS]: `${baseUrl}/api/orders`,
};

const GraphQLUrl = `${baseUrl}/graphql`;

export { RestUrls, GraphQLUrl };
