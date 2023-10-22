import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-flow-row grid-cols-1 bg-cyan-50 xl:grid-cols-2 h-20">
      <h5 className=" items-center justify-center flex">
        © 2023 Your Company, Inc. All rights reserved.
      </h5>
      <div className=" flex justify-center items-center gap-10">
        <a
          href="https://www.linkedin.com/in/jatin-patel-098067271/"
          target="blank"
          className="flex  items-center justify-center gap-2"
        >
          <i className="	fa fa-linkedin-square fa-2xl"></i>
          <h5>Linkdin</h5>
        </a>
        <a
          href="https://github.com/JATINPATEL94"
          target="blank"
          className="flex items-center justify-center gap-2"
        >
          <i className="	fa fa-github-square"></i>
          <h5>GitHube</h5>
        </a>
        <a
          href="https://www.instagram.com/jatin_patel_94/"
          target="black"
          className="flex items-center justify-center gap-2"
        >
          <i className="	fa fa-instagram"></i>
          <h5>Instagram</h5>
        </a>
      </div>
    </div>
  );
};

export default Footer;
