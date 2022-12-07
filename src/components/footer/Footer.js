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
import { ReactComponent as Diamond } from "../../assets/icons/Logo.svg";

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
            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 16,
                  }}
                >
                  First Manu
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Feature
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Enterprise
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Security
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Customer Storie
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Pricing
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Demo
                </Typography>
              </Box>
            </Typography>
            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  gridTemplateRows: "repeat(8, 1fr)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 16,
                  }}
                >
                  Second Manu
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Engineering
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Financial Services
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Sales
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  IT
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Customer Support
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Human Resources
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Media
                </Typography>
              </Box>
            </Typography>
            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  gridTemplateRows: "repeat(8, 1fr)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 16,
                  }}
                >
                  Third Manu
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Tips
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Blog
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Event
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Certified Program
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Help Center
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  API
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Download Template
                </Typography>
              </Box>
            </Typography>
            <Typography>
              <Box
                sx={{
                  display: "grid",
                  rowGap: 2,
                  gridTemplateRows: "repeat(7, 1fr)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 16,
                  }}
                >
                  Fourth Menu
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Leadership
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  News
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Media Kit
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Career
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: "#161D25",
                    textDecoration: "none",
                    fontFamily: ["Inter"],
                    fontSize: 14,
                  }}
                >
                  Documentation
                </Typography>
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
