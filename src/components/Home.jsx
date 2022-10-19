import React from "react";
import icon1 from "../assets/sample1.jpg";
import icon2 from "../assets/sample2.jpg";
import icon3 from "../assets/pharm4.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const headerVariants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section id="home">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="overlay-image">
              <img src={icon1} class="d-block w-100" alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="overlay-image">
              <img src={icon2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <div class="carousel-item">
            <div className="overlay-image">
              <img src={icon3} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <header>
        <div className="heading">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <h1 className="animation">
              Φαρμακείο
              <br />
              Νικολαΐδης Δ.Παντελής
            </h1>
          </motion.div>
          <p>
            Στο φαρμακείο μας, κοντά στον πεζόδρομο της οδού Δράκου στο Κουκάκι,
            μπορείτε να βρείτε φάρμακα, φαρμακευτικά προϊόντα, ιατροτεχνολογικές
            συσκευές, δερματολογικά καλλυντικά, βρεφικά προϊόντα, ορθοπαιδικά,
            ομοιοπαθητικά φάρμακα, συμπληρώματα διατροφής, φροντίδα για την
            στοματική υγιεινή. Το προσωπικό μας είναι σε θέση να σας καθοδηγήσει
            υπεύθυνα σε αποφάσεις που αφορούν την υγείας σας, με την απαιτούμενη
            γνώση, την συνεχή ενημέρωση για τις εξελίξεις στον τομέα της υγείας,
            απόλυτη αίσθηση ευθύνης και το καλύτερό μας χαμόγελο.
          </p>
        </div>
      </header>
    </section>
  );
};

export default Home;
