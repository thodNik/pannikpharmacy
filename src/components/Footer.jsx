import React from "react";
import icon from "../assets/icon-white.jpg";
import { motion } from "framer-motion";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <section id="footer">
      <div className="container foot">
        <div className="row">
          <div className="col-lg-4 left">
            <h4>Είμαστε Ανοιχτά</h4>
            <p className="shift">Δευτέρα - Παρασκευή : 09:00 - 21:00</p>
            <p>Σάββατο : 09:30 - 15:00</p>
            <a className="terms" href="/terms">Προστασία προσωπικών δεδομένων</a>
          </div>
          <div className="col-lg-4 middle">
            <motion.img
              className="icon"
              src={icon}
              alt="logo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.img>
          </div>
          <div className="col-lg-4 right">
            <h4>Επικοινωνία</h4>
            <p className="shift">Διεύθυνση: Δημητρακοπούλου 50, Κουκάκι</p>
            <p>Τηλέφωνο: 210 9228300</p>
            <p>Email: nikolaidisfarm@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="author">
        &#169; {year} by Pantelis Nikolaidis Pharmacy
      </div>
    </section>
  );
};

export default Footer;
