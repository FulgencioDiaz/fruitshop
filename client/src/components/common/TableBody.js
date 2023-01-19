import _ from "lodash";
import Button from 'react-bootstrap/Button'
import Counter from "./Counter";
import CartConsumer from "../../hooks/useCart";
const TableBody = ({ items, columns, onAddToCart }) => {

const [cart, setCart] = CartConsumer()

const handleAddToCart = (item) => {

  const element = cart.find(i => i === item)
  console.log(element)
  if (!element) {
    item.kg = 1

    setCart([...cart, item])
  } else {
    element.kg = element.kg + 1;
    setCart([...cart])
  }
}

  return (
    <tbody  >
      {items.map((item) => (
        <>
        <tr key={item._id}     >
          
          {columns.map(({ path, component }) => (
            <td  key={path}>
              {component ? component(_.get(item, path)) : _.get(item, path)}
            
            </td>
              
          ))}
    <Counter itemCarro={item}/>
        </tr>
         <Button onClick={() => handleAddToCart(item)} className="btn-primary">Añadir a carrito</Button>
         </>
      ))}
      
    </tbody>
  );
};

export default TableBody;
