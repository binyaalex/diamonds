import React, { useState } from 'react';
import styles from './signup.module.scss';

import { ReactComponent as Play } from "../../assets/icons/Play.svg";
import { ReactComponent as MacBook } from "../../assets/icons/MacBook.svg";
import screen from '../../assets/images/screen.JPG'
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

// import Box from "@mui/material/Box";
// import FormGroup from '@mui/material/FormGroup';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Button from '@mui/material/Button';
import { Button, Box, FormGroup, FormControl, FormControlLabel, FormLabel, TextField, Grid, Typography, FormHelperText, Checkbox } from '@mui/material/';
const inputs = [
  { label: 'Full Name*', placeholder: 'Enter your name' },
  { label: 'Email*', placeholder: 'Enter your email' },
  { label: 'Password*', placeholder: 'Create a password', helper: 'Must be at least 8 characters' },
]
const Signup = () => {
  return (
    <>
      <Grid container
        sx={{
          position: "absolute",
          zIndex: 1111,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}>
        <Grid item xs={6}
          sx={{ background: 'white' }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mx: 3, mt: 3, mb: 10
            }}
          >
            <Logo />
            <h5
              style={{
                margin: '1%',
                fontWeight: 600,
                color: "#101828",
              }}
            >
              Diamonds
            </h5>
          </Box>

          <FormGroup
            sx={{
              width: "50%",
              margin: 'auto'
            }}>
            <div style={{ marginBottom: '10%' }}>
              <h1
                style={{
                  fontWeight: 600,
                  color: "#101828",
                }}
              >
                Sign up
              </h1>
              <h4
                style={{
                  color: "#667085",
                }}
              >
                It's free, forever
              </h4>
            </div>
            {inputs.map((input) => (
              <div style={{ marginBottom: '5%' }}>
                <FormLabel
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#344054'
                  }}
                >{input.label}</FormLabel>
                <TextField fullWidth placeholder={input.placeholder}
                  size='small'
                />
                <FormHelperText >{input.helper}</FormHelperText>
              </div>
            ))}

            <FormControlLabel control={<Checkbox />} label={<>i agree to the
              <Button sx={{ color: "#7F56D9", textTransform: 'none' }}>Terms and Conditions</Button>
            </>} />
          </FormGroup>
        </Grid>
        <Grid item xs={6}
          sx={{ background: '#F2F4F7' }}>

        </Grid>
      </Grid>
    </>
  )
}

export default Signup