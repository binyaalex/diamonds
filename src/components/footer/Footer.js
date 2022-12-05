import React from "react";
import styles from "./Footer.module.scss";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//Social Logo
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";
import { ReactComponent as Diamond } from "../../assets/icons/logo.svg";

function Footer() {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.fistDiv}>
          <Grid xs={8} className="logo">
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #D0D5DD 100%), #FFFFFF",
                border: "0.2px solid #D0D5DD",
                borderRadius: "8px",
                width: "32px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
              }}
            >
              <Diamond />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                color: "#101828",
                textDecoration: "none",
                fontFamily: ["Inter"],
              }}
            >
              Diamonds
            </Typography>
          </Grid>
          <Grid className="fistMenu">
            <Typography>Fist Menu</Typography>
            <typography className={styles.menuContain}>Feature</typography>
            <typography>Enterprise</typography>
            <typography>Security</typography>
            <typography>Customer Storie</typography>
            <typography>Pricing</typography>
            <typography>Demo</typography>
          </Grid>
          <Grid className="secondMenu">
            <Typography>Second Menu</Typography>
          </Grid>
          <Grid className="thirdMenu">
            <Typography>Third Menu</Typography>
          </Grid>
          <Grid className="forthMenu">
            <Typography>Fourth Menu</Typography>
          </Grid>
        </div>
        <Grid container spacing={2} className={styles.secondDiv}>
          <Grid item xs={8} className="">
            {" "}
            Diamonds @ Copyright 2022, Inc. All rights reserved{" "}
          </Grid>
          <Grid item xs={4} className={styles.socialLogo}>
            <Box>
              <img src={Facebook} />
            </Box>
            <Box>
              <img src={Twitter} />
            </Box>
            <Box>
              <img src={Linkedin} />
            </Box>
            <Box>
              <img src={Instagram} />
            </Box>
            <Box>
              <img src={Github} />
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
