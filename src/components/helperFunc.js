const getLinkClasses = (item, margin = false) =>
  margin
    ? `btn btn-secondary m-1
    ${!item || item === 0 ? "disabled" : ""}`
    : `btn btn-sm bg-dark text-white
       ${!item || item === 0 ? "disabled" : ""}`;

const GetMessages = (elem) => {
  const messages = [];
  if (elem.validity.valueMissing) {
    messages.push("Value required");
  }
  if (elem.validity.typeMismatch) {
    messages.push(`Invalid ${elem.type}`);
  }
  return messages;
};

export { GetMessages, getLinkClasses };
