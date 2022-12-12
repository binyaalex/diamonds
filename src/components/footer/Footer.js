import React from "react";
import styles from "./Footer.module.scss";

//mui
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import Toolbar from "@mui/material/Toolbar";

//assets
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Github from "../../assets/images/github.svg";
import { ReactComponent as Diamond } from "../../assets/icons/Logo.svg";

// data

const labels = ["First Menu", "Second Menu", "Third Menu", "Fourth Menu"];
const labels2 = [
  "Feature",
  "Engineering",
  "Tips",
  "About Us",
  "Enterprise",
  "Financial services",
  "blog",
  "Leadership",
  "Security",
  "Sales",
  "Event",
  "News",
  "Customer Storie",
  "IT",
  "Certified Program",
  "Media Kit",
  "Pricing",
  "Customer Support",
  "Help Center",
  "Career",
  "Demo",
  "Human Resources",
  "API",
  "Documentation",
  "",
  "Media",
  "Download Template",
];

const labels3 = [
  {
    header: "First Menu",
    items: [
      "Feature",
      "Enterprise",
      "Security",
      "Customer Storie",
      "Pricing",
      "Demo",
    ],
  },
  {
    header: "Second Menu",
    items: [
      "Engineering",
      "Financial services",
      "Sales",
      "IT",
      "Customer Support",
      "Human Resources",
      "Media",
    ],
  },
  {
    header: "Third Menu",
    items: [
      "Tips",
      "blog",
      "Event",
      "Certified Program",
      "Help Center",
      "API",
      "Download Template",
    ],
  },
  {
    header: "Fourth Menu",
    items: [
      "About Us",
      "Leadership",
      "News",
      "Media Kit",
      "Career",
      "Documentation",
    ],
  },
];

function Footer() {
  return (
    <>
      <Box className={styles.footer}>
        <Box
          sx={{
            display: "flex",
            paddingTop: 8,
          }}
        >
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
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {labels3.map((labels3) => (
              <>
                <Grid item xs={2} sm={4} md>
                  {labels3.header}
                  <Grid item xs={2} sm={4} md>
                    {labels3.items}
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
          {/* <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {labels3.map((labels3) => (
              <Grid item xs={2} sm={4} md>
                {labels3.items}
              </Grid>
            ))}
          </Grid> */}
        </Box>

        {/* **************** */}
        {/* <Box
          sx={{
            display: "grid",
            columnGap: 10,
            gridTemplateColumns: "repeat(4, 1fr)",
            paddingTop: 8,
          }}
        >
          {labels.map((labels) => (
            <Typography
              sx={{
                fontWeight: 400,
                color: "#161D25",
                textDecoration: "none",
                fontFamily: ["Inter"],
                fontSize: 16,
                height: 0,
                marginBottom: 5,
              }}
            >
              {labels}
            </Typography>
          ))}
          {labels2.map((labels2) => (
            <Typography
              sx={{
                fontWeight: 400,
                color: "#161D25",
                textDecoration: "none",
                fontFamily: ["Inter"],
                fontSize: 14,
                marginBottom: 2,
              }}
            >
              {labels2}
            </Typography>
          ))}
        </Box> */}
        {/* **************** */}
      </Box>

      <Box
        className={styles.secondDiv}
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontWeight: 400,
            color: "#5A7184",
            textDecoration: "none",
            fontFamily: ["Inter"],
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            flexGrow: 2,
            marginLeft: 10,
          }}
        >
          Diamonds @ Copyright 2022, Inc. All rights reserved{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "space-around",
            marginRight: 10,
          }}
        >
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
        </Box>
      </Box>
    </>
  );
}

export default Footer;
