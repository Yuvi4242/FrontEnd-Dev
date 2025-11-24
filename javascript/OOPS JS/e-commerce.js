const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 20 },
  { id: 3, name: "Mobile", category: "Electronics", price: 30000, stock: 2 }
];

// 1. FILTER
function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

// 2. SORT
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. REDUCE – Total inventory value
function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

// 4. GROUP BY CATEGORY
function groupByCategory() {
  return products.reduce((group, p) => {
    if (!group[p.category]) group[p.category] = [];
    group[p.category].push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
