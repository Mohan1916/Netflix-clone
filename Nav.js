import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://lh3.googleusercontent.com/proxy/dx150eb2liUaspQQ6YfOpBepEtLbg_Q8S0kAKVgpuW8kGjc231Zny9A14BrEFg1RROeiAKsJ36qtyhosS7ceY-0oe46o4kyZUhd3Sg1JW-yu1ClzcEWeNFjymAWfMwqTgQ"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
