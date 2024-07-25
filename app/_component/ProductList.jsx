"use client";
import productEndpoint from "../_utils/productEndpoint";
import React from 'react'
import Card from './Card'

function ProductList() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    productEndpoint
      .getLatestProducts()
      .then((res) => {
       
        setProducts(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 bg-white px-4 py-2">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
