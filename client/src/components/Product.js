
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Product = ({ _id, name, price, image, cloudinaryId }) => {
  return (
    <Col>
      <Card>
      <img className="card-img-top" src={image} alt="Card image cap" />
        <Card.Body>
          <div >
          <Card.Title>
       Producto:<Link to={_id}>{name}</Link>
          </Card.Title>
          <Card.Text>name: {name}</Card.Text>
          <Card.Text>price: {price} x kg</Card.Text>
          </div>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;