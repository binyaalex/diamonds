import React, { useState } from 'react';
import styles from '../../App.module.scss';

//mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';

//assets
import { ReactComponent as Diamond } from "../../assets/icons/Diamond.svg"
import { ReactComponent as Search } from "../../assets/icons/Search.svg"
import { ReactComponent as Sort } from "../../assets/icons/Sort.svg"

//data
const shapesOne = ["Round", "Princess", "Pear", "Marquise", "Emerald"]
const shapesTwo = ["Oval", "Radiant", "Cushion", "Heart", "Asscher"]
const sliders = [
  {
    title: "Cut",
    labels: ["Exellent", "Very Good", "Good", "Fair", "Poor"],
    colors: [
      '#E9D7FE, #E9D7FE 25%',
      '#D6BBFB 25%, #D6BBFB 50%',
      '#9E77ED 50%, #9E77ED 75%',
      '#6941C6 75%'
    ]
  },
  {
    title: "Color",
    labels:
      ["D", "E", "F", "G", "H", "I", "j", "K"
      ],
    colors: [
      '#E9D7FE,#E9D7FE 16%',
      '#D6BBFB 16%,#D6BBFB 30%',
      '#B692F6 30%,#B692F6 44%',
      '#9E77ED 44%,#9E77ED 58%',
      '#7F56D9 58%,#7F56D9 70%',
      '#6941C6 70%,#6941C6 84%',
      '#53389E 84%',
    ]
  },
  {
    title: "Clarity",
    labels: [
      "FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "SI3", "I1", "I2", "I3"
    ],
    colors: [
      'rgb(233, 215, 254),rgb(233, 215, 254) 9%',
      'rgb(218, 199, 244) 9%,rgb(218, 199, 244) 18%',
      'rgb(203, 183, 234) 18%,rgb(203, 183, 234) 27%',
      'rgb(188, 167, 224)27%,rgb(188, 167, 224) 36%',
      'rgb(173, 151, 214) 36%,rgb(173, 151, 214) 45%',
      'rgb(158, 135, 204)45%,rgb(158, 135, 204) 54%',
      'rgb(143, 119, 194)54%,rgb(143, 119, 194) 63%',
      'rgb(128, 103, 184) 63%,rgb(128, 103, 184) 72%',
      'rgb(113, 87, 174)72%,rgb(113, 87, 174) 81%',
      'rgb(98, 71, 164)81%,rgb(98, 71, 164) 90%',
      'rgb(83, 56, 158)90%',
    ]
  },
]

const Filter = () => {

  const [size, setSize] = useState([0.94, 13.57]);
  const [cut, setCut] = useState([0, 5]);
  const [color, setColor] = useState([0, 8]);
  const [clarity, setClarity] = useState([0, 10]);

  return (
    <>
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', pb: "34px"
      }}>
        <Typography className={styles.mainTitle}>
          Loose Diamonds Search
        </Typography>
        <IconButton       >
          <Search />
        </IconButton>
      </Box>
      <Box className={styles.filter}>
        <FormGroup>
          <Grid container spacing={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Grid item >
              <FormControl >
                <FormLabel
                  className={styles.subTitle}>
                  Shape
                </FormLabel>
                <Grid item
                  sx={{ display: 'flex', justifyContent: "space-between", }}
                >
                  {shapesOne.map((shape) => (
                    <Button variant="outlined" className={styles.button}>
                      <Diamond />
                      <Typography className={styles.buttonText}>
                        {shape}
                      </Typography>
                    </Button>
                  )
                  )}
                </Grid>
                <Grid
                  sx={{ display: 'flex', justifyContent: "space-between", m: "12px 0" }}>
                  {shapesTwo.map((shape) => (
                    <Button variant="outlined" className={styles.button}>
                      <Diamond />
                      <Typography className={styles.buttonText}>
                        {shape}
                      </Typography>
                    </Button>
                  )
                  )}
                </Grid>
              </FormControl>
            </Grid>
            <Grid item >
              <FormControl >
                <FormLabel
                  className={styles.subTitle}>
                  Size
                </FormLabel>
                <Box
                  sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <InputBase
                    className={styles.size}
                    type="text"
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={size[0]}
                  >
                  </InputBase>
                  <Typography
                    sx={{
                      color: '#7C8493'
                      , m: "12px 30px"
                    }}
                  >to</Typography>
                  <InputBase
                    className={styles.size}
                    type="text"
                    inputProps={{ style: { textAlign: 'center' } }}
                    value={size[1]}
                  >
                  </InputBase>
                </Box>
                <Box
                >
                  <Slider
                    sx={{
                      width: 300,
                      padding: '22px 0',
                      color: '#4640DE',
                      height: '12px',
                      borderRadius: '0',
                      '& .MuiSlider-thumb': {
                        color: 'white',
                        borderRadius: '2px',
                        border: 'solid 1px #4640DE',
                        width: '14px',
                        height: '24px'
                      }
                    }}
                    value={size}
                    onChange={e => setSize(e.target.value)}
                    min={0}
                    step={0.01}
                    max={20}
                  />
                </Box>
              </FormControl>
            </Grid>
            <Grid item >
              <FormControl sx={{ width: '100%' }}>
                <FormLabel
                  className={styles.subTitle}>
                  CertiFied
                </FormLabel>
                <Box>
                  <Button variant="outlined" className={styles.button}>
                    <Typography className={styles.buttonText}>
                      GIA
                    </Typography>
                  </Button>
                  <Button variant="outlined" className={styles.button}>
                    <Typography className={styles.buttonText}>
                      Other Labs
                    </Typography>
                  </Button>
                  <Button variant="outlined" className={styles.button}>
                    <Typography className={styles.buttonText}>
                      Uncertified
                    </Typography>
                  </Button>
                </Box>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6} >
            {sliders.map((slider, i) => (
              <Grid item lg={4} >
                <FormControl
                  sx={{ width: '100%' }}>
                  <FormLabel
                    className={styles.subTitle}>
                    {slider.title}
                  </FormLabel>
                  <Box
                    sx={{
                      display: 'flex', justifyContent: 'space-between',
                    }}
                  >
                    {slider.labels.map((label) => (
                      <Typography
                        className={styles.subTitle}
                      >
                        {label}
                      </Typography>
                    ))}
                  </Box>
                  <Slider
                    sx={{
                      // width: 300,
                      padding: '22px 0',
                      // color: '#4640DE',
                      height: '12px',
                      borderRadius: '0',
                      '& .MuiSlider-rail': {
                        opacity: 1, backgroundImage: `linear-gradient(to right, ${slider.colors.join(', ')})`,
                      },
                      '& .MuiSlider-track': {
                        color: 'transparent',
                      },
                      '& .MuiSlider-thumb': {
                        color: 'white',
                        borderRadius: '2px',
                        border: 'solid 1px #4640DE',
                        width: '16px',
                        height: '24px'
                      }
                    }}
                    value={i === 0 ? cut : i === 1 ? color : clarity}
                    onChange={e => {
                      i === 0 ? setCut(e.target.value) :
                        i === 1 ? setColor(e.target.value) :
                          setClarity(e.target.value)
                    }}
                    min={0}
                    max={slider.labels.length - 1}
                  />
                </FormControl>
              </Grid>
            ))}
          </Grid>
        </FormGroup >
        <Box sx={{ height: '1px', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" className={styles.button}
            sx={{
              position: 'relative', height: '40px',
              '&:hover': {
                backgroundColor: '#ffffff',
              }
            }}>
            <Sort />
            <Typography className={styles.largeButtonText}>
              Advanced Filters
            </Typography>
          </Button>
        </Box>
      </Box >
    </>
  )
}
export default Filter