const faker = require("faker");
let data = [];
const categories = ["Watersports", "Soccer", "Chess"];
faker.seed(100);

for (let i = 0; i < 503; i++) {
  let category = faker.helpers.randomize(categories);

  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price()),
  });
}

module.exports = function () {
  return {
    categories: categories,
    products: data,
    orders: [],
  };
};
