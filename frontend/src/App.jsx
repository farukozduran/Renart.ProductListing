import React, { useEffect, useState } from 'react';
import ProductCarousel from './components/ProductCarousel';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Ürünleri alırken hata oluştu:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProductCarousel products={products} />
          )}
    </div>
  );
}

