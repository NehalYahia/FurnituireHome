const DeliveryMethod = (props) => {
  return (
      <div class="row delivRow">
        <div class="col-4">
          <div className="rounded-pill border  deliveryOptn">
            <div class="row">
              <div class="col-6">
                <img src="image0.png" />
              </div>
              <div class="col-2">
                <p>$20.00</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-4">
          <div className="rounded-pill border  deliveryOptn">
            <div class="row">
              <div class="col-6">
                <img src="DPD_logo(red).png" />
              </div>
              <div class="col-2">
                <p>$20.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-2"></div>

        <div class="col-4">
          <div className="rounded-pill border  deliveryOptn">
            <div class="row">
              <div class="col-6">
                <img src="DHL_Logo.png" />
              </div>
              <div class="col-2">
                <p>$20.00</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div className="rounded-pill border  deliveryOptn">
            <div class="row">
              <div class="col-6">
                <img src="DPD_logo(red)2015.png" />
              </div>
              <div class="col-2">
                <p>$20.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default DeliveryMethod;
