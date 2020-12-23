import React from "react";
import OrderRow from "./OrderRow";
import PaginationControls from "../../pagination/PaginationControls";

const OrdersTable = (props) => {
  const toggleShip = ({ id, shipped }) => {
    props.toggleShipped(id, !shipped);
  };

  return (
    <div>
      <h4 className="bg-info text-white text-center p-2">
        {props.totalSize} Orders
      </h4>

      <PaginationControls keys={["ID", "Name"]} {...props} />

      <table className="table table-sm table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th className="text-right">Total</th>
            <th className="text-center">Shipped</th>
          </tr>
        </thead>
        <tbody>
          {props.orders.map((order) => (
            <OrderRow key={order.id} order={order} toggleShipped={toggleShip} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
