import { useHistory } from "react-router-dom";
const CheckoutButton=props=>{
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/Checkout");
      }
    return(
        <button className=" rounded-pill border checkoutBtn px-5 py-2 mb-3 " onClick={handleRoute}>CHECKOUT</button>
    )
    }
    export default CheckoutButton;