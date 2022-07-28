import "./navbar.css";
import {Link} from "react-router-dom";
import {useContext} from 'react';
import StoreContext from "../context/storeContext";

function Navbar(){
  let cart = useContext(StoreContext).cart;


    return (<div className="navbar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ml-auto ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/catalog">Catalog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart ">
                  <span className='badge bg-primary'>{cart.length}</span>View cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin ">Admin Page</Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Separated link</a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );

}

export default Navbar;