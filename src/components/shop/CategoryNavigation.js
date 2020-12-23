import React, { Fragment } from "react";
import { ToggleLink } from "../ToggleLink";
import { Link } from "react-router-dom";

const CategoryNavigation = (props) => {
  const { baseUrl, categories } = props;

  return (
    <Fragment>
      <ToggleLink to={`${baseUrl}/all`} exact={false}>
        All
      </ToggleLink>

      {categories &&
        categories.map((cat) => (
          <ToggleLink key={cat} to={`${baseUrl}/${cat.toLowerCase()}`}>
            {cat}
          </ToggleLink>
        ))}
      <Link
        className="btn btn-block btn-secondary fixed-bottom m-2 col-3"
        to="/admin"
      >
        Administration
      </Link>
    </Fragment>
  );
};

export default CategoryNavigation;
