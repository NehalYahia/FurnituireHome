import BackButton from "./BackButton";

import Promocode from './Promocode';
import CheckoutButton from './CheckoutButton';
const RowDetials = (props) => {
  return (
    <div className="row rowStyle">
      <div className="col-md-4">
        <BackButton name={"Continue Shopping"}/>
      </div>

      <div className="col-md-8 ">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Promocode />
          </div>
          <div className="col-md-4 d-flex mb-3  ">
            <h6 className="mx-3">Total Cost</h6><h6>$159,98</h6>
          </div>
          <div className="col-md-4">
            <CheckoutButton />
          </div>
        </div>
      </div>

    </div>
  );
};
export default RowDetials;
