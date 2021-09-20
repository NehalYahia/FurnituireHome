const PaymentMethods = (props) => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img src="Paypal.png"  />
        </div>
        <div class="col-3">
          <img src="Visa.png"  />
        </div>
        <div class="col-3">
          <img src="Master card.png"  />
        </div>

        <div class="w-5"></div>

        <div class="col-3">
          <img src="Maestro.png" />
        </div>
        <div class="col-3">
          <img src="Discover.png" />
        </div>
        <div class="col-3">
          <img src="iDEAL.png" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
