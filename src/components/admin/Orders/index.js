import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { ordersSummaryQuery } from "../ClientQueries";
import OrdersTable from "./OrdersTable";
import { shipOrder } from "../clientMutation";

const vars = {
  onlyUnshipped: false,
  page: 1,
  pageSize: 10,
  sort: "id",
};

const Orders = compose(
  graphql(ordersSummaryQuery, {
    options: (props) => ({ variables: vars }),
    props: ({ data: { loading, orders, refetch } }) => ({
      totalSize: loading ? 0 : orders.totalSize,
      orders: loading ? [] : orders.orders,
      currentPage: vars.page,
      pageCount: loading ? 0 : Math.ceil(orders.totalSize / vars.pageSize),
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
  graphql(shipOrder, {
    props: ({ mutate }) => ({
      toggleShipped: (id, shipped) => mutate({ variables: { id, shipped } }),
    }),
  })
)(OrdersTable);

export default Orders;
