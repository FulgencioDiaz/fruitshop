import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableBootstrap from "react-bootstrap/Table";


const Table = ({ items, columns, onSort }) => {
  return (
    <>
  
    <TableBootstrap className="tableAllProducts">
      <TableHead  columns={columns} onSort={onSort} />
      <TableBody  items={items} columns={columns} className="eachCard"/>
    
    </TableBootstrap>


    </>
    
  );
};

export default Table;
