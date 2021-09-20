const BackButton = (props) => {
  return (
    <div className="row backBtn mb-3">
      <div
        className="col-md-1 arrowStyle"
        onClick={() => {
          console.log("hi");
        }}
      >
        <i class="fas fa-arrow-left"></i>
      </div>
      <h6 className="col-md-5">{props.name} </h6>
    </div>
  );
};
export default BackButton;
