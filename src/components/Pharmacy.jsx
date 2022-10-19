import React from "react";
import pic from "../assets/pannikpharm2.jpg";
import pic1 from "../assets/drugs.jpg";
import { motion } from "framer-motion";

const Pharmacy = () => {
  const picVariantsRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 400 },
  };

  const picVariantsLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -400 },
  };

  return (
    <section id="pharmacy">
      <div className="container pharmacy">
        <h3>Το Φαρμακείο μας</h3>
        <div className="row">
          <div className="col-lg-6 text">
            Στο φαρμακείο μας, το προσωπικό μας μπορεί να εκτελέσει με ακρίβεια
            την κάθε συνταγή του ασφαλιστικού σας ταμείου όπως και να σας
            απαντήσει σε κάθε ερώτηση που έχετε σε σχέση με τα φάρμακα σας, το
            κόστος τους, ή την διάγνωση σας. Καταβάλουμε κάθε προσπάθεια ώστε να
            έχουμε σε επάρκεια όλα τα απαραίτητα φάρμακα και να είναι άμεση η
            πρόσβαση σας στην θεραπεία που είναι απαραίτητη, για εσάς ή τους
            ανθρώπους σας.
          </div>
          <motion.div
            className="col-lg-6 pic"
            variants={picVariantsRight}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            <img className="img" src={pic} alt="pharm pic" />
          </motion.div>
          <motion.div
            className="col-lg-6 pic1"
            variants={picVariantsLeft}
            initial="hidden"
            animate="visible"
            transition={{ ease: "easeOut", duration: 0.7 }}
          >
            <img className="img" src={pic1} alt="pharm pic" />
          </motion.div>
          <div className="col-lg-6 text">
            Εδώ θα βρείτε προϊόντα όλων των επωνύμων εταιρειών, φάρμακα,
            φαρμακευτικά προϊόντα, ιατροτεχνολογικές συσκευές, δερματολογικά
            καλλυντικά, βρεφικά προϊόντα, ορθοπαιδικά, ομοιοπαθητικά φάρμακα,
            συμπληρώματα διατροφής, φροντίδα για την στοματική υγιεινή. Το
            προσωπικό μας είναι σε θέση να σας καθοδηγήσουν υπεύθυνα σε
            αποφάσεις που αφορούν την υγείας σας.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pharmacy;
