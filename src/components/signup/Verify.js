import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";
import { ReactComponent as Dot } from "../../assets/icons/Dot.svg";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import { ReactComponent as Plus } from "../../assets/icons/Plus.svg";
import mail from "../../assets/icons/mail.png"
import { FcGoogle } from 'react-icons/fc';

import { Button, Box, FormGroup, FormControl, FormControlLabel, FormLabel, TextField, Grid, Typography, FormHelperText, Checkbox, Select, MenuItem, Divider } from '@mui/material/';
const progress = [
  { icon: <Tick />, line: 'Your details' },
  { icon: <Tick />, line: 'Business details', marked: true },
  { icon: <Dot />, line: 'Identify verification', marked: true },
]
const inputs = [
  { label: 'Name', placeholder: 'Person name' },
  { label: 'Company name', placeholder: 'Company name' },
  { label: 'Phone number', placeholder: 'Phone number' }
]

const Verify = () => {
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
        <Grid item xs={4}
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 0,
              width: '33%'
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
        <Grid item xs={8}
          sx={{ background: 'white', height: '100%' }}
        >
          <FormGroup
            sx={{
              width: "90%",
              margin: 'auto'
            }}>
            <div>
              <h1
                style={{
                  fontWeight: 600,
                  color: "#101828",
                }}
              >
                Identity Verification
              </h1>
              <h4
                style={{
                  color: "#667085",
                }}
              >
                The following information is required, but can be provided later on.
              </h4>
            </div>
            <FormLabel
              sx={{
                fontWeight: 500,
                fontSize: '14px',
                color: '#344054'
              }}
            >Tax identification number
            </FormLabel>
            <TextField placeholder='TIN/EIN number'
              size='small' sx={{ width: '300px' }}
            />
            <div>
              <h3
                style={{
                  fontWeight: 600,
                  color: "#101828",
                }}
              >
                Business references              </h3>
              <h4
                style={{
                  color: "#667085",
                }}
              >
                Please pvovide contact details of at least 3 established businesses with which you conduct business routinely              </h4>
            </div>
            <Grid container spacing={2}>
              {inputs.map((input) => (
                <Grid item xs={3}>
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
                </Grid>
              ))}
              <Grid item xs={1}
                sx={{ display: 'flex', alignItems: 'end' }}
              >
                <Button
                  variant='outlined'
                  // color='inherit'
                  onClick={() => { }}
                  sx={{
                    borderColor: 'lightgray',
                    width: '30px !important',
                    height: '40px',
                  }}
                >
                  <Plus />
                </Button>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end'
              }}
            >
              <Button
                variant="outlined"
                onClick={() => navigate('/business')}
                sx={{
                  border: "1px solid #D0D5DD",
                  color: '#344054',
                  height: '40px',
                  textTransform: 'none',
                  width: '170px',
                  m: 1
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{
                  width: '170px',
                  m: 1,
                  backgroundColor: '#7F56D9',
                  height: '40px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: "#160FC6"
                  }
                }}
              >
                Continue
              </Button>
            </Box>
          </FormGroup>
          <Button
            onClick={() => navigate('/')}
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 20,
              color: '#667085',
              // height: '44px',
              textTransform: 'none',
            }}
            startIcon={<Arrow />}
          >
            Skip            </Button>
        </Grid>

      </Grid>
    </>
  )
}

export default Verify