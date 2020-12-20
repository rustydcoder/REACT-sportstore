import React from "react";

const ValidationError = (props) =>
  props.errors
    ? props.errors.map((err) => (
        <h6 className="text-danger" key={err}>
          {err}
        </h6>
      ))
    : null;

export default ValidationError;
