import React from "react";
import icon from "../assets/icon-dark.jpg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav class="nav navbar-dark navbar-expand-lg">
    <img src={icon} alt="logo" style={{ width: "50px" }}></img>
      
      <a class="nav-link logo-link" href="/">
        <div className="name-logo">
          <p>
            <span className="pharm">ΦΑΡΜΑΚΕΙΟ</span>
            <br />
            <span className="farm">ΝΙΚΟΛΑΙΔΗΣ Δ.ΠΑΝΤΕΛΗΣ</span>
          </p>
        </div>
      </a>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>
      </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="nav-link" href="/pharmacy">
          Φαρμακείο
        </a>
        <a class="nav-link" href="/newsletter">
          Newsletter
        </a>
        <a class="nav-link" href="/blog">
          Blog
        </a>
        <ul className="navbar-nav ms-auto info">
          <li className="nav-item">
            <BsTelephoneFill style={{ color: "#DBE2EF" }} />
            <span className="s-text" style={{ cursor: "context-menu" }}>
              210 9228300
            </span>
          </li>
          <li className="nav-item">
            <MdMail style={{ color: "#DBE2EF" }} />
            <a className="s-text" href="mailto:nikolaidisfarm@gmail.com">
              nikolaidisfarm@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
