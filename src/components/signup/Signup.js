import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";

import screen from '../../assets/images/screen.JPG'
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import mail from "../../assets/icons/mail.png"
import { FcGoogle } from 'react-icons/fc';

import { Button, Box, FormGroup, FormControl, FormControlLabel, FormLabel, TextField, Grid, Typography, FormHelperText, Checkbox } from '@mui/material/';
import { display, margin } from '@mui/system';

const inputs = [
  { label: 'Full Name*', placeholder: 'Enter your name' },
  { label: 'Email*', placeholder: 'Enter your email' },
  { label: 'Password*', placeholder: 'Create a password', helper: 'Must be at least 8 characters' },
]
const Signup = () => {
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
          sx={{ background: 'white', height: '100%' }}
        >
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
        <Grid item xs={6}
          sx={{
            background: '#F2F4F7', overflow: 'hidden',
            height: '100%'
          }}>
          <img
            src={screen}
            style={{
              height: '60%',
              overflow: 'hidden',
              margin: "20% 10%",
              borderRadius: '8px',
              boxShadow: '0px 64px 64px 64px rgba(15, 15, 15, 0.08), 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)'
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Signup