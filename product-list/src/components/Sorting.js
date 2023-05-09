import React, { useState } from 'react';

const products = [
 
];

const SortBy = () => {
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'highToLow') {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <label>
        Sort by:
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="lowToHigh">Price low to high</option>
          <option value="highToLow">Price high to low</option>
        </select>
      </label>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortBy;
