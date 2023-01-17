import _ from "lodash";
import Button from 'react-bootstrap/Button'

const TableBody = ({ items, columns }) => {
  return (
    <tbody  >
      {items.map((item) => (
        <>
        <tr key={item._id} >
          
          {columns.map(({ path, component }) => (
            <td  key={path}>
              {component ? component(_.get(item, path)) : _.get(item, path)}
              
            </td>
          ))}
    
        </tr>
         <Button className="btn-primary">Añadir a carrito</Button>
         </>
      ))}
      
    </tbody>
  );
};

export default TableBody;
