import React from "react";
import "../styles/footer.css";
import { Link  } from "react-router-dom";

const FooterSection = ({ footer }) => {
  return (
    <div className="footermain">
      <div className="footer">
        <div>
          <p>support</p>
          {footer.support.map((items, index) => (
            <Link to={items.url} key={items.name}>{items.name}</Link>
          ))}
        </div>
        <div>
          <p>shop And Learn</p>
          {footer.shopAndLearn.map((items, index) => (
            <Link to={items.url} key={items.name}>{items.name}</Link>
          ))}
        </div>
        <div>
          <p>retail Store</p>
          {footer.retailStore.map((items, index) => (
            <Link to={items.url} key={items.name}>{items.name}</Link>
          ))}
        </div>
        <div>
          <p>about US</p>
          {footer.aboutUS.map((items, index) => (
            <Link to={items.url} key={items.name}>{items.name}</Link>
          ))}
        </div>
        <div>
          <p>contact Us</p>
          {footer.contactUs.map((items, index) => (
            <Link to={items.url} key={items.name}>{items.name}</Link>
          ))}
        </div>
      </div>
      <div className="footerunderline"></div>
      <div className="copyright">
        <h4>
          Copyright © 2010 - 2023 Xiaomi. All Rights Reserved{" "}
          <span>Sitemap</span>
        </h4>
        <h4>India / India</h4>
      </div>
    </div>
  );
};

export default FooterSection;
