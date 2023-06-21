import React, { useState, useEffect } from "react";
import axios from "axios";
import "./productos.css";

function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      setProducts(response.data.slice(0, 100));
      console.log(response.data.slice(0, 100));
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (productId) => {
    console.log(`Producto agregado al carrito: ${productId}`);
  };

  return (
    <div className="container__productos">
      <h1>Carrito de compras</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.images[0]} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product._id)}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
