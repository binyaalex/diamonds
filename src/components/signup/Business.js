import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";

import screen from '../../assets/images/screen.JPG'
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";
import { ReactComponent as Dot } from "../../assets/icons/Dot.svg";
import { ReactComponent as Dot_gray } from "../../assets/icons/Dot_gray.svg";
import mail from "../../assets/icons/mail.png"
import { FcGoogle } from 'react-icons/fc';

import { Button, Box, FormGroup, FormControl, FormControlLabel, FormLabel, TextField, Grid, Typography, FormHelperText, Checkbox } from '@mui/material/';
// import { display, margin } from '@mui/system';
const progress = [
  { icon: <Tick />, line: 'Your details' },
  { icon: <Dot />, line: 'Business details', marked: true },
  { icon: <Dot_gray />, line: 'Identify verification' },
]
const inputs = [
  { label: 'Full Name*', placeholder: 'Enter your name' },
  { label: 'Email*', placeholder: 'Enter your email' },
  { label: 'Password*', placeholder: 'Create a password', helper: 'Must be at least 8 characters' },
]

const Business = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container
        sx={{
          position: "fixed",
          zIndex: 1111,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh'
        }}>
        <Grid item xs={6}
          sx={{
            background: '#F2F4F7', overflow: 'hidden',
            height: '100%'
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              m: 3
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
          <div
            style={{

              padding: '36px 48px'
            }}>
            {progress.map((step) => (

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 0'
                }}>
                {step.icon}
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: '16px',
                    color: `${step.marked ? '#6941C6' : '#344054'}`,
                    marginLeft: '10px'
                  }}
                >{step.line}</p>
              </div>
            ))}

          </div>
        </Grid>
        <Grid item xs={6}
          sx={{ background: 'white', height: '100%' }}
        >


          <FormGroup
            sx={{
              width: "50%",
              margin: 'auto'
            }}>
            <div
            // style={{ marginBottom: '10%' }}
            >
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
                <FormHelperText
                  sx={{
                    fontSize: '14px',
                    color: '#667085'
                  }}>{input.helper}</FormHelperText>
              </div>
            ))}

            <FormControlLabel
              control={
                <Checkbox sx={{
                  '&.Mui-checked': {
                    color: '#7F56D9'
                  }
                }}
                />} label={<div style={{
                  fontSize: '14px',
                  color: '#667085'
                }}>i agree to the
                  <Button sx={{ color: "#7F56D9", textTransform: 'none' }}>Terms and Conditions</Button>
                </div>} />
            <Button
              variant="contained"
              onClick={() => navigate('#')}
              sx={{
                backgroundColor: '#7F56D9',
                height: '44px',
                textTransform: 'none',
                mb: 2,
                '&:hover': {
                  backgroundColor: "#160FC6"
                }
              }}
            >
              Get started
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate('#')}
              sx={{
                border: "1px solid #D0D5DD",
                color: '#344054',
                height: '44px',
                textTransform: 'none',
              }}
            >
              <FcGoogle style={{ marginRight: '5px', width: '25px', height: '25px' }} />Sign up with Google
            </Button>
            <div
              style={{
                fontSize: '14px',
                color: '#667085',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5%',

              }}>
              Already have an account?              <Button sx={{ color: "#7F56D9", textTransform: 'none' }}>Log in</Button>
            </div>
          </FormGroup>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 0,
              width: '50%'
            }}>
            <div
              style={{
                fontSize: '14px',
                color: '#667085',
                padding: '20px'
              }}>
              &copy; Diamonds UI 2022
            </div>
            <div
              style={{
                fontSize: '14px',
                color: '#667085',
                padding: '20px'
              }}>
              <img src={mail} style={{ marginRight: '5px' }} />help@diamonds.com
            </div>
          </div>
        </Grid>

      </Grid>
    </>
  )
}

export default Business