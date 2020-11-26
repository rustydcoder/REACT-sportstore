export const getLinkClasses = (item, margin = false) =>
  margin
    ? `btn btn-secondary m-1
    ${!item || item === 0 ? "disabled" : ""}`
    : `btn btn-sm bg-dark text-white
       ${!item || item === 0 ? "disabled" : ""}`;

export const filterProducts = (products = [], category) =>
  !category || category === "All"
    ? products
    : products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
