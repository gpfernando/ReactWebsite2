import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/mypic.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gene Fernando
                <br />
                <small className={classes.smallTitle}>Founder, Principal Investigator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Gene Fernando is the founder of Quark Computing, a company specializing in IT advisory services and product development.  
                He helps companies implement and optimize IT business processes. As Gene’s parents grew older, they suffered the usual infirmities associated with 
                aging, including dementia. According to studies in the US, One in 10 people age 65 and older has Alzheimer’s dementia.<br />
                As Gene’s family went through the various stages of Alzheimer’s, he became acutely aware of its mental and physical costs. Given his technical 
                background, he came to the conclusion that Technology was not being fully applied to the issues faced by people suffering from dementia. He made it his 
                personal mission to contribute to the cause. Quark Computing is developing an IoT monitoring system to help dementia patients and their families cope with 
                the challenges they face every day.  Please go to the Products section of the website to learn more about the products and services being developed.<br />
                Prior to founding his own firm, Gene worked at various Fortune 50 companies starting with IBM, Experian, American Honda, and BMC Software.  As an Architect and 
                Principal Consultant at BMC, he helped large multi-national companies design, implement, and roll-out critical IT systems and applications.
                Gene earned a bachelor’s degree with honors from University of California, Irvine and an M. B. A. from University of Southern California.  
                He has completed additional certifications for ITIL Master Practitioner, BMC Remedy Certified Professional, and various other technical competencies.  
                He is currently leading a Full Stack Web Developer training program in collaboration with San Diego Tech Hub and Open Source Maker Labs. 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kendall Jenner
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
