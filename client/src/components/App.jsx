import axios from 'axios';
import React from 'react';

const { useState, useEffect } = React;

export default function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get('/products')
      .then((products) => setProduct(products.data[0]))
      .catch((err) => console.error('There was a problem retrieving product data: ', err));
  }, []);

  return (
    <div id="App">
      <p>Hello, world!</p>
    </div>
  );
}
