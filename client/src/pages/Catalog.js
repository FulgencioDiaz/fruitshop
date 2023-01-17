import { useState } from "react";
import _ from "lodash";

import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import Pagination from "../components/common/Pagination";
import ListGroup from "../components/common/ListGroup";
import Table from "../components/common/Table";
import SearchBox from "../components/common/SearchBox";

import useProducts from "../hooks/useProducts";

import paginate from "../utils/paginate";

import AuthConsumer from "../hooks/useAuth";

const pageSize = 10;

const columns = [
  {
    path: "image",
    label: "Imagen",
    component: (image) => <img alt="producto" width="100" src={image} />,
  },
  { path: "name", label: "Nombre", sortable: true },
  { path: "price", label: "Precio x kg", sortable: true },

  

];

function Catalog() {
  const { isLoadingProducts, products } = useProducts();
 

  const [currentPage, setCurrentPage] = useState(1);

  const [sortedColumn, setSortedColumn] = useState({});
  const [searchedProductName, setSearchedProductName] = useState("");

  const [user, dispatch] = AuthConsumer();
  console.log(user);
 

  const handleProductNameSearch = (query) => {
    setSearchedProductName(query);
    setCurrentPage(1);
  };

  const handleColumnSort = (column) => {
    const order = sortedColumn.order === "asc" ? "desc" : "asc";

    setSortedColumn({ ...column, order });
  };

  if (isLoadingProducts)
    return <Spinner animation="border" />;

  let allProducts = products;

  if (!_.isEmpty(sortedColumn))
    allProducts = _.orderBy(
      allProducts,
      [sortedColumn.path],
      [sortedColumn.order]
    );

  if (searchedProductName) {
    allProducts = allProducts.filter((product) =>
      product.name.includes(searchedProductName)
    );
  }

  const [filteredProducts, pageProductsCount] = paginate(
    allProducts,
    pageSize,
    currentPage
  );

  return (
    <>
      <Row>
     
       
        <Col sm={12} md={8}>
          <h2>Products ({pageProductsCount})</h2>
          <SearchBox
            value={searchedProductName}
            onSearch={handleProductNameSearch}
            placeholder="Buscar producto"
          />
          <Table
            items={filteredProducts}
            columns={columns}
            onSort={handleColumnSort}
          />  
          <Pagination
            pageSize={pageSize}
            itemsCount={allProducts.length}
            currentPage={currentPage}
            onChangePage={setCurrentPage}
          />
        </Col>
      </Row>
    </>
  );
}

export default Catalog;
