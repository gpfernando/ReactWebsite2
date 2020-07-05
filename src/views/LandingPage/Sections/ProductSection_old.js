import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className="container">
      <div>
      <img src="images/watch.jpg" alt="smartwatch" />
        <h3>Wearable Sensors</h3>
        <p>A Samsung Active 2 smartwatch is worn by the caregiver or patient.  This watch has sensors for heartrate, stress level, activity (steps) and GPS location.
        </p>
      </div>
      <div data-aos="fade-left">
      <img src="images/pi.jpg" alt="" />
        <h3>Base Station - Raspberry Pi</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod error
          enim laudantium, animi veniam libero eveniet culpa unde perferendis
          illo fugit corporis, voluptatibus totam dolorum, maiores magnam
          officia. Ab, delectus.
        </p>
      </div>
      </div>
  );
}
