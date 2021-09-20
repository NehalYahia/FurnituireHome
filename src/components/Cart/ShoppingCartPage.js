import NavBar from "./NavBarCart";
import ProductTable from "./ProductTable";
import RowDetials from "./RowDetials";
import Header from './HeaderCartPage'

const ShoppingCartPage = (props) => {
  return(
  <>
    <NavBar />

    <Header title={"Shopping Cart"} image1={"active shop.png"} image2={"delivery.png"}/>
    
    <ProductTable />
    <RowDetials />
  </>
  )
};
export default ShoppingCartPage;
