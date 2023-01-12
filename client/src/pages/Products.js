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
      <h2>
      <Link to="/products/list"> Todos los productos</Link><Link to="/new-product">Nuevo Product</Link>
      </h2>
      <Row xs={1} md={2} className="g-4">
        {products.map((product) => (
          <Product
            key={product._id}
            {...product}
          />
        ))}
      </Row>
    </>
  );
};

export default Products;

