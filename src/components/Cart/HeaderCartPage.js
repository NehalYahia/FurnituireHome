const Header = (props) => {
  return (
    

    <div className="row headerRow">
      <div className="col-md-7">
        <h5 className="headerStyle">{props.title}</h5>
      </div>

      <div className="col-md-5 ">
        <span className="headerStyle2">
          <img src={props.image1} className="iconStyle" />
          <img src="Rectangle.png" className="iconStyle" />
          <img src={props.image2} className="iconStyle" />
        </span>
      </div>
    </div>
  );
};

export default Header;
