import React, { useState } from "react";
import icon from "../../assets/icon-dark.jpg";
import axios from "axios";
import "./newsletter.css";

const Newsletter = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");

  const submitUser = () => {
    axios
      .post("https://tame-gold-cockatoo-slip.cyclic.app/subUsers", {
        firstName: fName,
        lastName: lName,
        yourEmail: email,
      })
      .then((response) => {
        console.log("All Good!");
      })
      .catch((err) => {
        console.log(err);
      });

    setFname("");
    setLname("");
    setEmail("");
  };

  return (
    <section id="newsletter">
      <img src={icon} alt="logo" style={{ width: "100px" }}></img>
      <main class="form-signin m-auto">
        <h1 class="h3 mb-3 fw-normal">Γραφτείτε στο Newsletter μας!</h1>
        <div class="form-floating">
          <input
            onChange={(event) => {
              setFname(event.target.value);
            }}
            type="text"
            class="form-control shadow-none"
            id="floatingFname"
            placeholder="First Name"
            value={fName}
          />
          <label for="floatingFname">First Name</label>
        </div>
        <div class="form-floating">
          <input
            onChange={(event) => {
              setLname(event.target.value);
            }}
            type="text"
            class="form-control middle shadow-none"
            id="floatingLname"
            placeholder="Last Name"
            value={lName}
          />
          <label for="floatingLname">Last Name</label>
        </div>
        <div class="form-floating">
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
            class="form-control shadow-none"
            id="floatingEmail"
            placeholder="Email"
            value={email}
          />
          <label for="floatingEmail">Email</label>
        </div>
        <button
          class="w-100 btn btn-lg btn-outline-danger"
          type="submit"
          onClick={submitUser}
        >
          Εγγραφή
        </button>
      </main>
    </section>
  );
};

export default Newsletter;
