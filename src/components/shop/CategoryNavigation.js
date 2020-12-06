import React, { Fragment } from "react";
import { ToggleLink } from "../ToggleLink";

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
    </Fragment>
  );
};
