import _ from "lodash";
import ListGroupBootstrap from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button'
const ListGroup = ({
  items,
  selectedItem,
  idPath = "_id",
  propertyValue,
  onItemSelect,
}) => {
  return (
    <ListGroupBootstrap >
      {items.map((item) => (
        <ListGroupBootstrap.Item
          key={item[idPath]}
          onClick={() => onItemSelect(item)}
          active={item === selectedItem}
  
        >
          {item[propertyValue]}
        </ListGroupBootstrap.Item>
        
      ))}
         
    </ListGroupBootstrap>
  );
};

export default ListGroup;
