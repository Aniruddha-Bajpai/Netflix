import "../Nav.css";
import React, { useState, useEffect } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => window.removeEventListener("scroll", this);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        {/* Left  */}
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png?20190206123158"
          alt="Netflix logo"
        />

        {/* Right */}
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        />
      </div>
    </>
  );
}

export default Nav;
