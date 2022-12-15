import React, { useState } from 'react';
import styles from './signup.module.scss';
import { useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Tick } from "../../assets/icons/Tick.svg";
import { ReactComponent as Dot } from "../../assets/icons/Dot.svg";
import { ReactComponent as Dot_gray } from "../../assets/icons/Dot_gray.svg";
import { ReactComponent as Arrow } from "../../assets/icons/Arrow.svg";
import mail from "../../assets/icons/mail.png"
import { FcGoogle } from 'react-icons/fc';

import { Button, Box, FormGroup, FormControl, FormControlLabel, FormLabel, TextField, Grid, Typography, FormHelperText, Checkbox, Select, MenuItem } from '@mui/material/';
const progress = [
  { icon: <Tick />, line: 'Your details' },
  { icon: <Dot />, line: 'Business details', marked: true },
  { icon: <Dot_gray />, line: 'Identify verification' },
]
const inputs = [
  { label: 'Company Name*', placeholder: 'Enter your company name' },
  { label: 'Doing business as (DBA)', placeholder: 'Enter your DBA here' },
  { label: 'Business type*', placeholder: 'Select your business type', items: ['Jewelry Store', 'Pawn Shop', 'Other'] },
  { label: 'Business address', placeholder: 'Start typing address...' },
  { label: 'Shipping address', placeholder: 'start typing address...', helper: 'We only deliver to commercial address' },
  { label: 'Contact phone number', placeholder: 'Start typing your phone number' }
]

const Business = () => {
  const [type, setType] = useState('')
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
          sx={{ background: 'white', height: '100%' }}
        >
          <FormGroup
            sx={{
              width: "50%",
              margin: 'auto'
            }}>
            <div
            >
              <h1
                style={{
                  fontWeight: 600,
                  color: "#101828",
                }}
              >
                Business details              </h1>
              <h4
                style={{
                  color: "#667085",
                }}
              >
                Tell us more about your business
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
                {input.items ?
                  <Select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                    size='small'
                  >
                    <MenuItem disabled value=''
                    >
                      <div
                        style={{ color: 'lightgrey' }}
                      >{input.placeholder}</div>
                    </MenuItem>
                    {input.items.map((item) => (
                      <MenuItem value={item}>
                        {item}
                      </MenuItem>
                    ))}

                  </Select>
                  : <TextField fullWidth placeholder={input.placeholder}
                    size='small'
                  />
                }
                <FormHelperText
                  sx={{
                    fontSize: '14px',
                    color: '#667085'
                  }}>{input.helper}</FormHelperText>
              </div>
            ))}
            <Button
              variant="contained"
              onClick={() => navigate('/verify')}
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
              Continue
            </Button>
          </FormGroup>
          <Button
            onClick={() => navigate('/verify')}
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

export default Business