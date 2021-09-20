import NavBar from "./NavBarCart";
import ProductTable from "./ProductTable";
import RowDetials from "./RowDetials";
import Header from "./HeaderCartPage";
import PaymentMethods from "./PaymentMethods";
import YourCart from "./YourCart";
import DeliveryMethod from "./DeliveryMethod";
import InputField from "./InputField";
import BackButton from "./BackButton";
const CheckoutPage = (props) => {
  return (
    <>
      <NavBar />

      <Header
        title={"Shipping and Payment"}
        image1={"unactive.png"}
        image2={"active.png"}
      />
      <div class="row checkoutRow">
        <div class="col-4">
          <button className=" rounded-pill border checkoutBtn px-5 py-2 mb-3 ">
            Log In
          </button>
          <button className=" rounded-pill border SignupoutBtn px-5 py-2 mb-3 ">
            Sign up
          </button>
          <h5 className="headerStyle">Shipping Information</h5>
          <div class="row ">
            <div class="col-6">
              <InputField name={"Email"} />
            </div>
            <div class="col-6">
              <InputField name={"Address"} />
            </div>
          </div>
          <div class="row ">
            <div class="col-6">
              <InputField name={"First Name"} />
            </div>
            <div class="col-6">
              <InputField name={"City"} />
            </div>
          </div>
          <div class="row ">
            <div class="col-6">
              <InputField name={"Last Name"} />
            </div>
            <div class="col-6">
              <InputField name={"Postal Code/ZIP"} />
            </div>
          </div>
          <div class="row ">
            <div class="col-6">
              <InputField name={"Phone Number"} />
            </div>
            <div class="col-6">
              <InputField name={"Poland"} />
            </div>
          </div>
        </div>
        <div class="col-4">
          <h5 className="headerStyle">Payment Methods</h5>

          <PaymentMethods />
          <h5 className="headerStyle">Delivery Methods</h5>
          <DeliveryMethod />
        </div>
        <div class="col-4">
          <h5 className="headerStyle">Your Cart</h5>
          <YourCart />
          <div className="rounded-pill border d-flex justify-content-between px-3 py-1 align-items-center mb-3 totalCostStyle ">
            <p>Total Cost </p>
            <p className="priceStyle">$159,98</p>
          </div>
        </div>
      </div>

      <div className="row rowStyle">
        <div className="col-md-4 "  >
          <BackButton name={"Back"} />
        </div>

        <div className="col-md-8  ">
          <div className="row">
            <div className="col-md-4 LbuttonsStyle ">
              <button className=" rounded-pill border SignupoutBtn px-5 py-2 mb-3 ">
                CONTINUE SHOPPING
              </button>
            </div>
            <div className="col-md-4 ">
              <button className=" rounded-pill border checkoutBtn px-5 py-2 mb-3 ">
                PROCEED TO PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
