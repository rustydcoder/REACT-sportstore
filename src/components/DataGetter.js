import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "../data/actions/loadCreator";
import { DataTypes } from "../data/constant/Types";

const DataGetter = (props) => {
  const dispatch = useDispatch();

  const getData = () => {
    const dsData = props.products_params || {};
    const rtData = {
      _limit: props.pageSize || 5,
      _sort: props.sortKey || "name",
      _page: props.match.params.page || 1,
      category_like:
        (props.match.params.category || "") === "all"
          ? ""
          : props.match.params.category,
    };

    if (Object.keys(rtData).find((key) => dsData[key] !== rtData[key])) {
      dispatch(loadData(DataTypes.PRODUCTS, rtData));
    }
  };

  useEffect(() => {
    getData();
  });

  return <Fragment>{props.children}</Fragment>;
};

export default DataGetter;
