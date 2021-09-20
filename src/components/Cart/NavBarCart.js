// import "../custom.scss";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-white px-5 border borderNav">
      <div className="container-fluid ">
        <div className="d-flex">
          <span className="LogoImageStyle ">
            <img src="Logo.png" />
          </span>
          <div className="navbar-brand px-2">
            <span className="logoStyle">E-</span>Shop
          </div>
        </div>
        <div >
          <ul className="navbar-nav  collapse navbar-collapse ">
            <li className="nav-item navFont">
              <a className="nav-link" aria-current="page" href="#">
                Men
              </a>
            </li>
            <li className="nav-item navFont">
              <a className="nav-link" href="#">
                Women
              </a>
            </li>
            <li className="nav-item navFont ">
              <a className="nav-link" href="#">
                Kids
              </a>
            </li>
          </ul>
        </div>

        <div >
          <ul className="navbar-nav collapse navbar-collapse ">
            <li className="nav-item">
              <i class="fas fa-search"></i>
            </li>
            <li className="nav-item">
              <i class="fas fa-shopping-cart"></i>
            </li>
            <li className="nav-item">
              <i class="fas fa-user-alt"></i>
            </li>
          </ul>
        </div>
      </div>

    </nav >
  );
};

export default NavBar;
