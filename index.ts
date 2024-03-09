import products from "./products";
let productName: string = "tote bag";

let shipping: number;
let taxPercent: number;
let total: number;
let cost: number;
const shippingAddress: string = "575 Broadway, Kansas City, Kansas";

const product = products.filter(
  (product) => product.name === productName.toLowerCase()
)[0];

product.preOrder === "true"
  ? console.log("We'll send you a message when it's on the way")
  : null;

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("We have provided free shipping for this product");
} else {
  shipping = 5;
}

if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.5;
}

const taxTotal: number = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
