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
import classNames from "classnames";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import product1 from "assets/img/watch.jpg";
import product2 from "assets/img/pi.jpg";
import product3 from "assets/img/family.jpg";
import product4 from "assets/img/cloud.jpg";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Monitoring System</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card variant="outlined">
            <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>  
                <img src={product1} alt="Sensors" height="200px" max-width="auto" className={imageClasses} />
            </GridItem>
              <h4 className={classes.cardTitle}>
                Wearable Sensors
                <br />
                <small className={classes.smallTitle}>Smartwatch</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Wearable Sensors, such as Samsung Active 2 Smartwatch, are worn by 
                  seniors to monitor vital signs and location.  Other sensors are placed 
                  in the home to monitor environmental factors.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card variant="outlined">
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>  
                <img src={product2} alt="Station" height="200px" max-width="auto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Base Station
                <br />
                <small className={classes.smallTitle}>Raspberry Pi</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  The Base Station controls the network, sensors, and home controllers.  It also acts as the gateway to the Cloud-based Analytics and Reporting application.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>         
          <GridItem xs={12} sm={12} md={4}>
            <Card variant="outlined">
            <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>  
                <img src={product3} alt="Family" height="200px" max-width="auto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Care Providers
                <br />
                <small className={classes.smallTitle}>Family, Doctors, Care Givers</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Care Providers can get real-time alerts and monitor vital signs using an Internet browser or mobile phone.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card variant="outlined">
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>  
                <img src={product4} alt="Cloud" height="200px" max-width="auto" className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cloud-based Analytics and Reporting
                <br />
                <small className={classes.smallTitle}>Google Cloud Applications</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Applications and Database are hosted in a Cloud-based platform for easy access.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
