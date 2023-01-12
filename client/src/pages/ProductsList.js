import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Product from "../components/Product";

import axios from "axios";

const apiEndpoint = `http://localhost:3000/products/`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);

 

  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get(apiEndpoint);

      setProducts(data);
    }

    getProduct();
  }, []);

  return (
    <>
      <h2>
        <Link> Nuevo Product</Link>
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

export default ProductsList;

