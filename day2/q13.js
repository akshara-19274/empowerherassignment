function processCategories(categories) {
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
  const sortedCategories = Object.entries(counts).sort((a, b) => b[1] - a[1]).map(entry => entry[0]);
  return { counts, sortedCategories };
}
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const result = processCategories(categories);
console.log("Counts:", result.counts);
console.log("Sorted Categories:", result.sortedCategories);