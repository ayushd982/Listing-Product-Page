import React, { useState } from 'react';

function Filters() {
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    
    return (
      <div className="product-filters">
        <h2>Filters</h2>
        <hr/>
        <div className="filter-category">
          <h2>Brand</h2>
          <ul className='price'> 
                <li><input type="radio" name="brand" value="nike" /> Number A</li>
                <li><input type="radio" name="brand" value="nike" /> Brand 2</li>
                <li><input type="radio" name="brand" value="amazon" /> Brand C</li>
                <li><input type="radio" name="brand" value="amazon" /> Miracle</li>
                <li><input type="radio" name="brand" value="amazon" /> Empty</li>
          </ul>
        </div>
        <hr/>
        <div className="filter-brand">
          <h2>Category</h2>
                <ul className='price'>
                    <li><input type="radio" name="brand" value="apple" /> Number A</li>
                    <li><input type="radio" name="brand" value="nike" /> Brand 2</li>
                    <li><input type="radio" name="brand" value="amazon" /> Brand C</li>
                    <li><input type="radio" name="brand" value="amazon" /> Miracle</li>
                    <li><input type="radio" name="brand" value="amazon" /> Empty</li>
                </ul>
        </div>
        <hr/>
        <h3>Price</h3>
      <ul className='price'>
        <li><input type="radio" name="price" value="0-100"/> $100 </li>
        <li><input type="radio" name="price" value="100-200" />$100-$199 </li>
        <li><input type="radio" name="price" value="200-599" />$200-$599 </li>
        <li><input type="radio" name="price" value="600-999" />$600-$999 </li>
        <li><input type="radio" name="price" value="999-1000" />$1000 </li>
      </ul>
      </div>
    );
  }

export default Filters;
