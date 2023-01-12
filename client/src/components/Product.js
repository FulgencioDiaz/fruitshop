import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Product = ({ _id, name, price, image, cloudinaryId }) => {
  return (
    <Col>
      <Card>
        <Card.Body>
        <img class="card-img-top" src="..." alt="Card image cap">{image}</img>
          <Card.Title>
           Designation: <Link to={_id}>{name}</Link>
          </Card.Title>
          <Card.Text>name: {name}</Card.Text>
          <Card.Text>price: {price}</Card.Text>


        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;