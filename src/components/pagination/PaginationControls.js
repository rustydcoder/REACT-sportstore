import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationButtons from "./PaginationButtons";
import { setPageSize, setSortProperty } from "../../data/actions/loadCreator";
import { useParams } from "react-router-dom";

const PaginationControls = (props) => {
  const pageSizes = [5, 10, 25, 100];
  const sortKeys = ["Name", "Price"];
  const dispatch = useDispatch();
  const shopStore = useSelector((state) => state.shopReducer);
  const { page, category } = useParams();

  const handlePageSizeChange = (e) => dispatch(setPageSize(e.target.value));
  const handleSortPropertyChange = (e) =>
    dispatch(setSortProperty(e.target.value));

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
          currentPage={currentPage}
          pageCount={pageCount}
          navigate={navigate}
        />
      </div>
      <div className="form-inline justify-content-center">
        <select
          className="form-control"
          onChange={handlePageSizeChange}
          value={shopStore.pageSize || pageSizes[0]}
        >
          {pageSizes.map((s) => (
            <option value={s} key={s}>
              {s} per page
            </option>
          ))}
        </select>
        <select
          className="form-control"
          onChange={handleSortPropertyChange}
          value={shopStore.sortKey || sortKeys[0]}
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
