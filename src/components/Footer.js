import React from "react";
import logo from "../assests/images/logo.png";
// BsFacebook;
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGoogle,
  BsGithub,
  BsInstagram,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <div className="">
        <footer
          className="text-center text-lg-start text-white"
          style={{ backgroundColor: "#3e4551" }}
        >
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <img src={logo} alt="logo" className="w-25" />
                  <h5 className="text-uppercase">Haircare</h5>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0 ">
                  <h5 className="text-uppercase">About us</h5>

                  <ul className="list-unstyled mb-0 ">
                    <li>
                      <a href="#!" className="nav-link text-white">
                        Career
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Place
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Online Platform
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Custmore care
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">COMPANY</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Career Team
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Our Tech
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Help</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Help & FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Shipment
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Return Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">LEGAL</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Term & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white nav-link">
                        Cookie Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button
                  type="button"
                  className="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </p>
            </section>

            <hr className="mb-4" />

            <section className="mb-4 text-center">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsFacebook />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsTwitter />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsGoogle />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsInstagram />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsLinkedin />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <BsGithub />
              </a>
            </section>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
