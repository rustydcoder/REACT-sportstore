const faker = require("faker");
let products = [];
const categories = ["Watersports", "Soccer", "Chess"];
faker.seed(100);

for (let i = 0; i < 503; i++) {
  let category = faker.helpers.randomize(categories);

  products.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price()),
  });
}

let orders = [];
for (let i = 1; i < 103; i++) {
  let fname = faker.name.firstName();
  let sname = faker.name.lastName();

  let order = {
    id: i,
    name: `${fname} ${sname}`,
    email: faker.internet.email(fname, sname),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    zip: faker.address.zipCode(),
    country: faker.address.country(),
    shipped: faker.random.boolean(),
    products: [],
  };

  let productCount = faker.random.number({ min: 1, max: 5 });
  let products_ids = [];

  while (products_ids.length < productCount) {
    let candidateId = faker.random.number({ min: 1, max: products.length });
    if (products_ids.indexOf(candidateId) === -1) {
      products_ids.push(candidateId);
    }
  }

  for (let j = 0; j < productCount; j++) {
    order.products.push({
      quantity: faker.random.number({ min: 1, max: 10 }),
      products_ids: products_ids[j],
    });
  }

  orders.push(order);
}

module.exports = () => ({ categories, products, orders });
