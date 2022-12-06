import React, { useState } from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Diamond } from "../../assets/icons/logo.svg";

//mui

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

const FooterFiler = () => {
  return (
    <Box>
      <FormGroup>
        <Grid spacing={5}>
          <Grid className={styles.logo}>
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

          <FormControl sx={{ width: "100%" }}>
            <FormLabel>
              <Grid
                item
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {labels.map((labels) => (
                  <Typography>{labels}</Typography>
                ))}
              </Grid>
            </FormLabel>
          </FormControl>
        </Grid>
      </FormGroup>
    </Box>
  );
};

export default FooterFiler;
