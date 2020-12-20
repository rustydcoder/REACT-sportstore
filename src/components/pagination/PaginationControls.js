import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import PaginationButtons from "./PaginationButtons";

const PaginationControls = (props) => {
  const pageSizes = props.sizes || [5, 10, 25, 100];
  const sortKeys = props.keys || ["Name", "Price"];
  const shopStore = useSelector((state) => state.shopReducer);
  const { page, category } = useParams();

  const handlePageSizeChange = (e) => props.setPageSize(e.target.value);

  const handleSortPropertyChange = (e) => props.setSortProperty(e.target.value);

  const currentPage = Number(page);

  const pageCount = Math.ceil(
    shopStore.products_total / (Number(shopStore.pageSize) || pageSizes[0])
  );

  const navigate = (page) =>
    props.history.push(`/shop/products/${category}/${page}`);

  return (
    <div className="m-2">
      <div className="text-center m-1">
        <PaginationButtons
          currentPage={props.currentPage || currentPage}
          pageCount={props.pageCount || pageCount}
          navigate={props.navigate || navigate}
        />
      </div>
      <div className="form-inline justify-content-center">
        <select
          className="form-control"
          onChange={handlePageSizeChange}
          value={shopStore.pageSize || props.pageSize || pageSizes[0]}
        >
          {pageSizes.map((s) => (
            <option value={s} key={s}>
              {s} per page
            </option>
          ))}
        </select>
        <select
          className="form-control"
          onChange={(e) =>
            props.setSortProperty(e.target.value) || handleSortPropertyChange(e)
          }
          value={shopStore.sortKey || props.sortKey || sortKeys[0]}
        >
          {sortKeys.map((k) => (
            <option value={k.toLowerCase()} key={k}>
              Sort By {k}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PaginationControls;
