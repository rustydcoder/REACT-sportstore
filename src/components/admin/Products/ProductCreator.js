import React from "react";
import ValidatedForm from "../../form/ValidatedForm";
import { Mutation } from "react-apollo";
import { storeProduct, updateProduct } from "../clientMutation";

const ProductCreator = (props) => {
  const defaultAttrs = { type: "text", required: true };
  let formModel = [
    { label: "Name" },
    { label: "Description" },
    { label: "Category" },
    { label: "Price", attrs: { type: "Number" } },
  ];

  let mutation = storeProduct;

  if (props.mode === "edit") {
    mutation = updateProduct;
    formModel = [{ label: "Id", attrs: { disabled: true } }, ...formModel].map(
      (item) => ({
        ...item,
        attrs: {
          ...item.attrs,
          defaultValue: props.product[item.label.toLowerCase()],
        },
      })
    );
  }

  const navigate = () => props.history.push("/admin/products");

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-dark text-white">
          <div className="navbar-brand">SPORTS STORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col m-2">
          <Mutation mutation={mutation}>
            {(saveMutation, { client }) => (
              <ValidatedForm
                formModel={formModel}
                defaultAttrs={defaultAttrs}
                submitCallback={(data) => {
                  saveMutation({
                    variables: {
                      product: { ...data, price: Number(data.price) },
                    },
                  });
                  if (props.mode !== "edit") {
                    client.resetStore;
                  }
                  navigate();
                }}
                cancelCallback={navigate}
                submitText="Save"
                cancelText="Cancel"
              />
            )}
          </Mutation>
        </div>
      </div>
    </div>
  );
};

export default ProductCreator;
