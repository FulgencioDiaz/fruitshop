import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Product from "../components/Product";

import axios from "axios";

const apiEndpoint = `http://localhost:3000/products/`;

const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get(apiEndpoint);
      console.log(data)
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <>
  
      <Row xs={1} md={4} className="g-4">
        {products.map((product) => (
          <Product className="product-card"
            key={product._id}
            {...product}
          />
        ))}
      </Row>
    </>
  );
};

export default Products;

