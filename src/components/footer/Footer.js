import React from "react";
import styles from "./Footer.module.scss";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//assets
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";
import { ReactComponent as Diamond } from "../../assets/icons/logo.svg";

// data

const labels = ["First Menu", "Second Menu", "Third Menu", "Fourth Menu"];
const firstMenuData = [
  "Feature",
  "Enterprise",
  "Security",
  "Customer Storie",
  "Pricing",
  "Demo",
];

const secondMenuData = [
  "Engineering",
  "Financial services",
  "Sales",
  "IT",
  "Customer Support",
  "Human Resources",
  "Media",
];

const thirdMenuData = [
  "Tips",
  "blog",
  "Event",
  "Certified Program",
  "Help Center",
  "API",
  "Download Template",
];

const fourthMenuData = [
  "About Us",
  "Leadership",
  "News",
  "Media Kit",
  "Career",
  "Documentation",
];

function Footer() {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.fistDiv}>
          <Grid xs={8} className={styles.logo}>
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
          <Box
            sx={{
              display: "grid",
              columnGap: 10,
              gridTemplateColumns: "repeat(4, 1fr)",
              paddingTop: 8,
            }}
          >
            {/* lables */}
            {labels.map((labels) => (
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "#161D25",
                  textDecoration: "none",
                  fontFamily: ["Inter"],
                  fontSize: 16,
                  height: 0,
                }}
              >
                {labels}
              </Typography>
            ))}
            {/* lables */}

            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  // gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                {firstMenuData.map((firstMenuData) => (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#161D25",
                      textDecoration: "none",
                      fontFamily: ["Inter"],
                      fontSize: 14,
                    }}
                  >
                    {firstMenuData}
                  </Typography>
                ))}
              </Box>
            </Typography>

            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  // gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                {secondMenuData.map((secondMenuData) => (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#161D25",
                      textDecoration: "none",
                      fontFamily: ["Inter"],
                      fontSize: 14,
                    }}
                  >
                    {secondMenuData}
                  </Typography>
                ))}
              </Box>
            </Typography>

            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  // gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                {thirdMenuData.map((thirdMenuData) => (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#161D25",
                      textDecoration: "none",
                      fontFamily: ["Inter"],
                      fontSize: 14,
                    }}
                  >
                    {thirdMenuData}
                  </Typography>
                ))}
              </Box>
            </Typography>

            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  // gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                {fourthMenuData.map((fourthMenuData) => (
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: "#161D25",
                      textDecoration: "none",
                      fontFamily: ["Inter"],
                      fontSize: 14,
                    }}
                  >
                    {fourthMenuData}
                  </Typography>
                ))}
              </Box>
            </Typography>
          </Box>
        </div>
        <Grid container spacing={2} className={styles.secondDiv}>
          <Grid item xs={9} className="">
            {" "}
            <Typography
              sx={{
                fontWeight: 400,
                color: "#5A7184",
                textDecoration: "none",
                fontFamily: ["Inter"],
                fontSize: 14,
                paddingLeft: 16,
              }}
            >
              Diamonds @ Copyright 2022, Inc. All rights reserved{" "}
            </Typography>
          </Grid>
          <Grid item xs={2} className={styles.socialLogo}>
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
