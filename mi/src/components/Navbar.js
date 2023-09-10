import React from "react";
import { Link } from "react-router-dom";
import miLogo from "../img/mi-logo.png";
import miHomeLogo from "../img/mi-home-logo.png";
import searchIcon from "../img/icons8-search.png";
import Cart from "../img/icons8-cart.png";
import userIcon from "../img/icons8-user.png";
import "../styles/Navbar.css";

import { useState, useEffect } from "react";
import data from "../data/data.json";

const Navbar = () => {
  const [navbarLinks, setAdditionalLinks] = useState([]);

  useEffect(() => {
    setAdditionalLinks(data.navbarLinks);
  }, []);

  return (
    <>
      <div className="navbarSection">
        <div>
          <Link to="/">
            <div className="logoCover">
              <img className="navLogo" src={miHomeLogo} alt="Mi Logo" />
              <img className="navLogo" src={miLogo} alt="" />
            </div>
          </Link>

          <ul style={{ marginBottom: 0, paddingLeft: 0 }}>
            <li className="hoverable">
              <Link to="/Store" className="navLink">
                Store
              </Link>
            </li>
            <li className="hoverable">
              <Link to="/Phone" className="navLink">
                Phone
              </Link>
              <ul className="additional-links ">
                <div className="brandLogo">
                  <li className="XiaomiLogo">
                    <Link
                      style={{ border: 0 }}
                      to="/Xiaomi"
                      className="navLink"
                    >
                      Xlaoml
                    </Link>
                  </li>
                  |
                  <li className="reamiLogo">
                    <Link style={{ border: 0 }} to="/Redmi" className="navLink">
                      Redmi
                    </Link>
                  </li>
                </div>
              </ul>
            </li>

            {navbarLinks.map((link, index) => (
              <li key={index} className="hoverable">
                <Link to={link.url} className="navLink">
                  {link.title}
                </Link>
                {link.additionalLinks && link.additionalLinks.length > 0 && (
                  <ul className="additional-links">
                    <div className="productCategory">
                      {link.additionalLinks.map(
                        (additionalLink, additionalIndex) => (
                          <ul key={additionalIndex}>
                            <Link
                              style={{ border: 0 }}
                              to={additionalLink.url}
                              className="navLink"
                            >
                              {additionalLink.title}
                            </Link>
                            <li>
                              {additionalLink.listItems.map(
                                (listItems, listItemsIndex) => (
                                  <ul key={listItemsIndex}>
                                    <Link
                                      style={{
                                        border: 0,
                                        fontWeight: 300,
                                        fontSize: "1rem",
                                      }}
                                      to={listItems.url}
                                      className="navLink"
                                    >
                                      {listItems.title}
                                    </Link>
                                  </ul>
                                )
                              )}
                            </li>
                          </ul>
                        )
                      )}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link className="navLink" to="/Discover">
            Discover
          </Link>
          <Link className="navLink" to="/Support">
            Support
          </Link>
          <img src={searchIcon} alt="search" />
          <img src={Cart} alt="" />
          <img src={userIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
