const DataTypes = {
  PRODUCTS: "products",
  CATEGORIES: "categories",
  ORDERS: "orders",
};

const ActionTypes = {
  DATA_LOAD: "data_load",
  DATA_SET_SORT_PROPERTY: "data_set_sort",
  DATA_SET_PAGESIZE: "data_set_pagesize",
  DATA_STORE: "data_store",
  CART_ADD: "cart_add",
  CART_UPDATE: "cart_update",
  CART_REMOVE: "cart_delete",
  CART_CLEAR: "cart_clear",
};

export { DataTypes, ActionTypes };
