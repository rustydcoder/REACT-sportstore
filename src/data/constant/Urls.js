import { DataTypes } from "./Types";

const protocol = "http",
  hostname = "localhost",
  port = 3500;

export const RestUrls = {
  [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
  [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
  [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
};
