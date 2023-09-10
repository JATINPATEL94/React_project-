import React from "react";
import "../styles/Service.css";

const Service = () => {
  return (
    <div className="serviceContainer">
      <div className="leftcontainer boxShadow">
        <h2>XIAOMI CARE</h2>
        <div className="leftitems">
          <div>
            <img
              src="https://i03.appmifile.com/48_operator_in/17/11/2022/786ada679e2e325724eabe2876999875!96x96.png"
              alt=""
            />
            <h4>Mi Extended Warranty </h4>
          </div>
          <div>
            <img
              src="https://i03.appmifile.com/314_operator_in/17/11/2022/f9e475a37bff4b308e265881090a50ab!96x96.png"
              alt=""
            />
            <h4>Mi Screen Protect</h4>
          </div>
          <div>
            <img
              src="https://i03.appmifile.com/101_operator_in/17/11/2022/0f88264f22456edc80f4ddbbab017d9a!96x96.png"
              alt=""
            />
            <h4>Mi Complete Protect</h4>
          </div>
        </div>
      </div>

      <div className="rightcontainer">
        <div className="topbox boxShadow">
          <h2>Service Centres</h2>
          <h4>We'll guide you to the best solution</h4>
        </div>
        <div className="bottombox boxShadow">
          <h2>Mi Exchange</h2>
          <h4>Renewed For Smoother Experience and Better value for Exchange</h4>
        </div>
      </div>
    </div>
  );
};

export default Service;
