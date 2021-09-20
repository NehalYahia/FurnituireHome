const AmountButton = (props) => {
  return (
    <div className="rounded-pill border row Amount">
      <div
        className="col-md-4"
        onClick={() => {
          console.log("minus");
        }}
      >
        <i class="fas fa-minus"></i>
      </div>

      <small className="col-md-4">1</small>
      <div className="col-md-4">
        <i
          class="fas fa-plus"
          onClick={() => {
            console.log("plus");
          }}
        ></i>
      </div>
    </div>
  );
};
export default AmountButton;
