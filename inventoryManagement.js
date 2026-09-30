// Write your code here
// array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];
function logFirstProduct() {
  console.log(products.length)
  firstProduct = products[0];
  console.log(firstProduct);
}
logFirstProduct();
function updateProductName(x, newProduct) {
  return products[x] = newProduct;
}
function removeLastProduct() {
  return products.pop();
}
function addProduct(product) {
  return products.push(product);
}
addProduct("Tablet");
console.log(products);
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
