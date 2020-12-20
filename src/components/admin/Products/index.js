import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import ProductsTable from "./ProductsTable";
import { productsList } from "../ClientQueries";
import { deleteProduct } from "../clientMutation";

const vars = {
  page: 1,
  pageSize: 10,
  sort: "id",
};

const Products = compose(
  graphql(productsList, {
    options: (props) => ({ variables: vars }),
    props: ({ data: { loading, products, refetch } }) => ({
      totalSize: loading ? 0 : products.totalSize,
      products: loading ? [] : products.products,
      currentPage: vars.page,
      pageCount: loading ? 0 : Math.ceil(products.totalSize / vars.pageSize),
      navigate: (page) => {
        vars.page = Number(page);
        refetch(vars);
      },
      pageSize: vars.pageSize,
      setPageSize: (size) => {
        vars.pageSize = Number(size);
        refetch(vars);
      },
      sortKey: vars.sort,
      setSortProperty: (key) => {
        vars.sort = key;
        refetch(vars);
      },
    }),
  }),
  graphql(deleteProduct, {
    options: {
      update: (
        cache,
        {
          data: {
            deleteProduct: { id },
          },
        }
      ) => {
        const queryDetails = { query: productsList, variables: vars };
        const data = cache.readQuery(queryDetails);
        data.products.products = data.products.products.filter(
          (p) => p.id !== id
        );
        data.products.totalSize = data.products.totalSize - 1;
        cache.writeQuery({ ...queryDetails, data });
      },
    },
    props: ({ mutate }) => ({
      deleteProduct: (id) => mutate({ variables: { id } }),
    }),
  })
)(ProductsTable);

export default Products;
