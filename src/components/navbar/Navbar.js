import React from "react";
import { NavbarItems } from "./NavbarData";
import { NavLink } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import "./navbar.css";
// import { BsFillPersonFill } from "react-icons/bs";
// import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="NavMain navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logoSec">
            <img src={logo} alt="logo" className="w-100" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-center align-items-center collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="NavList nav-item ">
                  {/* <a className="" aria-current="page" href="#">
                  Home
                </a> */}
                  {NavbarItems.map((item, ind) => (
                    <NavLink
                      key={ind}
                      to={item.path}
                      className="NavItems nav-link  "
                      activeclassNameName="active"
                    >
                      {item.name}
                      {item.icon}
                    </NavLink>
                  ))}
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {/* <div className="iconSec d-flex">
              <div className="icons ps-3">
                <BsFillPersonFill />
              </div>
              <div className="icons ps-3">
                <AiOutlineShoppingCart />
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
